import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Post } from './post.model';
import * as PostActions from './post.actions';

export const postsFeatureKey = 'posts';

export interface PostState extends EntityState<Post> {
  // additional entities state properties
  error: any;
}

export const adapter: EntityAdapter<Post> = createEntityAdapter<Post>();

export const initialState: PostState = adapter.getInitialState({
  // additional entity state properties
  error: undefined,
});


export const postReducer = createReducer(
  initialState,
  on(PostActions.addPostSuccess,
    (state, action) => adapter.addOne(action.post, state)
  ),
  on(PostActions.addPostFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error,
      };
    }
  ),
  on(PostActions.loadPostsSuccess,
    (state, action) => adapter.setAll(action.posts, state)
  ),
  on(PostActions.loadPostsFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error,
      };
    }
  ),
  on(PostActions.upsertPost,
    (state, action) => adapter.upsertOne(action.post, state)
  ),

  on(PostActions.upsertPosts,
    (state, action) => adapter.upsertMany(action.posts, state)
  ),
  on(PostActions.updatePost,
    (state, action) => adapter.updateOne(action.post, state)
  ),

  on(PostActions.deletePost,
    (state, action) => adapter.removeOne(action.id, state)
  ),

  on(PostActions.clearPosts,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
