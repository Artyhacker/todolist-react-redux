import { combineReducers } from 'redux';
import * as actionTypes from '../constants/myTodoList';

const todoList = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [
        ...state,
        action.item,
      ];
    case actionTypes.TOGGLE_STATE:
      return state.map((item) => {
        if (item.id === action.id) {
          item.done = !item.done;
        }
        return item;
      });
    default:
      return state;
  }
};

const filter = (state = 'ALL', action) => {
  switch (action.type) {
    case actionTypes.SWITCH_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default combineReducers({
  todoList,
  filter,
});

