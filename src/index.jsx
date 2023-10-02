import React from 'react';
import App from './App.jsx';
import './index.css';
import { StyleSheetManager } from 'styled-components';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'themes'}>
      <App />
    </StyleSheetManager>
  </React.StrictMode>
);