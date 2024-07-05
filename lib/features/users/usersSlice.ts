import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import type { User } from '@/types';

const initialState = {
  users: [] as User[],
  loading: false,
  error: '' as string | undefined,
  currentUser: null as User | null
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
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    }
  },
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
export const { setCurrentUser } = usersSlice.actions;
