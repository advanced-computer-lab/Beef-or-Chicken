import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import store from './Components/Redux/ReduxStore.js';
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <React.StrictMode>

          <App />


        </React.StrictMode>
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
