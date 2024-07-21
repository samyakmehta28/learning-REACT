const clearCartFn = (state) => {
  state.cartItems = [];
  state.amount = 0;
  state.total = 0;
};

const removeItemFn = (state, action) => {
  //const cartItem = state.cartItems.find((item) => item.id === action.payload);
  state.cartItems = state.cartItems.filter(
    (item) => item.id !== action.payload
  );
};

const increaseFn = (state, action) => {
  const cartItem = state.cartItems.find((item) => item.id === action.payload);
  cartItem.amount += 1;
  state.amount += 1;
  //console.log(state.total, cartItem.price);
  state.total += parseInt(cartItem.price);
};

const decreaseFn = (state, action) => {
  const cartItem = state.cartItems.find((item) => item.id === action.payload);
  cartItem.amount -= 1;
  state.amount -= 1;
  state.total -= parseInt(cartItem.price);
};

const calculateTotalFn = (state) => {
  state.total = state.cartItems
    .map((item) => item.price * item.amount)
    .reduce((sum, current) => sum + current, 0);
  state.amount = state.cartItems.reduce((sum, item) => sum + item.amount, 0);
};

export { clearCartFn, removeItemFn, increaseFn, decreaseFn, calculateTotalFn };
