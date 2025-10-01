
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import global_fr from "./translation/fr/global.json"
import global_en from "./translation/en/global.json"
import global_pl from "./translation/pl/global.json"
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'

//Configuration pour la traduction des langues
i18next.init({
  interpolation: {escapeValue: false},
  lng: "pl",
  resources: {
    fr:{
      global: global_fr
    },
    en:{
      global: global_en
    },
    pl:{
      global: global_pl
    },
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </StrictMode>,
)
