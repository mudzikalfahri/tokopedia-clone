import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/productSlice";
import basketReducer from "../slices/basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    product: productReducer
  },
});
