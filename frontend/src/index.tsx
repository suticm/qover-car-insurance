import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import axios from 'axios';
import App from './App';
import reportWebVitals from './reportWebVitals';

axios.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401 && window.location.pathname !== '/login') {
      localStorage.clear();
      window.location.reload();
    } else if (err.response.status >= 500) {
      alert('Something went wrong!');
    }
    return Promise.reject(err);
  },
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
