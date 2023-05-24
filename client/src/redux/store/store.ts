import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from '../slices/product.slice';
import DeliveryAddressReducer from '../slices/DeliveryAddress/deliveryAddress.slice';
import AddNewAddressBtn from '../slices/DeliveryAddress/addAddressButton.slice';
import UserReducer from '../slices/User/user.slice';
import CategoriesReducer from '../slices/categories.slice';
import CategoryCRUDReducer from '../slices/CategoryCRUD/category.crud.slice';
import ColorSchemeReducer from '../slices/ColorSheme/colorScheme.slice';
import CartSlice from '../slices/shopCard/card.slice';
import AgeReducer from '../slices/age.slice';
import VendorReducer from '../slices/Vendor/vendor.slise';
import SizeTableReducer from '../slices/SizeTable/sizetable.slice';
import AllTypesOfProductReducer from '../slices/TypeOfProduct/typeOfProducts.slice';
import ListOfUserOrdersReduser from '../slices/ListOfOrders/listOfOrders.slice';

export const store = configureStore({
  reducer: {
    ProductReducer,
    DeliveryAddressReducer,
    AddNewAddressBtn,
    UserReducer,
    CategoriesReducer,
    CartSlice,
    AgeReducer,
    VendorReducer,
    CategoryCRUDReducer,
    ColorSchemeReducer,
    SizeTableReducer,
    AllTypesOfProductReducer,
    ListOfUserOrdersReduser,
  },
});

export default store;
