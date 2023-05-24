import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProductProps } from './productprops.api';

export const getProductPropsFromBack = createAsyncThunk(
  'products/fetchProducts',
  async (productId: number) => {
    try {
      const response = await fetchProductProps(productId);
      return response;
    } catch (error) {
      return Promise.reject(new Error('400'));
    }
  }
);
