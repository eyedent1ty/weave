import { configureStore } from '@reduxjs/toolkit';

import postDialogSlice from './features/postDialog/postDialogSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      postDialog: postDialogSlice
    }
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
