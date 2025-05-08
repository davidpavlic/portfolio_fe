import './assets/colors.css';
import './index.css';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MyThemeProvider } from './config/MyThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import i18n from './config/i18n';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Provides global languages */}
    <I18nextProvider i18n={i18n}>
      {/* Responsible for Dark-/Lightmode */}
      <MyThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MyThemeProvider>
    </I18nextProvider>
  </StrictMode>
);