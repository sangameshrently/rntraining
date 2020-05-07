import {getActionType, storeFilterStatusAction} from './actions';
import {produce} from 'immer';
export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'STORE_TODOS': {
      return produce(state, (newState) => {
        newState.todos = action.payload;
      });
      // console.log('ns', ns);
    }

    case getActionType(storeFilterStatusAction): {
      return produce(state, (newState) => {
        newState.filter = action.payload;
      });
    }
  }
  return state;
};
