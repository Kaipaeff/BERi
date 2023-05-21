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
      return { goods: action.payload };
    },
    addDileveryType: (state, action: PayloadAction<any>) =>
      (state = {
        ...state,
        deliveryType: {
          deliveryType: action.payload.deliveryType,
          amount: action.payload.amount,
        },
      }),
    getLocalGoods: (state) => {
      const checkedLocalStorage = localStorage.getItem('GoodsForShopCart');
      const parseGoods = JSON.parse(checkedLocalStorage as string);
      return (state = { ...state, goods: parseGoods });
    },
  },
});

export const { addGoodsReducer, addDileveryType, getLocalGoods } =
  CartSlice.actions;

export default CartSlice.reducer;
