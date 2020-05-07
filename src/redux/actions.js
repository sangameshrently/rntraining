export const addTodoAction = (payload) => {
  return {type: 'src/redux/actions/addtodo', payload: payload};
};

export const removeTodoAction = (payload) => {
  return {type: 'DELETE_TODO', payload: payload};
};

export const getTodoAction = (payload) => {
  return {type: 'src/redux/actions/getTodos', payload: payload};
};

export const putTodoAction = (payload) => {
  return {type: 'PUT_TODO', payload: payload};
};

export const getActionType = (action) => {
  return action().type;
};
