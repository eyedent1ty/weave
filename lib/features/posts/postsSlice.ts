import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import DUMMY_POSTS from './dummy_posts';
import { Post } from '@/types';

const initialState: Post[] = DUMMY_POSTS

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addNewPost: (state, action: PayloadAction<Post>) => {
      state.push(action.payload);
    }
  }
});

export default postsSlice.reducer;
export const { addNewPost } = postsSlice.actions;
