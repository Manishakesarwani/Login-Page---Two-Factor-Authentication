import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserAuthenticateContextProvider } from './context/UserAuthenticateContext';
import { UserEmailContextProvider } from './context/UserEmailContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserAuthenticateContextProvider>
      <UserEmailContextProvider>
        <App />
      </UserEmailContextProvider>
    </UserAuthenticateContextProvider>
  </React.StrictMode>
);

