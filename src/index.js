import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import MyTodoListContainer from './containers/MyTodoListContainer';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers/myTodoList';


const store = createStore(reducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <MyTodoListContainer />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
