import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAge } from './age.api';

export const getAge = createAsyncThunk(
  'age/fetchAge',
  async () => {
    try {
      const response = await fetchAge();
      return response;
    } catch (error) {
      return Promise.reject(new Error('400'));
    }
  }
);