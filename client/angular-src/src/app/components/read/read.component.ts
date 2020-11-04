import { PostsService } from './../../post/services/posts.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/userStore/reducer';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
})
export class ReadComponent implements OnInit {
  name: string;
  constructor(private store: Store<State>, private ps: PostsService) {}

  ngOnInit(): void {
    this.ps.getState().subscribe((state) => {
      console.log(state);
      this.name = state.name;
      console.log(this.name);
    });
  }
}
