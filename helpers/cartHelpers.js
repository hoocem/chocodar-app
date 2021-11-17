export const getCartTotalPrice = cart => {
  let total = 0;

  cart.forEach(cartItem => {
    total += cartItem.price * cartItem.quantity;
  });

  return total;
};
