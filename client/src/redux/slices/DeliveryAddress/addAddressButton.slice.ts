import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    addNewAdressBtn: false,
};

const addNewAdressBtnSlice = createSlice({
  name: 'addNewAdressBtn',
  initialState,
  reducers: {
    addNewAdressBtnToggle(state) {
      state.addNewAdressBtn = !state.addNewAdressBtn;
    },
  },
});

export const { addNewAdressBtnToggle } = addNewAdressBtnSlice.actions;

export default addNewAdressBtnSlice.reducer;