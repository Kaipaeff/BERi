import { createSlice } from '@reduxjs/toolkit';
import { stateProductPropsType } from '../../store.types';
import { getProductPropsFromBack } from '../../Thunk/ProductProps/getProductPropsFromBack';

const initialState: stateProductPropsType = {
  productprops: [],
  loading: false,
};

const productPropsSlice = createSlice({
  name: 'productprops',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductPropsFromBack.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductPropsFromBack.fulfilled, (state, action) => {
        state.loading = false;
        state.productprops = [...action.payload];
      })
      .addCase(getProductPropsFromBack.rejected, (state) => {
        state.loading = false;
        console.error('ERROR!');
      })
      .addDefaultCase(() => {});
  },
});

export default productPropsSlice.reducer;
