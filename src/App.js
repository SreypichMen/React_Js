import React from "react";
import logo from './wreath.png';
import DarkMode from './components/DarkMode/DarkMode';
import { useTranslation } from "react-i18next";
import './App.css';

function App() {
  const [t, i18n] = useTranslation("global");

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="App">
      <div className="header">
        <div className='header-left'>
          <div>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div>
            <p>Vindica</p>
          </div>
        </div>
        <div className='header-right'>
          <div className="select-wrapper">
            <select onChange={(e) => handleChangeLanguage(e.target.value)}>
              <option value="en">EN</option>
              <option value="fr">FR</option>
            </select>
           
          </div>
          <div> <DarkMode /></div>
        </div>
      </div>
      <div className="banner">
        <div className="banner_infor">
          <h1>{t("header.message")}</h1>
          <p>{t("home.body")}</p>
        </div>
      </div>
    </div>
  );
}

export default App;