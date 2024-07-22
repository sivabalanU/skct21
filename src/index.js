import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './Redux/Reducer';
import MainComp from './Redux/MainComp';
import reportWebVitals from './reportWebVitals';
const store = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
   <Provider store={store}>
    <MainComp />
  </Provider>
  </React.StrictMode>
);
