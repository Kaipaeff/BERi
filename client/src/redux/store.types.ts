import IDeliveryAddress from '../types/DeliveryAddress';
import IOneUser from '../types/UserTypes';
import IOneVendor from '../types/VendorTypes';
import { ageType, categoryType, productType } from '../types/product';

export type stateProductType = {
  products: productType[];
  loading: boolean;
};

export type stateCategoriesType = {
  ageState: number;
  sexState: number;
  categoryState: number;
  categories: categoryType[];
  loading: boolean;
};

export type stateAgeType = {
  age: ageType[];
  loading: boolean;
};

export type stateTypeAddress = {
  addresses: IDeliveryAddress[];
  loading: boolean;
};

export type stateActiveType = {
  sexActive: number,
  ageActive: number,
  catActive: number,
};

export type sexType = {
  sex: number;
};

export type stateTypeUser = {
  allUsers: IOneUser[];
  loading: boolean;
};
export type stateTypeVendor = {
  allVendors: IOneVendor[];
  loading: boolean;
};
