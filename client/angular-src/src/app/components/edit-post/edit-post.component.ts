import { Update } from '@ngrx/entity';
import { updatePost } from './../../store/postStore/post.actions';
import { PostState } from 'src/app/store/postStore/post.reducer';
import { select, Store } from '@ngrx/store';
import { Post, PostRes } from './../../store/postStore/post.model';
import { Component, OnInit } from '@angular/core';
import { loadPost } from 'src/app/store/postStore/post.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { selectedPost } from 'src/app/store/postStore/post.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  post: PostRes;

  constructor(
    private store: Store<PostState>,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const route = this.route.snapshot.paramMap;
    this.store.dispatch(loadPost({ROWID: route.get('ROWID')}));
    this.store.pipe(select(selectedPost)).subscribe(post => {
      this.post = Object.assign(new PostRes(), post);
    });
  }
  onSubmit(): any {
    const update: Update<PostRes> = {
      id: this.post.ROWID,
      changes: this.post,
    };
    this.store.dispatch(updatePost({post: update}));
  }
}
