import IDeliveryAddress from '../types/DeliveryAddress';
import { categoryType, productType } from '../types/product';

export type stateProductType = {
  products: productType[];
  loading: boolean;
};

export type stateCategoriesType = {
  categories: categoryType[];
  loading: boolean;
};

export type stateTypeAddress = {
  addresses: IDeliveryAddress[];
  loading: boolean;
};

export type stateActiveType = {
  active: number;
};
