import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Post } from '@/types';

const initialState: Post[] = [
  {
    id: 1,
    username: 'johndanieldel',
    datePosted: new Date(),
    content: 'Deleted 2 apps'
  }
];

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

