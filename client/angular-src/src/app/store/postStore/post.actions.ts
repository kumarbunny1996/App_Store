import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Post, PostRes } from './post.model';

// list of posts
export const loadPosts = createAction(
  '[Post List Component] Load Posts',
);
export const loadPostsSuccess = createAction(
  '[Post List Effect] Load Posts Success',
  props<{ posts: PostRes[] }>()
);
export const loadPostsFailure = createAction(
  '[Post List Effect] Load Posts Failure',
  props<{error: any }>()
);

// single post loads
export const loadPost = createAction(
  '[Post Component] Load Posts',
  props<{ ROWID: string }>()
);
export const loadPostSuccess = createAction(
  '[Post Effect] Load Posts Success',
  props<{ selectedPost: PostRes }>()
);
export const loadPostFailure = createAction(
  '[Post Effect] Load Posts Failure',
  props<{error: any }>()
);

// add post
export const addPost = createAction(
  '[Post Add Component] Add Post',
  props<{ post: Post }>()
);

export const addPostSuccess = createAction(
  '[Post Add Effect] Add Post Success',
  props<{ post: PostRes }>()
);

export const addPostFailure = createAction(
  '[Post Add Effect] Add Post Failure',
  props<{ error: any }>()
);

// update post

export const updatePost = createAction(
  '[Post Edit Component] Update Post',
  props<{ post: Update<PostRes> }>()
);

// delete post
export const deletePost = createAction(
  '[Post Components] Delete Post',
  props<{ ROWID: string }>()
);

// clear the posts
export const clearPosts = createAction(
  '[Post Components] Clear Posts'
);
