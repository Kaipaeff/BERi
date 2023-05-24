import { RootState } from "../../../types/types";

export const getLoading = (state: RootState) =>
  state.ProductPropsReducer.loading;