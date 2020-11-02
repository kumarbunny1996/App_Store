import { createFeatureSelector, createSelector } from '@ngrx/store';
import { postsFeatureKey, PostState, selectAll } from './post.reducer';

// selectors
export const selectPostsFeatureState = createFeatureSelector<PostState>(
    postsFeatureKey
  );

export const selectPosts = createSelector(selectPostsFeatureState, selectAll);
