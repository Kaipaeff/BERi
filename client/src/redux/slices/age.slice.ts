import { createSlice } from '@reduxjs/toolkit';
import { stateAgeType } from '../store.types';
import { getAge } from '../Thunk/Age/getAge';

const initialState: stateAgeType = {
  age: [],
  loading: false
};

const ageSlice = createSlice({
  name: 'age',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAge.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAge.fulfilled, (state, action) => {
        state.loading = false;
        state.age = [...action.payload];
      })
      .addCase(getAge.rejected, (state) => {
        state.loading = false;
        console.error('ERROR!');
      })
      .addDefaultCase(() => {});
  },
});

export default ageSlice.reducer;
