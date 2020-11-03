import { addPost, deletePost, loadPosts} from './../../store/postStore/post.actions';
import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { PostState } from 'src/app/store/postStore/post.reducer';
import { Observable } from 'rxjs';
import { selectPosts } from 'src/app/store/postStore/post.selectors';
import { PostRes } from 'src/app/store/postStore/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts$: Observable<PostRes[]>;
  title: string;
  body: string;

  constructor(private store: Store<PostState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadPosts());
    this.posts$ = this.store.pipe(select(selectPosts));
  }
  onSubmit(): any {
    const data = {
      title: this.title,
      body: this.body,
    };
    this.store.dispatch(addPost({ post: data }));
    // this.posts$ = this.store.pipe(select(selectPosts));
  }
  deletePost(post: PostRes): any {
    const id = post.ROWID;
    this.store.dispatch(deletePost({ROWID: id}));
  }
}
