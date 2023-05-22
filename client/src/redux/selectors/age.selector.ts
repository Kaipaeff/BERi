import { RootState } from "../../types/types";

export const getAgeState = (state: RootState) =>
  state.CategoriesReducer.ageState;