import { PostRes } from './../../store/postStore/post.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-post-items',
  templateUrl: './post-items.component.html',
  styleUrls: ['./post-items.component.css']
})
export class PostItemsComponent implements OnInit {
  @Input() post: PostRes;
  @Output() deletePost: EventEmitter<PostRes> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onDeletePost(post: PostRes): any{
    this.deletePost.emit(post);
  }

}
