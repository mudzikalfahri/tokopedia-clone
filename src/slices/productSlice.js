import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products = [action.payload]
    },
  },
});

export const { addProduct } = productSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectProduct = (state) => state.product.products;

export default productSlice.reducer;