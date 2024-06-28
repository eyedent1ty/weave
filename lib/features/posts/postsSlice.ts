import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Post } from '@/types';

const initialState: Post[] = [];

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

