import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from '../slices/product.slice';
import DeliveryAddressReducer from '../slices/DeliveryAddress/deliveryAddress.slice';
import AddNewAddressBtn from '../slices/DeliveryAddress/addAddressButton.slice';
import ActivateReducer from '../slices/activebutton.slice'
import CategoriesReducer from '../slices/categories.slice'

export const store = configureStore({
  reducer: {
    ProductReducer,
    DeliveryAddressReducer,
    AddNewAddressBtn,
    ActivateReducer,
    CategoriesReducer,
  },
});

export default store;
