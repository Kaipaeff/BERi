import { RootState } from "../../../types/types";

export const getProductProps = (state: RootState) =>
  state.ProductPropsReducer.productprops;