import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { Post } from '@/types';

interface ReplyDialogState {
  isOpen: boolean;
  currentPost: Post | null;
}

const initialState: ReplyDialogState = {
  isOpen: false,
  currentPost: null
};

const replyDialogSlice = createSlice({
  name: 'replyDialog',
  initialState,
  reducers: {
    toggleReplyDialog: (state) => {
      state.isOpen = !state.isOpen;
    },
    openReplyDialog: (state) => {
      state.isOpen = true;
    },
    closeReplyDialog: (state) => {
      state.isOpen = false;
    },
    setCurrentPost: (state, action: PayloadAction<Post>) => {
      state.currentPost = action.payload;
    }
  }
});

export default replyDialogSlice.reducer;
export const {
  toggleReplyDialog,
  openReplyDialog,
  closeReplyDialog,
  setCurrentPost
} = replyDialogSlice.actions;
