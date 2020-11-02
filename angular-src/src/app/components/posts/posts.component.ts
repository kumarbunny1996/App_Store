import { addPost, loadPosts} from './../../store/postStore/post.actions';
import { select, Store } from '@ngrx/store';
import { Posts } from './../../interfaces/posts';
import { Component, OnInit } from '@angular/core';
import { PostState } from 'src/app/store/postStore/post.reducer';
import { Observable } from 'rxjs';
import { selectPosts } from 'src/app/store/postStore/post.selectors';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts$: Observable<Posts[]>;
  title: string;
  body: string;

  constructor(private store: Store<PostState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadPosts());
    this.posts$ = this.store.pipe(select(selectPosts));
  }
  onSubmit(): any {
    const data = {
      userId: 1,
      id: 101,
      title: this.title,
      body: this.body,
    };
    this.store.dispatch(addPost({ post: data}));
  }
}
