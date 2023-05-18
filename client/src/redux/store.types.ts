import IDeliveryAddress from '../types/DeliveryAddress';
import IOneUser from '../types/UserTypes';
import { productType } from '../types/product';

export type stateType = {
  products: productType[];
  loading: boolean;
};

export type stateTypeAddress = {
  addresses: IDeliveryAddress[];
  loading: boolean;
};

export type stateTypeUser = {
  allUsers: IOneUser[];
  loading: boolean;
};
