import i18n, { Resource, ResourceLanguage } from "i18next";
import { initReactI18next } from "react-i18next";

interface Translations {
    [key: string]: {
        [lang: string]: string;
    };
}

// Extend ResourceLanguage so that we know "translation" is a record of strings.
interface MyResourceLanguage extends ResourceLanguage {
    translation: Record<string, string>;
}

const translations: Translations = {
    env_test: {
        en: "Test",
        de: "Test",
        fr: "Test",
        hr: "Test",
        gg: "Globi"
    },
    env_prod: {
        en: "Prod",
        de: "Prod",
        fr: "Prod",
        hr: "Prod",
        gg: "Globi"
    },
    env_english: {
        en: "English",
        de: "Englisch",
        fr: "Anglais",
        hr: "Engleski",
        gg: "Globi"
    },
    env_german: {
        en: "German",
        de: "Deutsch",
        fr: "Allemand",
        hr: "Njemacki",
        gg: "Globi"
    },
    env_french: {
        en: "French",
        de: "Französisch",
        fr: "Francaise",
        hr: "Franzuski",
        gg: "Globi"
    },
    env_croatian: {
        en: "Croatian",
        de: "Kroatisch",
        fr: "Croate",
        hr: "Hrvatski",
        gg: "Globi"
    },
    env_globi: {
        en: "Globi",
        de: "Globi",
        fr: "Globi",
        hr: "Globi",
        gg: "Globi"
    },
    nav_home: {
        en: "Home",
        de: "Startseite",
        fr: "Accueil",
        hr: "Početna",
        gg: "Globi"
    },
    nav_projects: {
        en: "Projects",
        de: "Projekte",
        fr: "Projets",
        hr: "Projekti",
        gg: "Globi"
    },
    nav_passions: {
        en: "Passions",
        de: "Leidenschaften",
        fr: "Passions",
        hr: "Strasti",
        gg: "Globi"
    },
    nav_newsscraper: {
        en: "News Scraper",
        de: "Nachrichtensammler",
        fr: "Scraper d'actualités",
        hr: "Pretraživač vijesti",
        gg: "Globi"
    },
    home_dummy: {
        en: "This is the HomePage.",
        de: "Das ist die HomePage.",
        fr: "Ceci est la page d'accueil.",
        hr: "Ove je moja Početna stranica.",
        gg: "Globi und Sophia fliegen bis ins Gebirge hinauf."
    },
    projects_dummy: {
        en: "This is the ProjectsPage.",
        de: "Das ist die Projekt Seite.",
        fr: "Ceci est la page de projets.",
        hr: "Ove je moja Projekt stranica.",
        gg: "Globi und Sophia fliegen bis ins Gebirge hinauf."
    },
    passions_dummy: {
        en: "This is the PassionsPage.",
        de: "Das ist die Leidenschaften Seite.",
        fr: "Ceci est la page de passions.",
        hr: "Ove je moja Strasti stranica.",
        gg: "Globi und Sophia fliegen bis ins Gebirge hinauf."
    },
    news_dummy: {
        en: "This is the News Scraper Page.",
        de: "Das ist die Nachrichten Seite.",
        fr: "Ceci est la page de scraper d'actualités.",
        hr: "Ove je moja Pretraživač vijesti stranica.",
        gg: "Globi und Sophia fliegen bis ins Gebirge hinauf."
    },
    page_not_found: {
        en: "Page not found.",
        de: "Seite nicht gefunden.",
        fr: "Page introuvable.",
        hr: "Stranica nije pronađena.",
        gg: "Globi und Sophia fliegen bis ins Gebirge hinauf."
    }
};

const resources = Object.keys(translations.env_test).reduce<Record<string, MyResourceLanguage>>(
    (acc, lang) => {
        acc[lang] = { translation: {} };
        Object.keys(translations).forEach((key) => {
            acc[lang].translation[key] = translations[key][lang];
        });
        return acc;
    },
    {}
);

i18n.use(initReactI18next).init({
    // Cast to i18next's Resource type if needed.
    resources: resources as Resource,
    fallbackLng: "en",
    lng: localStorage.getItem("language") || "en",
    interpolation: { escapeValue: false }
});

export default i18n;
