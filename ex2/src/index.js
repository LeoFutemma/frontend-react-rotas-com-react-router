import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Initial from './pages/Initial';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Initial />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
