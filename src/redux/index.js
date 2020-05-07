import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {call, put, all, takeEvery, takeLatest} from 'redux-saga/effects';
import {bininds} from './sagas';
import {todoReducer} from './reducer';

// import {takeEvery} from 'redux-saga';

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

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  todoReducer,
  initialState,
  compose(applyMiddleware(myLogger, sagaMiddleware)),
);

function* mySaga() {
  yield all([...bininds]);
}

sagaMiddleware.run(mySaga);

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
