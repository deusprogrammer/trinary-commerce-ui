import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import rootReducer from './reducers/rootReducer';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { toast } from 'react-toastify';

const store = createStore(rootReducer, applyMiddleware(thunk));

toast.configure({
  autoClose: 3000,
  draggable: false
});

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
