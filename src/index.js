import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  ProductProvider } from './ProductContext.js';

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider> 
  </React.StrictMode>,
  document.getElementById('root')
);