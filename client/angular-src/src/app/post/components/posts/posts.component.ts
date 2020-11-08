import { addPost, deletePost, loadPosts } from './../../postStore/post.actions';
import { select, Store } from '@ngrx/store';
import { Component, Injectable, OnInit } from '@angular/core';
import { PostState } from './../../postStore/post.reducer';
import { Observable } from 'rxjs';
import { selectPosts } from './../../postStore/post.selectors';
import { PostRes } from './../../postStore/post.model';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts$: PostRes[];
  title: string;
  body: string;
  loadingState: string;
  constructor(private store: Store<PostState>) {
    this.loadPosts();
  }

  ngOnInit(): void {}
  loadPosts(): void {
    if (this.posts$ === undefined) {
      this.store.dispatch(loadPosts());
    }
    this.store.pipe(select(selectPosts)).subscribe(
      (posts) => {
        this.posts$ = posts;
        console.log(posts);
      }
      // (err) => console.log(err),
      // () => console.log('completed')
    );
  }

  onSubmit(): any {
    const data = {
      title: this.title,
      body: this.body,
    };
    this.store.dispatch(addPost({ post: data }));
  }
  deletePost(post: PostRes): any {
    const id = post.ROWID;
    this.store.dispatch(deletePost({ ROWID: id }));
  }

  trackById(index: number, post: PostRes): any {
    return post.ROWID;
  }
}
