import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import axios from 'axios';
import App from './App';
import reportWebVitals from './reportWebVitals';

axios.interceptors.request.use(
  (req) => {
    // Add configurations here
    console.log('axios request');
    // eslint-disable-next-line no-debugger
    debugger;
    return req;
  },
  (err) => {
    // eslint-disable-next-line no-debugger
    debugger;
    return Promise.reject(err);
  },
);

axios.interceptors.response.use(
  (res) => {
    // Add configurations here
    console.log('axios response');
    console.log(res);
    // eslint-disable-next-line no-debugger
    // debugger;
    return res;
  },
  (err) => {
    // eslint-disable-next-line no-debugger
    debugger;
    console.log('axios response');

    if (err.response.status === 401) {
      // history.push('/login');
      localStorage.clear();
      window.location.reload();
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
