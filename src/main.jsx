import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App';
import './styles.css';

// Use hash routing by default for static hosting; switch to browser mode via VITE_ROUTER_MODE=browser.
const Router = import.meta.env.VITE_ROUTER_MODE === 'browser' ? BrowserRouter : HashRouter;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
