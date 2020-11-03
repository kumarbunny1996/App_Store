import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Post, PostRes } from './post.model';
import * as PostActions from './post.actions';

export const postsFeatureKey = 'posts';

export interface PostState extends EntityState<PostRes> {
  // additional entities state properties
  selectedPost: PostRes;
  error: any;
}
export function selectPostId(a: PostRes): string {
  // In this case this would be optional since primary key is id
  return a.ROWID;
}

export const adapter: EntityAdapter<PostRes> = createEntityAdapter<PostRes>({
  selectId: selectPostId,
});

export const initialState: PostState = adapter.getInitialState({
  // additional entity state properties
  selectedPost: undefined,
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
  on(PostActions.loadPostSuccess,
    (state, action) => {
      return {
        ...state,
        selectedPost: action.selectedPost
      };
    }
  ),
  on(PostActions.loadPostFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error,
      };
    }
  ),
  on(PostActions.updatePost,
    (state, action) => adapter.updateOne(action.post, state)
  ),

  on(PostActions.deletePost,
    (state, action) => adapter.removeOne(action.ROWID, state)
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
