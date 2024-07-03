import { createSlice } from '@reduxjs/toolkit';

interface authDialogState {
  isOpen: boolean;
}

const initialState: authDialogState = {
  isOpen: false
};

const authDialogSlice = createSlice({
  name: 'authDialog',
  initialState,
  reducers: {
    toggleAuthDialog: (state) => {
      state.isOpen = !state.isOpen;
    },
    openAuthDialog: (state) => {
      state.isOpen = true;
    },
    closeAuthDialog: (state) => {
      state.isOpen = false;
    }
  }
});

export default authDialogSlice.reducer;
export const { toggleAuthDialog, openAuthDialog, closeAuthDialog } =
  authDialogSlice.actions;
