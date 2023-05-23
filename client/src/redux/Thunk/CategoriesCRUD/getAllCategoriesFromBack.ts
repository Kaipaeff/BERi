import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchGetAllCategoriesFromBack } from './fetchAllCategoriesFromBack.api';

export const getAllCategoriesFromBack = createAsyncThunk(
  'categories/fetchGetCategoriesFromBack',
  async () => {
    try {
      const response = await fetchGetAllCategoriesFromBack();
      return response;
    } catch (error) {
      return Promise.reject(new Error('400'));
    }
  }
);
