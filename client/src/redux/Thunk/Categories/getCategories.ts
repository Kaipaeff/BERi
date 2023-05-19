import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCategories } from './categories.api';

export const getCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    try {
      const response = await fetchCategories();
      return response;
    } catch (error) {
      return Promise.reject(new Error('400'));
    }
  }
);
