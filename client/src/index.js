import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { store } from './reduxTK/store';
import { ContextProvider } from "./context/ContextProvider";

let persistor = persistStore(store)

const root = createRoot(document.getElementById('root'));

root.render(
  <ContextProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
          </PersistGate>
      </Provider>
  </ContextProvider>
);

reportWebVitals();
