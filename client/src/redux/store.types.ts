import IDeliveryAddress from '../types/DeliveryAddress';
import IOneUser from '../types/UserTypes';
import IOneVendor from '../types/VendorTypes';
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

export type stateTypeUser = {
  allUsers: IOneUser[];
  loading: boolean;
};
export type stateTypeVendor = {
  allVendors: IOneVendor[];
  loading: boolean;
};
