import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    product: (state, action) => {
      state.product = [action.payload]
    },
  },
});

export const { product } = productSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectProduct = (state) => state.product.items;

export default productSlice.reducer;