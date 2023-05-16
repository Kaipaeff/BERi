import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "./products.api";

export const getProducts = createAsyncThunk("products/fetchProducts", async () => {
  try {
    const response = await fetchProducts();
    return response;
  } catch (error) {
    return Promise.reject(new Error("400"));
  }
});
