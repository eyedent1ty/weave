import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import type { User } from '@/types';

const initialState = {
  users: [] as User[],
  loading: false,
  error: '' as string | undefined
};

export const fetchAllUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const response = await fetch('/api/users');
    return await response.json();
  } catch (e) {
    console.log(e);
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllUsers.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });

    builder.addCase(fetchAllUsers.rejected, (state, action) => {
      state.error = action.error.message;
    });
  }
});

export default usersSlice.reducer;
