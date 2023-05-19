import { PayloadAction, createSlice } from '@reduxjs/toolkit';
// import { stateType } from '../store.types';
// import { getProducts } from '../Thunk/getProducts';

const initialState: any = {
  goods: [],
  deliveryType: {},
};

const CartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addGoodsReducer: (state, action: PayloadAction<any>) => {
      console.log(state, 'stateEEEEE');
      console.log(action, 'action');
      return (state = { ...state, goods: [...state.goods, action.payload] });
    },
    addDileveryType: (state, action: PayloadAction<any>) =>
      (state = {
        ...state,
        deliveryType: {
          deliveryType: action.payload.deliveryType,
          amount: action.payload.amount,
        },
      }),
  },
});

export const { addGoodsReducer, addDileveryType } = CartSlice.actions;

export default CartSlice.reducer;
