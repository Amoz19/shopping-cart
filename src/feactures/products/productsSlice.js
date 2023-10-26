import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  amount: 0,
  // status: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === payload.id
      );

      if (existingItemIndex !== -1) {
        // If the item is already in the cart, increase its amount by 1
        state.items[existingItemIndex].amount += 1;
      } else {
        // If the item is not in the cart, add it with an initial amount of 1
        state.items = [...state.items, payload];
      }
    },
    calculateTotal: (state) => {
      let amount = 0;
      state.items.forEach((item) => {
        amount += item.amount;
      });
      state.amount = amount;
    },
  },
});

export default productsSlice.reducer;
export const { addToCart, calculateTotal } = productsSlice.actions;
