import { PostsService } from './../../services/posts.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType  } from '@ngrx/effects';
import { catchError, concatMap, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as FromPostActions from './post.actions';
import { Router } from '@angular/router';



@Injectable()
export class PostEffects {
  @Effect()
  // loads the list of posts
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FromPostActions.loadPosts),
      mergeMap((action) => this.postService.getPosts()
        .pipe(
          map(resObj => FromPostActions.loadPostsSuccess({ posts: resObj.listArr })),
          catchError(error => of( FromPostActions.loadPostsFailure({error:  error.error})))
        )
      )
    )
  );
  // add the single post
  addPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FromPostActions.addPost),
      mergeMap((action) => this.postService.addPost(action.post)
        .pipe(
          map(resObj => FromPostActions.addPostSuccess({ post: resObj.postData })),
          catchError(error => of( FromPostActions.addPostFailure({error: error.error})))
        )
      )
    )
  );

  // loads the single post
  loadPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FromPostActions.loadPost),
      mergeMap((action) => this.postService.getPost(action.ROWID)
        .pipe(
          map(resObj => FromPostActions.loadPostSuccess({ selectedPost: resObj.selectedPost })),
          catchError(error => of( FromPostActions.loadPostFailure({error:  error.error})))
        )
      ),
    )
  );
  // the effect for update the post
  updatePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FromPostActions.updatePost),
      concatMap((action) => this.postService.updatePost(
        action.post.id,
        action.post.changes
        )
      ),
      tap(
        () => this.router.navigate(['/posts']),
        (error) => console.log(error),
        () => console.log('completed')
      )
    ),
    {dispatch: false}
  );

  // the effect for deleting the post
  deletePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FromPostActions.deletePost),
      concatMap((action) => this.postService.deletePost(action.ROWID)
      )
    ),
    {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private postService: PostsService,
    private router: Router
  ) {}

}
