import React from 'react';
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from '../src/pages/App';
import reportWebVitals from './reportWebVitals';
import { Router } from './pages/CreateRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router}  />
  </React.StrictMode>
);


reportWebVitals();
