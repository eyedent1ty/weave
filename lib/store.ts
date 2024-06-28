import { configureStore } from '@reduxjs/toolkit';

import postDialogSlice from './features/postDialog/postDialogSlice';
import postsSlice from './features/posts/postsSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      postDialog: postDialogSlice,
      posts: postsSlice
    }
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
