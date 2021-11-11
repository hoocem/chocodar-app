import actions from './actions';

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_ITEM:
      return [...state, {quantity: 1, ...action.payload}];
    case actions.INCREMENT_QUANTITY:
      return state.map(product => {
        if (product._id !== action.payload) {
          return product;
        }

        return {
          ...product,
          quantity: product.quantity + 1,
        };
      });
    case actions.DECREMENT_QUANTITY:
      return state.map(product => {
        if (product._id !== action.payload) {
          return product;
        }

        return {
          ...product,
          quantity: product.quantity - 1,
        };
      });
    case actions.REMOVE_ITEM:
      const index = state.findIndex(product => product._id === action.payload);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    default:
      return state;
  }
};

export default cartReducer;
