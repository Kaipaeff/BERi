import { RootState } from '../../../types/types';

export const getAllCategoriesCRUD = (state: RootState) =>
  state.CategoryCRUDReducer.allCategories;
