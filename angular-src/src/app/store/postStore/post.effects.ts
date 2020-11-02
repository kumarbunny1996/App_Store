import { PostsService } from './../../services/posts.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType  } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as FromPostActions from './post.actions';



@Injectable()
export class PostEffects {
  @Effect()
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FromPostActions.loadPosts),
      mergeMap((action) => this.postService.getPosts()
        .pipe(
          map(posts => FromPostActions.loadPostsSuccess({ posts })),
          catchError(error => of( FromPostActions.loadPostsFailure({error})))
        )
      )
    )
  );
  addPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FromPostActions.addPost),
      mergeMap((action) => this.postService.addPost(action.post)
        .pipe(
          map(post => FromPostActions.addPostSuccess({ post })),
          catchError(error => of( FromPostActions.addPostFailure({error})))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private postService: PostsService,
  ) {}

}
