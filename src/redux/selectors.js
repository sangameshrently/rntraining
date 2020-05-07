import {createSelector} from 'reselect';

const getTodos = (state) => state.todos;

const getFilter = (state) => state.filter;

export const filterTodos = (todos, filter) => {
  console.log('filtering data');
  switch (filter) {
    case 'ALL': {
      return todos;
    }
    case 'COMPLETED': {
      return todos.filter((todo) => todo.status == true);
    }
    case 'PENDING': {
      return todos.filter((todo) => todo.status == false);
    }
  }
};

export const getFilteredTodos = createSelector(
  getTodos,
  getFilter,
  (todos, filter) => {
    return filterTodos(todos, filter);
  },
);
