import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StateProvider } from './utils/Stateprovider';
import { initialState } from './utils/reducer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}></StateProvider>
    <App />
  </React.StrictMode>
)
