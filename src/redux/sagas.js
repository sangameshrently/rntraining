import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';

function* addTodoSaga() {
  console.log('My Saga addTodoSaga ');
}

function* deleteTodoSaga() {
  console.log('My Saga deleteTodoSaga ');
}

function* updateTodoSaga() {
  console.log('My Saga updateTodoSaga ');
}

function* getTodosSaga() {
  console.log('My Saga getTodosSaga ');
}

export const bininds = [
  takeEvery('ADD_TODO', addTodoSaga),
  takeEvery('DELETE_TODO', deleteTodoSaga),
  takeEvery('GET_TODO', getTodosSaga),
  takeEvery('PUT_TODO', updateTodoSaga),
];
