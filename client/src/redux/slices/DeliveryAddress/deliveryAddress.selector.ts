import { RootState } from '../../../types/types';

export const getDeliveryAddress = (state: RootState) =>
  state.DeliveryAddressReducer;
