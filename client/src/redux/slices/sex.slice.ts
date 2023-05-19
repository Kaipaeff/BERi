import { createSlice } from '@reduxjs/toolkit';
import { sexType } from '../store.types';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: sexType = {
  sex: 0,
};

const changeSexSlice = createSlice({
  name: 'activate',
  initialState,
  reducers: {
    changeSex: (state, action: PayloadAction<number>) =>
      (state = { ...state, sex: action.payload }),
  },
});

export const { changeSex } = changeSexSlice.actions;

export default changeSexSlice.reducer;
