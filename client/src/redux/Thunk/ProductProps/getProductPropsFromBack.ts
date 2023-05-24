import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProductProps } from './productprops.api';

export const getProductPropsFromBack = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try {
      const response = await fetchProductProps();
      return response;
    } catch (error) {
      return Promise.reject(new Error('400'));
    }
  }
);
