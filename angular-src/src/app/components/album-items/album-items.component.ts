import { Component, OnInit, Input } from '@angular/core';
import { Albums } from 'src/app/interfaces/albums';

@Component({
  selector: 'app-album-items',
  templateUrl: './album-items.component.html',
  styleUrls: ['./album-items.component.css']
})
export class AlbumItemsComponent implements OnInit {
  @Input() album: Albums;
  constructor() { }

  ngOnInit(): void {
  }

}
