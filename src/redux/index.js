import {createStore} from 'redux';

let initialState = []; // I have no todos

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      state.push(action.payload);
      //   console.log('Add Action payload', action.payload);

      break;

    case 'DELETE':
      console.log('Delete Action');
      break;
  }
  return state;
};

export const store = createStore(todoReducer, initialState);

store.subscribe(() => {
  console.log('store changed ', store.getState());
});

console.log('initial Store State ', store.getState());

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
