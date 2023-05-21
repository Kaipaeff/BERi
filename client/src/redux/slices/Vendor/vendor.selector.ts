import { RootState } from '../../../types/types';

export const getAllVendors = (state: RootState) =>
  state.VendorReducer.allVendors;
