import {createStore} from 'redux';

let initialState = [
  {
    name: 'Eat',
    status: true,
  },
  {
    name: 'Sleep',
    status: false,
  },
]; // I have no todos

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      state.push(action.payload);
      //   console.log('Add Action payload', action.payload);

      break;

    case 'DELETE': {
      let newState = state.filter((item, index) => {
        if (index === action.payload) {
          return false;
        }

        return true;
      });
      return newState;
    }

    case 'MARK': {
      let newState = state.map((item, index) => {
        if (index === action.payload) {
          item.status = !item.status;
        }
        return item;
      });
      return newState;
    }
  }
  return state;
};

export const store = createStore(todoReducer, initialState);

store.subscribe(() => {
  console.log('store changed ', store.getState());
});

console.log('initial Store State ', store.getState());

// Store State => []
// Data is setOf todos

// todo

/*
 {
    id:"",
    name:"Eat",
    status:true
 }

 */

// todos = [todo1, todo2]

// Add todo, delete todo.

// Store = [todos]

/*

store = {
    todos:[],
    login:[],
    home:[],

    useSelector((store) => {
    return store.todos;
  });
}

*/
