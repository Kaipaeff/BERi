import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchGetAllUsersFromBack } from './allUser.api';

export const getAllUsersFromBack = createAsyncThunk(
  'addresses/fetchGetAddresses',
  async () => {
    try {
      const response = await fetchGetAllUsersFromBack();
      return response;
    } catch (error) {
      return Promise.reject(new Error('400'));
    }
  }
);
