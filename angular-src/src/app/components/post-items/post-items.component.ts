import { Component, OnInit, Input } from '@angular/core';
import { Posts } from 'src/app/interfaces/posts';

@Component({
  selector: 'app-post-items',
  templateUrl: './post-items.component.html',
  styleUrls: ['./post-items.component.css']
})
export class PostItemsComponent implements OnInit {
  @Input() post: Posts;
  constructor() { }

  ngOnInit(): void {
  }

}
