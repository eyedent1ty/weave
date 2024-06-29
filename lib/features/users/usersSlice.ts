import { createSlice } from '@reduxjs/toolkit';

import User from '@/classes/User';

import DUMMY_USERS from './dummy_users';

const initialState: User[] = DUMMY_USERS;

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
});

export default usersSlice.reducer;
