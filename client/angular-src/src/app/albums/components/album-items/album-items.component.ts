import { Component, OnInit, Input } from '@angular/core';
import { Albums } from '../../albumStore/album.model';

@Component({
  selector: 'app-album-items',
  templateUrl: './album-items.component.html',
  styleUrls: ['./album-items.component.css'],
})
export class AlbumItemsComponent implements OnInit {
  @Input() album: Albums;
  constructor() {}

  ngOnInit(): void {}
}
