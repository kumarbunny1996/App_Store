import * as HomeActions from '../../store/userStore/actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

export interface Items {
  id: number;
  name: string;
  year: number;
  age: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  username: string;
  items: Items[];
  sortField: any = 'id';
  sortFields: Array<string> = ['id', 'name', 'year', 'age'];
  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    console.log(this);
    this.items = [
      {
        id: 1,
        name: 'sathish',
        year: 1996,
        age: 23,
      },
      {
        id: 2,
        name: 'mugesh',
        year: 1998,
        age: 22,
      },
      {
        id: 3,
        name: 'naren',
        year: 1997,
        age: 23,
      },
      {
        id: 4,
        name: 'murugan',
        year: 1976,
        age: 44,
      },
      {
        id: 5,
        name: 'surya',
        year: 1998,
        age: 22,
      },
    ];
  }
  onSubmit(): void {
    this.store.dispatch(
      new HomeActions.Home({
        name: this.username,
      })
    );
    this.router.navigate(['/read']);
  }
}
