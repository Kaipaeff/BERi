import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchGetAllSizesFromBack } from './fetchGetAllSizesFromBack.api';

export const getAllSizesFromBack = createAsyncThunk(
  'sizes/fetchGetSizesFromBack',
  async () => {
    try {
      const response = await fetchGetAllSizesFromBack();
      return response;
    } catch (error) {
      return Promise.reject(new Error('400'));
    }
  }
);
