import { selectAlbums } from '../../albumStore/album.selector';
import { select, Store } from '@ngrx/store';
import { Albums, AlbumsRes } from '../../albumStore/album.model';
import { Component, OnInit } from '@angular/core';
import * as FromAlbumActions from '../../albumStore/album.actions';
import { Observable } from 'rxjs';
import { AlbumState } from './../../albumStore/album.reducer';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  albums: Observable<AlbumsRes[]>;
  title: string;
  constructor(private store: Store<AlbumState>) {}

  ngOnInit(): void {
    this.store.dispatch(FromAlbumActions.loadAlbums());
    this.albums = this.store.pipe(select(selectAlbums));
  }

  onSubmit(): any {
    const data = {
      title: this.title,
    };
    this.store.dispatch(FromAlbumActions.addAlbum({ album: data }));
  }
}
