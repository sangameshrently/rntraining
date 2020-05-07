import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {
  getActionType,
  addTodoAction,
  removeTodoAction,
  getTodoAction,
  putTodoAction,
} from './actions';

function* addTodoSaga(action) {
  let todo = action.payload;
  yield fetch('http://localhost:4000/todos', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(todo),
  });
  yield call(getTodosSaga);
}

function* deleteTodoSaga(action) {
  let todo = action.payload;
  yield fetch('http://localhost:4000/todos', {
    method: 'DELETE',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(todo),
  });
  yield call(getTodosSaga);
}

function* updateTodoSaga(action) {
  let todo = action.payload;
  yield fetch('http://localhost:4000/todos', {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(todo),
  });
  yield call(getTodosSaga);
}

function* getTodosSaga() {
  let result = yield fetch('http://localhost:4000/todos');
  let respone = yield result.json();
  yield put({type: 'STORE_TODOS', payload: respone});
  console.log('result', respone);
}

export const bininds = [
  takeEvery(getActionType(addTodoAction), addTodoSaga),
  takeEvery(getActionType(removeTodoAction), deleteTodoSaga),
  takeEvery(getActionType(getTodoAction), getTodosSaga),
  takeEvery(getActionType(putTodoAction), updateTodoSaga),
];
