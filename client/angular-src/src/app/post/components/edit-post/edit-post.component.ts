import { Update } from '@ngrx/entity';
import { updatePost } from './../../postStore/post.actions';
import { PostState } from './../../postStore/post.reducer';
import { select, Store } from '@ngrx/store';
import { Post, PostRes } from './../../postStore/post.model';
import { Component, OnInit } from '@angular/core';
import { loadPost } from './../../postStore/post.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { selectedPost } from './../../postStore/post.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit {
  post: PostRes;

  constructor(
    private store: Store<PostState>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const route = this.route.snapshot.paramMap;
    this.store.dispatch(loadPost({ ROWID: route.get('ROWID') }));
    this.store.pipe(select(selectedPost)).subscribe((post) => {
      this.post = Object.assign(new PostRes(), post);
      console.log(this.post);
    });
  }
  onSubmit(): any {
    const update: Update<PostRes> = {
      id: this.post.ROWID,
      changes: this.post,
    };
    this.store.dispatch(updatePost({ post: update }));
  }
}
