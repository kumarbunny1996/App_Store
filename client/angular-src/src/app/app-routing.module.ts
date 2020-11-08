import { ReadComponent } from './components/read/read.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomPreloadStrategy } from './utils/preload.utils';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'app', component: HomeComponent },
  {
    path: 'post',
    loadChildren: () => import('./post/post.module').then((m) => m.PostModule),
    data: { preload: true },
  },
  {
    path: 'albums',
    loadChildren: () =>
      import('./albums/albums.module').then((m) => m.AlbumsModule),
    data: { preload: true },
  },
  { path: 'read', component: ReadComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadStrategy }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
