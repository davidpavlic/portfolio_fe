import './assets/colors.css'
import './main.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { I18nextProvider } from "react-i18next";
import i18n from "../src/config/i18n";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <I18nextProvider i18n={i18n}>
    <StrictMode>
      <App />
    </StrictMode>
  </I18nextProvider>,
)
