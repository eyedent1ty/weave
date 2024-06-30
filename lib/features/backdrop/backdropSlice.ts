import { createSlice } from '@reduxjs/toolkit';

interface BackdropState {
  isOpen: boolean;
}

const initialState: BackdropState = {
  isOpen: false
};

const backdropSlice = createSlice({
  name: 'backdrop',
  initialState,
  reducers: {
    toggleBackdrop: (state) => {
      state.isOpen = !state.isOpen;
    },
    openBackdrop: (state) => {
      state.isOpen = true;
    },
    closeBackdrop: (state) => {
      state.isOpen = false;
    }
  }
});

export default backdropSlice.reducer;
export const { toggleBackdrop, openBackdrop, closeBackdrop } = backdropSlice.actions;