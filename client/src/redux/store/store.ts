import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from '../slices/product.slice'

export const store = configureStore({
  reducer: {
    ProductReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
