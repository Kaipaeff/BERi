import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from '../slices/product.slice';
import DeliveryAddressReducer from '../slices/deliveryAddress.slice';

export const store = configureStore({
  reducer: {
    ProductReducer,
    DeliveryAddressReducer,
  },
});

export default store;
