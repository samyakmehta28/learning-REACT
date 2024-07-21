import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const openModalFn = (state) => {
  state.isOpen = true;
};

const closeModalFn = (state) => {
  state.isOpen = false;
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: openModalFn,
    closeModal: closeModalFn,
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
