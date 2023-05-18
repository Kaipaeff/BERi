import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from '../slices/product.slice';
import DeliveryAddressReducer from '../slices/DeliveryAddress/deliveryAddress.slice';
import AddNewAddressBtn from '../slices/DeliveryAddress/addAddressButton.slice';
import UserReducer from '../slices/User/user.slice';

export const store = configureStore({
  reducer: {
    ProductReducer,
    DeliveryAddressReducer,
    AddNewAddressBtn,
    UserReducer,
  },
});

export default store;
