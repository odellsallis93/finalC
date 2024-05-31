import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { ProductContext, ProductContextProvider } from './contexts/ProductsContext';
import { CartContextProvider } from './contexts/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
          <App />
    </CartContextProvider>
  </React.StrictMode>
);