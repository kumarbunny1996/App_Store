import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { StoreModule} from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostItemsComponent } from './components/post-items/post-items.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumItemsComponent } from './components/album-items/album-items.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { homeReducer } from './store/reducer';
import { ReadComponent } from './components/read/read.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AlbumEffects } from './store/album.effects';
import * as fromPost from './store/postStore/post.reducer';
import * as fromAlbum from './store/album.reducer';
import { PostEffects } from './store/postStore/post.effects';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostItemsComponent,
    AlbumsComponent,
    AlbumItemsComponent,
    NavbarComponent,
    HomeComponent,
    ReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({
      name: homeReducer,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AlbumEffects, PostEffects]),
    StoreModule.forFeature(fromPost.postsFeatureKey, fromPost.postReducer),
    StoreModule.forFeature(fromAlbum.albumFeatureKey, fromAlbum.albumReducer),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
