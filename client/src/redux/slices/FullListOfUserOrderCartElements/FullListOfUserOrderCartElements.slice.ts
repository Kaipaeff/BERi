import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { stateTypeListOfOrdersCartElements } from '../../store.types';

import IOneOrderedCartElement from '../../../types/Cart.type';
import { getFullListOfUserOrderCartElementsFromBack } from '../../Thunk/FullListOfUserOrderCartElements/getFullListOfUserOrderCartElementsFromBack';

const initialStateUserCartOrderedElements: stateTypeListOfOrdersCartElements = {
  allUserCartOrderedElements: [],
  loading: false,
};

const FullListOfUserOrderCartElementsReducerSlice = createSlice({
  name: 'fullListOfOreders',
  initialState: initialStateUserCartOrderedElements,
  reducers: {
    addUserOrderedCartElementFront: (
      state,
      action: PayloadAction<IOneOrderedCartElement >
    ) => {
      return (state = {
        ...state,
        allUserCartOrderedElements: [
          ...state.allUserCartOrderedElements,
          action.payload,
        ],
      });
    },
    deleteUserOrderedCartElementFront: (
      state,
      action: PayloadAction<IOneOrderedCartElement>
    ) =>
      (state = {
        ...state,
        allUserCartOrderedElements: state.allUserCartOrderedElements.filter(
          (el): boolean => el.id !== action.payload.id
        ),
      }),
    editOneUserOrderedCartlementFront: (
      state,
      action: PayloadAction<IOneOrderedCartElement >
    ) => {
      const newState = {
        ...state,
        allUserCartOrderedElements: state.allUserCartOrderedElements.map((el) =>
          el.id === action.payload.id
            ? {
                ...el,
                id: action.payload.id,
                userId: action.payload.userId,
                productPropsId: action.payload.productPropsId,
                quantity: action.payload.quantity,
                price: action.payload.price,
                totalPrice: action.payload.totalPrice,
                orderId: action.payload.orderId,
              }
            : el
        ),
      };
      return (state = newState);
    },
    findOneUserOrderedCartElementByIdFront: (state, action: PayloadAction<number>) =>
      (state = {
        ...state,
        allUserCartOrderedElements: state.allUserCartOrderedElements.filter(
          (el): boolean => el.id === action.payload
        ),
      }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFullListOfUserOrderCartElementsFromBack.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFullListOfUserOrderCartElementsFromBack.fulfilled, (state, action) => {
        state.loading = false;
        state.allUserCartOrderedElements = [...action.payload];
      })
      .addCase(getFullListOfUserOrderCartElementsFromBack.rejected, (state) => {
        state.loading = false;
        console.error('ERROR!');
      })
      .addDefaultCase(() => {});
  },
});
export const {
  addUserOrderedCartElementFront,
  deleteUserOrderedCartElementFront,
  editOneUserOrderedCartlementFront,
  findOneUserOrderedCartElementByIdFront,
} = FullListOfUserOrderCartElementsReducerSlice.actions;

export default FullListOfUserOrderCartElementsReducerSlice.reducer;
