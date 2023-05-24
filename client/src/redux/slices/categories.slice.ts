import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { stateCategoriesType } from '../store.types';
import { getCategories } from '../Thunk/Categories/getCategories';

const initialState: stateCategoriesType = {
  mainCategoryState: 0,
  ageState: 0,
  sexState: 0,
  categoryState: 0,
  categories: [],
  loading: false,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setMainCategoryState: (state, action: PayloadAction<number>) =>
      (state = { ...state, mainCategoryState: action.payload }),
    setCategoryState: (state, action: PayloadAction<number>) =>
      (state = { ...state, categoryState: action.payload }),
    setSexState: (state, action: PayloadAction<number>) =>
      (state = { ...state, sexState: action.payload }),
    setAgeState: (state, action: PayloadAction<number>) =>
      (state = { ...state, ageState: action.payload }),
  },
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

export const {
  setCategoryState,
  setSexState,
  setAgeState,
  setMainCategoryState,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
