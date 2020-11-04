import { EditPostComponent } from './components/edit-post/edit-post.component';
import { PostItemsComponent } from './components/post-items/post-items.component';
import { PostsComponent } from './components/posts/posts.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRoutingModule } from './post-routing.module';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromPost from './postStore/post.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './postStore/post.effects';
import { PostsService } from './services/posts.service';

@NgModule({
  declarations: [PostsComponent, PostItemsComponent, EditPostComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    StoreModule.forFeature(fromPost.postsFeatureKey, fromPost.postReducer),
    EffectsModule.forFeature([PostEffects]),
  ],
  providers: [PostsService],
  exports: [PostsComponent, PostItemsComponent, EditPostComponent],
})
export class PostModule {}
