import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { User } from '@/types';

import DUMMY_USERS from './dummy_users';

const initialState: User[] = DUMMY_USERS;

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUserById(state, action: PayloadAction<number>) {
      console.log('Hello WOrld')
    }
  }
});

export default usersSlice.reducer;
