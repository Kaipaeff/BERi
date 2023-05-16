import { createSlice } from "@reduxjs/toolkit";
import { stateType } from "../store.types";
import { getProducts } from "../Thunk/getProducts";

const initialState: stateType = {
  products: [],
  loading: false,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = [...action.payload];
      })
      .addCase(getProducts.rejected, (state) => {
        state.loading = false;
        console.error("ERROR!");
      })
      .addDefaultCase(() => {});
  },
});

export default productSlice.reducer;
