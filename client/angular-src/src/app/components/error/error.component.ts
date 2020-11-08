import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  @Input() childMessage: string;
  constructor() {}

  ngOnInit(): void {
    console.log(this.childMessage);
  }
}
