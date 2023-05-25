import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchGetFullListOfUserOrderCartElementsFromBack } from './fetchGetFullListOfUserOrderCartElementsFromBack.api';

export const getFullListOfUserOrderCartElementsFromBack = createAsyncThunk(
  'listOfUserOrderedCartElements/fetchGetFullListOfUserOrderCartElementsFromBack',
  async (orderId: number) => {
    try {
      const response = await fetchGetFullListOfUserOrderCartElementsFromBack(
        orderId
      );
      return response;
    } catch (error) {
      return Promise.reject(new Error('400'));
    }
  }
);
