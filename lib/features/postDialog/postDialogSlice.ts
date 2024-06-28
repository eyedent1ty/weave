import { createSlice } from "@reduxjs/toolkit";

interface PostDialogState {
  isOpen: boolean;
}

const initialState: PostDialogState = {
  isOpen: false
};

const postDialogSlice = createSlice({
  name: 'postDialog',
  initialState,
  reducers: {
    togglePostDialog: (state) => {
      state.isOpen = !state.isOpen;
    },
    openPostDialog: (state) => {
      state.isOpen = true;
    },
    closePostDialog: (state) => {
      state.isOpen = false;
    }
  }  
});

export default postDialogSlice.reducer;
export const { togglePostDialog, openPostDialog, closePostDialog } = postDialogSlice.actions;