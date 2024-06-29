import { configureStore } from '@reduxjs/toolkit';

import postDialogSlice from './features/postDialog/postDialogSlice';
import postsSlice from './features/posts/postsSlice';
import usersSlice from './features/users/usersSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      postDialog: postDialogSlice,
      posts: postsSlice,
      users: usersSlice
    }
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
