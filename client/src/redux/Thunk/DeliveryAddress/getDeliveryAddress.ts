import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchGetAddresses } from './deliveryAddress.api';

export const getDeliveryAddress = createAsyncThunk(
  'addresses/fetchGetAddresses',
  async (userId: number) => {
    try {
      const response = await fetchGetAddresses(userId);
      return response;
    } catch (error) {
      return Promise.reject(new Error('400'));
    }
  }
);