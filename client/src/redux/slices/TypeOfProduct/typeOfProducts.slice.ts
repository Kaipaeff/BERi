import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { stateTypeAllTypesOfProduct } from '../../store.types';
import { getAllTypesOfProductsFromBack } from '../../Thunk/TypeOfProducts/getAllTypesOfProductsFromBack';

import IOneTypeOfProduct from '../../../types/TypeOfProducts.type';

const initialStateCategories: stateTypeAllTypesOfProduct = {
  allTypesOfProducts: [],
  loading: false,
};

const allTypesOfProductReducerSlice = createSlice({
  name: 'allTypesOfProducts',
  initialState: initialStateCategories,
  reducers: {
    addTypeOfProductFront: (state, action: PayloadAction<IOneTypeOfProduct>) => {
      return (state = {
        ...state,
        allTypesOfProducts: [...state.allTypesOfProducts, action.payload],
      });
    },
    deleteOneTypeOfProductFront: (state, action: PayloadAction<IOneTypeOfProduct>) =>
      (state = {
        ...state,
        allTypesOfProducts: state.allTypesOfProducts.filter(
          (el): boolean => el.id !== action.payload.id
        ),
      }),
    editOneTypeOfProductFront: (state, action: PayloadAction<IOneTypeOfProduct>) =>
      (state = {
        ...state,
        allTypesOfProducts: state.allTypesOfProducts.map((el) =>
          el.id === action.payload.id
            ? {
                ...el,
                id: action.payload.id,
                productType: action.payload.productType,
              }
            : el
        ),
      }),
    findTypeOfProductFront: (state, action: PayloadAction<string>) =>
      (state = {
        ...state,
        allTypesOfProducts: state.allTypesOfProducts.filter((el): boolean =>
          el.productType.toUpperCase().includes(action.payload.toUpperCase())
        ),
      }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTypesOfProductsFromBack.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllTypesOfProductsFromBack.fulfilled, (state, action) => {
        state.loading = false;
        state.allTypesOfProducts = [...action.payload];
      })
      .addCase(getAllTypesOfProductsFromBack.rejected, (state) => {
        state.loading = false;
        console.error('ERROR!');
      })
      .addDefaultCase(() => {});
  },
});
export const {
    addTypeOfProductFront,
    deleteOneTypeOfProductFront,
    editOneTypeOfProductFront,
    findTypeOfProductFront,
} = allTypesOfProductReducerSlice.actions;

export default allTypesOfProductReducerSlice.reducer;
