import { createSlice } from '@reduxjs/toolkit';

interface editProfileDialogState {
  isOpen: boolean;
}

const initialState: editProfileDialogState = {
  isOpen: false
};

const editProfileDialogSlice = createSlice({
  name: 'editProfileDialog',
  initialState,
  reducers: {
    toggleEditProfileDialog: (state) => {
      state.isOpen = !state.isOpen;
    },
    openEditProfileDialog: (state) => {
      state.isOpen = true;
    },
    closeEditProfileDialog: (state) => {
      state.isOpen = false;
    }
  }
});

export default editProfileDialogSlice.reducer;
export const {
  toggleEditProfileDialog,
  openEditProfileDialog,
  closeEditProfileDialog
} = editProfileDialogSlice.actions;
