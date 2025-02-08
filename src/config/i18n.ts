import i18n from "i18next";
import { initReactI18next } from "react-i18next";


///* TRANSLATIONS *///
const translations = {
  env_test:    { en: "Test",     de: "Test",        fr: "Test",           hr: "Test",           gg: "Globi" },
  env_prod:    { en: "Prod",     de: "Prod",        fr: "Prod",           hr: "Prod",           gg: "Globi" },
  env_english: { en: "English",  de: "Englisch",    fr: "Anglais",        hr: "Engleski",       gg: "Globi" },
  env_german:  { en: "German",   de: "Deutsch",     fr: "Allemand",       hr: "Njemacki",       gg: "Globi" },
  env_french:  { en: "French",   de: "Französisch", fr: "Francaise",      hr: "Franzuski",      gg: "Globi" },
  env_croatian:{ en: "Croatian", de: "Kroatisch",   fr: "Croate",         hr: "Hrvatski",       gg: "Globi" },
  env_globi:   { en: "Globi",    de: "Globi",       fr: "Globi",          hr: "Globi",          gg: "Globi" },
  nav_home:    { en: "Home",     de: "Home",        fr: "Home",           hr: "Home",           gg: "Globi" },
  nav_projects:{ en: "Projects", de: "Projects",    fr: "Projects",       hr: "Projects",       gg: "Globi" },
  nav_passions:{ en: "Passions", de: "Passions",    fr: "Passions",       hr: "Passions",       gg: "Globi" },
  nav_newsscraper: {
    en: "News Scraper",
    de: "News Scraper",
    fr: "News Scraper",
    hr: "News Scraper",
    gg: "Globi"
  },
  home_dummy: {
    en: "This is the HomePage.",
    de: "Das ist the HomePage.",
    fr: "Ceci est la page d'accueil.",
    hr: "Ove je moja Početna stranica.",
    gg: "Globi und Sophia fliegen bis ins Gebirge hinauf."
  },
  projects_dummy: {
    en: "This is the ProjectsPage.",
    de: "Das ist the Projekt Seite.",
    fr: "Ceci est la page de projets.",
    hr: "Ove je moja Projekt stranica.",
    gg: "Globi und Sophia fliegen bis ins Gebirge hinauf."
  },
  passions_dummy: {
    en: "This is the PassionsPage.",
    de: "Das ist the Leidenschaften Seite.",
    fr: "Ceci est la page de passions.",
    hr: "Ove je moja Strasti stranica.",
    gg: "Globi und Sophia fliegen bis ins Gebirge hinauf."
  },
  news_dummy: {
    en: "This is the News Scraper Page.",
    de: "Das ist the Nachrichten Seite.",
    fr: "Ceci est la page de scraper d'actualités.",
    hr: "Ove je moja Pretraživač vijesti stranica.",
    gg: "Globi und Sophia fliegen bis ins Gebirge hinauf."
  },
  page_not_found: {
    en: "This URL does not exist.",
    de: "Diese URL existiert nicht.",
    fr: "Cette URL n'existe pas.",
    hr: "Ova URL ne postoji.",
    gg: "Globi und Sophia fliegen bis ins Gebirge hinauf."
  }
};

// Build the 'resources' object required by i18next:
// This property is an object mapping every translation key
const resources = Object.fromEntries(
  (Object.keys(translations.env_test) as string[]).map((lang) => [
    lang,
    {
      translation: Object.fromEntries(
        (Object.entries(translations) as [string, Record<string, string>][]).map(
          ([key, langObj]) => [key, langObj[lang]]
        )
      )
    }
  ])
);

// Initialize i18next with the React integration:
// - `resources` supplies the translation data for all languages.
// - `fallbackLng` ensures that English ("en") is used if a translation for the current language is missing.
// - `lng` sets the current language using the value stored in localStorage, defaulting to "en" if not found.
// - The interpolation setting disables automatic escaping, relying on React's built-in safety.
i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  lng: localStorage.getItem("language") || "en",
  interpolation: { escapeValue: false }
});

export default i18n;