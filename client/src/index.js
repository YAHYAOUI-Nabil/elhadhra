import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { store } from './reduxTK/store';
import { ContextProvider } from "./context/ContextProvider";

const root = createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
  </ContextProvider>
);

reportWebVitals();
