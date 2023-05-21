import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from '../slices/product.slice';
import DeliveryAddressReducer from '../slices/DeliveryAddress/deliveryAddress.slice';
import AddNewAddressBtn from '../slices/DeliveryAddress/addAddressButton.slice';
import UserReducer from '../slices/User/user.slice';
import CategoriesReducer from '../slices/categories.slice'
import CartSlice from '../slices/shopCard/card.slice'
import AgeReducer from '../slices/age.slice'
import VendorReducer from '../slices/Vendor/vendor.slise';

export const store = configureStore({
  reducer: {
    ProductReducer,
    DeliveryAddressReducer,
    AddNewAddressBtn,
    UserReducer,
    CategoriesReducer,
    CartSlice,
    AgeReducer
    VendorReducer,
  },
});

export default store;
