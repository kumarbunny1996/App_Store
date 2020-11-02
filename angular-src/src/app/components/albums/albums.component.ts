import { AlbumState, selectAlbums } from './../../store/album.reducer';
import { select, Store } from '@ngrx/store';
import { Albums } from './../../interfaces/albums';
import { Component, OnInit } from '@angular/core';
import * as FromAlbumActions from './../../store/album.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Observable<Albums[]>;
  constructor(private store: Store<AlbumState>) { }

  ngOnInit(): void {
    this.store.dispatch(FromAlbumActions.loadAlbums());
    this.albums = this.store.pipe(select(selectAlbums));
    console.log(this.albums);
  }

}
