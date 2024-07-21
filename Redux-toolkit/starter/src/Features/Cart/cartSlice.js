import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//import cartItems from '../../cartItems';
import {
  fetchCartItemsFulfilled,
  fetchCartItemsPending,
  fetchCartItemsRejected,
} from './builder';
import {
  clearCartFn,
  removeItemFn,
  increaseFn,
  decreaseFn,
  calculateTotalFn,
} from './controller';

const url = 'https://www.course-api.com/react-useReducer-cart-project';

export const fetchCartItems = createAsyncThunk('fetchCartItems', async () => {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
});

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: clearCartFn,
    removeItem: removeItemFn,
    increase: increaseFn,
    decrease: decreaseFn,
    calculateTotal: calculateTotalFn,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartItems.pending, fetchCartItemsPending);
    builder.addCase(fetchCartItems.fulfilled, fetchCartItemsFulfilled);
    builder.addCase(fetchCartItems.rejected, fetchCartItemsRejected);
  },
});

// console.log(cartSlice);

export const { clearCart, removeItem, increase, decrease, calculateTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
