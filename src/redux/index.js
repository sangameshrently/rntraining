import {createStore, compose, applyMiddleware} from 'redux';

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

function logger(store) {
  // Must point to the function returned by the previous middleware:
  const next = store.dispatch;

  return function dispatchAndLog(action) {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
  };
}

const myLogger = (store) => (next) => (action) => {
  console.log('this action is dispatched', action);
  next(action);
};

export const store = createStore(
  todoReducer,
  initialState,
  compose(applyMiddleware(myLogger)),
);

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
