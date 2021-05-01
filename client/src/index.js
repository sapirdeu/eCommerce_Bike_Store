import React from 'react';
import ReactDOM from 'react-dom';
import './Resources/css/styles.css';
// import './index.css';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

// import {Provider} from 'react-redux';
// import {createStore, applyMiddleware} from 'redux';
// import promiseMiddleware from 'redux-promise';
// import ReduxThunk from 'redux-thunk';

// import Reducer from './redux/reducers/Reducer'

// const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);

ReactDOM.render(
  // <Provider store={createStoreWithMiddleware(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  // </Provider>
  ,
  document.getElementById('root')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
