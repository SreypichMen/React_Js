import React from 'react';
import ReactDOM from 'react-dom'; // Correct import statement
import './index.css';
import App from './App';
import global_en from "./components/Translation/en/global.json";
import global_fr from "./components/Translation/fr/global.json";
import reportWebVitals from './reportWebVitals';
import i18next from "i18next";
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en", 
  resources: {
    en: {
      global: global_en 
    },
    fr: {
      global: global_fr
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
