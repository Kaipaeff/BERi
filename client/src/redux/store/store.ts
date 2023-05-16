import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from '../slices/product.slice'

export const store = configureStore({
  reducer: {
    ProductReducer,
  },
});
