import actions from './actions';

const initialState = null;

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_USER_CONTEXT:
      return action.payload
        ? {
            ...action.payload,
          }
        : null;
    default:
      return state;
  }
};

export default authReducer;
