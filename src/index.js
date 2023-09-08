import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client";


const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);

reportWebVitals();
