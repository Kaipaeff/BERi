import { createSlice } from '@reduxjs/toolkit';
import { getDeliveryAddress } from '../Thunk/DeliveryAddress/getDeliveryAddress';
import { stateTypeAddress } from '../store.types';

const initialStateAddress: stateTypeAddress = {
  addresses: [],
  loading: false,
};

const deliveryAddressSlice = createSlice({
  name: 'addresses',
  initialState: initialStateAddress,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDeliveryAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getDeliveryAddress.fulfilled,
        (state, action) => {
          state.loading = false;
          state.addresses = [...action.payload];
        }
      )
      .addCase(getDeliveryAddress.rejected, (state) => {
        state.loading = false;
        console.error('ERROR!');
      })
      .addDefaultCase(() => {});
  },
});

export default deliveryAddressSlice.reducer;
