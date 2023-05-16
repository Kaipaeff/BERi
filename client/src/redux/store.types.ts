import { productType } from "../types/product";

export type stateType = {
  products: productType[];
  loading: boolean;
};
