import React, { PropTypes } from 'react';

const propTypes = {
  addTodo: PropTypes.func.isRequired,
};

let value = '';
const AddTodo = (props) => {
  function haddleSubmit(e) {
    e.preventDefault();
    props.addTodo(value);
    document.getElementById('todoInput').value = '';
  }
  return (
    <form onSubmit={e => haddleSubmit(e)}>
      <input type="text" placeholder="请输入待办事项" id="todoInput" onChange={(e) => { value = e.target.value }} />
      <button type="submit">新增</button>
    </form>
  );
};

AddTodo.propTypes = propTypes;

export default AddTodo;
