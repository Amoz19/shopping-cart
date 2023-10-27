import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  amount: 0,
  total: 0,
  // status: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    removeCart: (state, { payload }) => {
      state.items = state.items.filter((item) => item.id !== payload);
    },
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
    increase: (state, { payload }) => {
      const item = state.items.find((item) => item.id === payload);
      item.amount += 1;
    },
    decrease: (state, { payload }) => {
      const item = state.items.find((item) => item.id === payload);
      item.amount -= 1;
    },
    clearCarts: (state) => {
      state.items = [];
    },
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.items.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export default productsSlice.reducer;
export const {
  removeCart,
  addToCart,
  clearCarts,
  increase,
  decrease,
  calculateTotal,
} = productsSlice.actions;
