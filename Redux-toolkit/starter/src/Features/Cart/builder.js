const fetchCartItemsPending = (state) => {
  state.isLoading = true;
};

const fetchCartItemsFulfilled = (state, action) => {
  state.isLoading = false;
  state.cartItems = action.payload;
  //console.log(action.payload);
};

const fetchCartItemsRejected = (state) => {
  state.isLoading = false;
};

export {
  fetchCartItemsPending,
  fetchCartItemsFulfilled,
  fetchCartItemsRejected,
};
