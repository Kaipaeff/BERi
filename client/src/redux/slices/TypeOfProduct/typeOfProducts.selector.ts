import { RootState } from '../../../types/types';

export const getAllTypeOfProducts = (state: RootState) =>
  state.AllTypesOfProductReducer.allTypesOfProducts;
