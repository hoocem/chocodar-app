const actions = {
  SET_USER_CONTEXT: 'SET_USER_CONTEXT',
  setUserContext: payload => ({
    type: actions.SET_USER_CONTEXT,
    payload,
  }),
};

export default actions;
