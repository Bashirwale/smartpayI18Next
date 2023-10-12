import logo from './logo.svg';
import './App.css';
import {useTranslation, Trans, changeLanguage} from 'smartpayi18next';

function App() {
  const {t, i18n} = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Trans t={t}>welcome</Trans>
        </p>
        <a
          className="App-link"
          onClick={e => {
            e.preventDefault();
            changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
          }}
          rel="noopener noreferrer"
        >
          Switch to {i18n.language === 'en' ? 'French' : 'English'}
        </a>
      </header>
    </div>
  );
}

export default App;
