import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchGetAddresses } from './deliveryAddress.api';

console.log('getDeliveryAddress >>>>>>>>>>>>>>>>>>>');

export const getDeliveryAddress = createAsyncThunk(
  'addresses/fetchGetAddresses',
  async (userId: number) => {
    try {
      const response = fetchGetAddresses(userId);
      return response;
    } catch (error) {
      return Promise.reject(new Error('400'));
    }
  }
);
