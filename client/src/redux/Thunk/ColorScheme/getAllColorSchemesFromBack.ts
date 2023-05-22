import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchGetAllColorSchemesFromBack } from './fetchGetAllColorSchemesFromBack.api';

export const getAllColorSchemesFromBack = createAsyncThunk(
  'colorSchemes/fetchGetAllColorSchemesFromBack',
  async () => {
    try {
      const response = await fetchGetAllColorSchemesFromBack();
      return response;
    } catch (error) {
      return Promise.reject(new Error('400'));
    }
  }
);
