import React, {useEffect,Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
import {I18NextProvider, useTranslation, Trans, changeLanguage } from "smartpayi18next"
function App() {
  const {t,i18n} = useTranslation();
  return (

       <Suspense fallback={"sdsd"}>
           <div className="App">

                   <header className="App-header">
                       <img src={logo} className="App-logo" alt="logo" />
                       <p>
                           <Trans t={t}  >welcome</Trans>
                       </p>
                       <button
                           className="App-link"
                           onClick={()=>{
                               changeLanguage(i18n.language==="en"?"fr":"en")
                           }}
                           rel="noopener noreferrer"
                       >
                           Learn React

                       </button>
                   </header>
           </div>
       </Suspense>

  );
}

export default App;
