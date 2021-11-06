const actions = {
  ADD_ITEM: 'ADD_ITEM',
  INCREMENT_QUANTITY: 'INCREMENT_QUANTITY',
  DECREMENT_QUANTITY: 'DECREMENT_QUANTITY',
  REMOVE_ITEM: 'REMOVE_ITEM',
  addItem: payload => ({
    type: actions.ADD_ITEM,
    payload,
  }),
  incrementQuantity: payload => ({
    type: actions.INCREMENT_QUANTITY,
    payload,
  }),
  decrementQuantity: payload => ({
    type: actions.DECREMENT_QUANTITY,
    payload,
  }),
  removeItem: payload => ({
    type: actions.REMOVE_ITEM,
    payload,
  }),
};

export default actions;
