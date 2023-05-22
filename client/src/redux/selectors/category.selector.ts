import { RootState } from "../../types/types";

export const getCategoryState = (state: RootState) =>
  state.CategoriesReducer.categoryState;