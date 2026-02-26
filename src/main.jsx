import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App';
import { LocaleProvider } from './contexts/LocaleContext';
import './styles.css';

// Use hash routing by default for static hosting; switch to browser mode via VITE_ROUTER_MODE=browser.
const Router = import.meta.env.VITE_ROUTER_MODE === 'browser' ? BrowserRouter : HashRouter;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LocaleProvider>
      <Router>
        <App />
      </Router>
    </LocaleProvider>
  </React.StrictMode>
);
