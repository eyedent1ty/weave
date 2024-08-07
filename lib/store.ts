import { configureStore } from '@reduxjs/toolkit';

import postDialogSlice from './features/postDialog/postDialogSlice';
import postsSlice from './features/posts/postsSlice';
import usersSlice from './features/users/usersSlice';
import backdropSlice from './features/backdrop/backdropSlice';
import replyDialogSlice from './features/replyDialog/replyDialogSlice';
import currentUserSlice from './features/currentUser/currentUserSlice';
import editProfileDialogSlice from './features/editProfileDialog/editProfileDialogSlice';
import authDialogSlice from './features/authDialog/authDialogSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      postDialog: postDialogSlice,
      posts: postsSlice,
      users: usersSlice,
      backdrop: backdropSlice,
      replyDialog: replyDialogSlice,
      currentUser: currentUserSlice,
      editProfileDialog: editProfileDialogSlice,
      authDialog: authDialogSlice
    }
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
