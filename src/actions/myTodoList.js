import * as actionTypes from '../constants/myTodoList';

let id = 0;

const getTodoItem = function (value) {
  id++;
  return {
    id,
    value,
    done: false,
  };
};

export const addTodo = value => ({
  type: actionTypes.ADD_TODO,
  item: getTodoItem(value),
});

export const toggleState = itemId => ({
  type: actionTypes.TOGGLE_STATE,
  id: itemId,
});

export const switchFilter = filter => ({
  type: actionTypes.SWITCH_FILTER,
  filter,
});
