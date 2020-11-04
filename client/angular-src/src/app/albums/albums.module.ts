import { AlbumsService } from './services/albums.service';
import { AlbumsComponent } from './components/albums/albums.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumItemsComponent } from './components/album-items/album-items.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromAlbum from './albumStore/album.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AlbumEffects } from './albumStore/album.effects';
import { AlbumsRoutingModule } from './albums-routing.module';

@NgModule({
  declarations: [AlbumsComponent, AlbumItemsComponent],
  imports: [
    CommonModule,
    FormsModule,
    AlbumsRoutingModule,
    StoreModule.forFeature(fromAlbum.albumsFeatureKey, fromAlbum.albumReducer),
    EffectsModule.forFeature([AlbumEffects]),
  ],
  providers: [AlbumsService],
  exports: [AlbumsComponent, AlbumItemsComponent],
})
export class AlbumsModule {}
