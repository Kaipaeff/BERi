import { createSlice } from '@reduxjs/toolkit';
import { stateActiveType } from '../store.types';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: stateActiveType = {
  active: 0,
};

const activateSlice = createSlice({
  name: 'activate',
  initialState,
  reducers: {
    activateButton: (state, action: PayloadAction<number>) =>
      (state = { ...state, active: action.payload }),
  },
});

export const { activateButton } = activateSlice.actions;

export default activateSlice.reducer;
