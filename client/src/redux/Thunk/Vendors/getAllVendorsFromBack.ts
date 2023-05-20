import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchGetAllVendorFromBack } from './allVendor.api';

export const getAllVendorFromBack = createAsyncThunk(
  'vendors/fetchGetVendors',
  async () => {
    try {
      const response = await fetchGetAllVendorFromBack();
      return response;
    } catch (error) {
      return Promise.reject(new Error('400'));
    }
  }
);
