import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchGetAllTypesOfProductFromBack } from './fetchGetAllTypesOfProductFromBack.api';

export const getAllTypesOfProductsFromBack = createAsyncThunk(
  'typesOfProduct/fetchGetTypesOfProductFromBack',
  async () => {
    try {
      const response = await fetchGetAllTypesOfProductFromBack();
      return response;
    } catch (error) {
      return Promise.reject(new Error('400'));
    }
  }
);
