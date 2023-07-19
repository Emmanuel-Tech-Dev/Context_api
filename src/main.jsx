import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { CountProvider } from './Context.jsx';
import { ContextProvider } from './UseContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountProvider>
      
        <ContextProvider>
          <App />
        </ContextProvider>
      
    </CountProvider>
  </React.StrictMode>
);
