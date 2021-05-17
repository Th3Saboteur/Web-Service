import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './pages/Header/index'

ReactDOM.render(
  <React.StrictMode>
    <Header title="Web Service"/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);