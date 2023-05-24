import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchGetFullListOfOrdersFromBack } from './fetchGetFullListOfOrdersFromBack.api';

export const getFullListOfOrdersFromBack = createAsyncThunk(
  'listOfOrders/fetchGetFullListOfOrdersFromBack',
  async () => {
    try {
      const response = await fetchGetFullListOfOrdersFromBack();
      return response;
    } catch (error) {
      return Promise.reject(new Error('400'));
    }
  }
);
