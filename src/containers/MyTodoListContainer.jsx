import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import * as Actions from '../actions/myTodoList';

const propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
  addTodo: PropTypes.func.isRequired,
  getVisibleList: PropTypes.func.isRequired,
  toggleState: PropTypes.func.isRequired,
  switchFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const MyTodoListContainer = (props) => {
  return (
    <div>
      <AddTodo
        addTodo={props.addTodo}
      />
      <TodoList
        todoList={props.todoList}
        toggleState={props.toggleState}
        switchFilter={props.switchFilter}
        getVisibleList={props.getVisibleList}
        filter={props.filter}
      />
    </div>
  );
};

const getVisibleList = (todoList, filter) => {
  if (filter === 'ALL') {
    return todoList;
  } else if (filter === 'DONE') {
    return todoList.filter(item => item.done);
  } else {
    return todoList.filter(item => !item.done);
  }
};

const mapStateToProps = (state) => ({
  todoList: state.todoList,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: value => dispatch(Actions.addTodo(value)),
  toggleState: id => dispatch(Actions.toggleState(id)),
  switchFilter: filter => dispatch(Actions.switchFilter(filter)),
  getVisibleList: (list, filter) => getVisibleList(list, filter),
});

MyTodoListContainer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(MyTodoListContainer);
