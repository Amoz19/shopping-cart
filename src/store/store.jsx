import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../feactures/products/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});
