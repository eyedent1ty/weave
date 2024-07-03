import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { User } from '@/types';

const initialState: User = {
  id: 0,
  username: '',
  firstName: '',
  lastName: '',
  imageUrl: '',
  followers: 2312323,
  bio: '',
  link: ''
};

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User>) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.imageUrl = action.payload.imageUrl;
      state.followers = action.payload.followers;
      state.bio = action.payload.bio;
      state.link = action.payload.link;
    }
  }
});

export default currentUserSlice.reducer;
export const { setCurrentUser } = currentUserSlice.actions;
