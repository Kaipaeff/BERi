import { createSlice } from '@reduxjs/toolkit';
import { stateCategoriesType } from '../store.types';
import { getCategories } from '../Thunk/Categories/getCategories';

const initialState: stateCategoriesType = {
  categories: [],
  loading: false
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = [...action.payload];
      })
      .addCase(getCategories.rejected, (state) => {
        state.loading = false;
        console.error('ERROR!');
      })
      .addDefaultCase(() => {});
  },
});

export default categoriesSlice.reducer;
