import * as HomeActions from '../../store/userStore/actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 username: string;
  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
  }
  onSubmit(): void {
    this.store.dispatch(new HomeActions.Home( {
      name: this.username
    }));
    this.router.navigate(['/read']);
  }

}
