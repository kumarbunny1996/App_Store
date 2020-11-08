import { ErrorInterceptors } from './http_interceptors/error.interceptors';
import { CustomPreloadStrategy } from './utils/preload.utils';
import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { homeReducer } from './store/userStore/reducer';
import { ReadComponent } from './components/read/read.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { PostsService } from './post/services/posts.service';
import { SortByPipe } from './utils/pipes/sort-by.pipe';
import { ErrorComponent } from './components/error/error.component';
import { httpInterceptorProviders } from './http_interceptors/http.providers';
import { ErrorService } from './services/error.service';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerService } from './services/spinner.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ReadComponent,
    SortByPipe,
    ErrorComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({
      name: homeReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [
    PostsService,
    CustomPreloadStrategy,
    httpInterceptorProviders,
    ErrorService,
    SpinnerService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
