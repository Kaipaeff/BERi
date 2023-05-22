import { RootState } from "../../types/types";

export const getSexState = (state: RootState) =>
  state.CategoriesReducer.sexState;