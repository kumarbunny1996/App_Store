import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Post } from './post.model';

// list of posts
export const loadPosts = createAction(
  '[Post List Component] Load Posts',
);
export const loadPostsSuccess = createAction(
  '[Post List Effect] Load Posts Success',
  props<{ posts: Post[] }>()
);
export const loadPostsFailure = createAction(
  '[Post List Effect] Load Posts Failure',
  props<{error: any }>()
);

// add post
export const addPost = createAction(
  '[Post Add Component] Add Post',
  props<{ post: Post }>()
);

export const addPostSuccess = createAction(
  '[Post Add Effect] Add Post Success',
  props<{ post: Post }>()
);

export const addPostFailure = createAction(
  '[Post Add Effect] Add Post Failure',
  props<{ error: any }>()
);

// update post

export const upsertPost = createAction(
  '[Post/API] Upsert Post',
  props<{ post: Post }>()
);

export const upsertPosts = createAction(
  '[Post/API] Upsert Posts',
  props<{ posts: Post[] }>()
);

export const updatePost = createAction(
  '[Post/API] Update Post',
  props<{ post: Update<Post> }>()
);



export const deletePost = createAction(
  '[Post/API] Delete Post',
  props<{ id: string }>()
);


export const clearPosts = createAction(
  '[Post/API] Clear Posts'
);
