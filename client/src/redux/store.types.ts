import IOneAge from '../types/Age.type';
import IOneCategory from '../types/Category.types';
import IOneColorElement from '../types/ColorTable.types';
import IDeliveryAddress from '../types/DeliveryAddress';
import IOneOrderElement from '../types/ListOfOrders.type';
import IOneSize from '../types/Size.types';
import IOneTypeOfProduct from '../types/TypeOfProducts.type';
import IOneUser from '../types/UserTypes';
import IOneVendor from '../types/VendorTypes';
import { ageType, categoryType, productType } from '../types/product';

export type stateProductType = {
  products: productType[];
  loading: boolean;
};

export type stateCategoriesType = {
  mainCategoryState: number;
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
  sexActive: number;
  ageActive: number;
  catActive: number;
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
export type stateTypeCategory = {
  allCategories: IOneCategory[];
  loading: boolean;
};

export type stateTypeColorScheme = {
  allColorSchemes: IOneColorElement[];
  loading: boolean;
};

export type stateTypeSizeTable = {
  allSizes: IOneSize[];
  loading: boolean;
};

export type stateTypeAllTypesOfProduct = {
  allTypesOfProducts: IOneTypeOfProduct[];
  loading: boolean;
};

export type stateTypeAges = {
  allAges: IOneAge[];
  loading: boolean;
};

export type stateTypeListOfOrders = {
  fullListOfOreders: IOneOrderElement[];
  loading: boolean;
};
