import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getDeliveryAddress } from '../../Thunk/DeliveryAddress/getDeliveryAddress';
import { stateTypeAddress } from '../../store.types';
import IDeliveryAddress from '../../../types/DeliveryAddress';

const initialStateAddress: stateTypeAddress = {
  addresses: [],
  loading: false,
};

const deliveryAddressSlice = createSlice({
  name: 'addresses',
  initialState: initialStateAddress,
  reducers: {
    addDeliveryAddressFront: (state, action: PayloadAction<IDeliveryAddress>) =>
      (state = { ...state, addresses: [...state.addresses, action.payload] }),
    deleteDeliveryAddressFront: (
      state,
      action: PayloadAction<IDeliveryAddress>
    ) =>
      (state = {
        ...state,
        addresses: state.addresses.filter(
          (el): boolean => el.id !== action.payload.id
        ),
      }),
    editOneDeliveryAddressFront: (state, action) =>
      (state = {
        ...state,
        addresses: state.addresses.map((el) =>
          el.id === action.payload.id
            ? {
                ...el,
                id: action.payload.id,
                address: action.payload.address,
                userId: action.payload.userId,
              }
            : el
        ),
      }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDeliveryAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDeliveryAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.addresses = [...action.payload];
      })
      .addCase(getDeliveryAddress.rejected, (state) => {
        state.loading = false;
        console.error('ERROR!');
      })
      .addDefaultCase(() => {});
  },
});
export const {
  addDeliveryAddressFront,
  deleteDeliveryAddressFront,
  editOneDeliveryAddressFront,
} = deliveryAddressSlice.actions;

export default deliveryAddressSlice.reducer;
