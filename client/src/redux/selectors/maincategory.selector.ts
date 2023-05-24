import { RootState } from "../../types/types";

export const getMainCategoryState = (state: RootState) =>
  state.CategoriesReducer.mainCategoryState;