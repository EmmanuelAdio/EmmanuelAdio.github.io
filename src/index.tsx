import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';

import App from './App';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);