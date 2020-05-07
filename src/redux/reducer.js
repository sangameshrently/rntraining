export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'STORE_TODOS':
      return action.payload;
  }
  return state;
};
