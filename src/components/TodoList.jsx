import React, { PropTypes } from 'react';

const propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
  getVisibleList: PropTypes.func.isRequired,
  toggleState: PropTypes.func.isRequired,
  switchFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const TodoList = (props) => {
  const {todoList, getVisibleList, filter, toggleState, switchFilter} = props;
  const visibleTodoList = getVisibleList(todoList, filter);
  return (
    <div>
      <ul>
        {visibleTodoList.map(item => (<li key={item.id} style={{ textDecoration: (item.done ? 'line-through' : '') }} onClick={() => toggleState(item.id)} >{item.value}</li>))}
      </ul>
      <button onClick={() => switchFilter('ALL')}>ALL</button>
      <button onClick={() => switchFilter('DONE')}>DONE</button>
      <button onClick={() => switchFilter('TODO')}>TODO</button>
    </div>
  );
};

TodoList.propTypes = propTypes;
export default TodoList;

