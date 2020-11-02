import { PostsService } from './../../services/posts.service';
import { User } from './../../model/user';
import * as homeActions from './../../store/actions';
import { State } from './../../interfaces/state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  // user: Observable<User>;
  name: string;
  constructor(private store: Store<State>, private ps: PostsService) {
    // this.user = this.store.select('user');
    // console.log(this.user);
   }

  ngOnInit(): void {
    this.ps.getState().subscribe(state => {
      console.log(state);
      this.name = state.name;
      console.log(this.name);
    });
  }

}
