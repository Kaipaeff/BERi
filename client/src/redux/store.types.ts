import IDeliveryAddress from '../types/DeliveryAddress';
import { productType } from '../types/product';

export type stateType = {
  products: productType[];
  loading: boolean;
};

export type stateTypeAddress = {
  addresses: IDeliveryAddress[] | void;
  loading: boolean;
};
