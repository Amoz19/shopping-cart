import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../feactures/products/productsSlice";

export default store = configureStore({
  reducer: {
    products: productsSlice,
  },
});
