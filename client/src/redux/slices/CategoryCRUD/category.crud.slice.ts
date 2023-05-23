import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { stateTypeCategory } from '../../store.types';
import { getAllCategoriesFromBack } from '../../Thunk/CategoriesCRUD/getAllCategoriesFromBack';

import IOneCategory from '../../../types/Category.types';

const initialStateCategories: stateTypeCategory = {
  allCategories: [],
  loading: false,
};

const categoriesCRUDReducerSlice = createSlice({
  name: 'allCategories',
  initialState: initialStateCategories,
  reducers: {
    addCategoryFront: (state, action: PayloadAction<IOneCategory>) => {
      return (state = {
        ...state,
        allCategories: [...state.allCategories, action.payload],
      });
    },
    deleteOneCategoryFront: (state, action: PayloadAction<IOneCategory>) =>
      (state = {
        ...state,
        allCategories: state.allCategories.filter(
          (el): boolean => el.id !== action.payload.id
        ),
      }),
    editOneCategoryFront: (state, action: PayloadAction<IOneCategory>) =>
      (state = {
        ...state,
        allCategories: state.allCategories.map((el) =>
          el.id === action.payload.id
            ? {
                ...el,
                id: action.payload.id,
                category: action.payload.category,
              }
            : el
        ),
      }),
    findCategoryByNameFront: (state, action: PayloadAction<string>) =>
      (state = {
        ...state,
        allCategories: state.allCategories.filter((el): boolean =>
          el.category.toUpperCase().includes(action.payload.toUpperCase())
        ),
      }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategoriesFromBack.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCategoriesFromBack.fulfilled, (state, action) => {
        state.loading = false;
        state.allCategories = [...action.payload];
      })
      .addCase(getAllCategoriesFromBack.rejected, (state) => {
        state.loading = false;
        console.error('ERROR!');
      })
      .addDefaultCase(() => {});
  },
});
export const {
  addCategoryFront,
  deleteOneCategoryFront,
  editOneCategoryFront,
  findCategoryByNameFront,
} = categoriesCRUDReducerSlice.actions;

export default categoriesCRUDReducerSlice.reducer;
