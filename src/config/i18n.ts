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
  nav_llm:     { en: "My LLM",   de: "Mein LLM",    fr: "Mon LLM",        hr: "Moj LLM",        gg: "Globi" },
  nav_newsscraper: {
    en: "News Scraper",
    de: "News Scraper",
    fr: "News Scraper",
    hr: "News Scraper",
    gg: "Globi"
  },
  news_dummy: {
    en: "This is the News Scraper Page.",
    de: "Das ist the Nachrichten Seite.",
    fr: "Ceci est la page de scraper d'actualités.",
    hr: "Ove je moja Pretraživač vijesti stranica.",
    gg: "Globi und Sophia fliegen bis ins Gebirge hinauf."
  },
  main_header_title: {
    en: "Full Stack Software Engineer",
    de: "Full Stack Software Engineer",
    fr: "Développeur full stack",
    hr: "Full stack softverski inženjer",
    gg: "Globi und Sophia fliegen bis ins Gebirge hinauf."
  },
  main_header_summary: {
    en: "With 5+ years of programming experience in software engineering, I combine technical expertise in full-stack development with strong client relationship skills. Currently pursuing my Bachelor's in Computer Science at ZHAW while working as a Fullstack Engineer.",
    de: "Mit über 5 Jahren Programmiererfahrung in der Softwareentwicklung kombiniere ich technische Expertise in der Full-Stack-Entwicklung mit starken Fähigkeiten im Kundenbeziehungsmanagement. Derzeit verfolge ich meinen Bachelor in Informatik an der ZHAW und arbeite als Fullstack Engineer.",
    fr: "Avec plus de 5 ans d'expérience en programmation dans le domaine de l'ingénierie logicielle, je combine une expertise technique en développement full-stack avec de solides compétences en relations clients. Actuellement, je poursuis mon Bachelor en informatique à la ZHAW tout en travaillant comme ingénieur fullstack.",
    hr: "S više od 5 godina iskustva u programiranju u softverskom inženjerstvu, kombiniram tehničku stručnost u razvoju punog stoga s jakim vještinama odnosa s klijentima. Trenutno pohađam svoj Bachelor iz računalnih znanosti na ZHAW-u dok radim kao Fullstack inženjer.",
    gg: "Globi und Sophia fliegen bis ins Gebirge hinauf. Nach all dem Trubel tut es gut, still über Felsschluchten und Baumwipfel zu schweben. Der pralle Heliumfisch sieht nicht nur  super aus, er steigt auch viel schneller auf als die Ballone. "
  },
  projects_form_title: {
    en: "Upload Project Card",
    de: "Projektkarte hochladen",
    fr: "Télécharger la fiche de projet",
    hr: "Prenesi karticu projekta",
    gg: "Globi und Sophia fliegen bis ins Gebirge hinauf."
  },
  projects_form_card_title: {
    en: "Title:",
    de: "Title:",
    fr: "Titre:",
    hr: "Naslov:",
    gg: "Globi"
  },
  projects_form_card_description: {
    en: "Description:",
    de: "Beschreibung:",
    fr: "Description:",
    hr: "Opis:",
    gg: "Globi"
  },
  projects_form_card_techstack: {
    en: "Techstack:",
    de: "Tech-Stack:",
    fr: "Technologies:",
    hr: "Technologije:",
    gg: "Globi"
  },
  projects_form_card_image: {
    en: "Upload Project Image:",
    de: "Projektbild hochladen:",
    fr: "Télécharger l'image du projet:",
    hr: "Učitajte sliku projekta:",
    gg: "Globi"
  },
  projects_form_card_initial_text: {
    en: "Drag & drop your file or browse files",
    de: "Ziehen Sie Ihre Datei hierher oder durchsuchen Sie Dateien",
    fr: "Glissez-déposez votre fichier ou parcourez les fichiers",
    hr: "Prevucite i ispustite datoteku ili pretražite datoteke",
    gg: "Globi und Sophia fliegen bis ins Gebirge hinauf."
  },
  projects_form_card_added_text: {
    en: "Click to change file",
    de: "Klicken Sie, um die Datei zu ändern",
    fr: "Cliquez pour changer de fichier",
    hr: "Kliknite za promjenu datoteke",
    gg: "Globi und Sophia fliegen bis ins Gebirge hinauf."
  },
  projects_form_submit: {
    en: "Submit",
    de: "Hinzufügen",
    fr: "Soumettre",
    hr: "Podnijeti",
    gg: "Globi"
  },
  projects_form_submitting: {
    en: "Submitting",
    de: "Am Hinzufügen",
    fr: "Soumission",
    hr: "Podnošenje",
    gg: "Globi"
  },
  projects_form_error_no_title: {
    en: "Title is required",
    de: "Titel ist erforderlich",
    fr: "Le titre est requis",
    hr: "Naslov je obavezan",
    gg: "Globi"
  },
  projects_form_error_no_description: {
    en: "Description is required",
    de: "Beschreibung ist erforderlich",
    fr: "La description est requise",
    hr: "Opis je obavezan",
    gg: "Globi"
  },
  projects_form_error_no_techstack: {
    en: "At least one tech stack is required",
    de: "Mindestens ein Tech-Stack ist erforderlich",
    fr: "Au moins une technologie est requise",
    hr: "Potrebna je barem jedna tehnologija",
    gg: "Globi"
  },
  projects_form_error_techstack_limit: {
    en: "Input exceeds maximum of 20 chars",
    de: "Eingabe überschreitet das Maximum von 20 Zeichen",
    fr: "L'entrée dépasse le maximum de 20 caractères",
    hr: "Unos premašuje maksimalno 20 znakova",
    gg: "Globi"
  },
  projects_form_error_no_image: {
    en: "File is required",
    de: "Datei ist erforderlich",
    fr: "Le fichier est requis",
    hr: "Datoteka je obavezna",
    gg: "Globi"
  },
  projects_form_error_invalid_image: {
    en: "Only PDF, PNG, and JPG files are allowed",
    de: "Nur PDF-, PNG- und JPG-Dateien sind erlaubt",
    fr: "Seuls les fichiers PDF, PNG et JPG sont autorisés",
    hr: "Dozvoljene su samo PDF, PNG i JPG datoteke",
    gg: "Globi und Sophia fliegen bis ins Gebirge hinauf."
  },
  projects_form_success: {
    en: "Project card created successfully!",
    de: "Projektkarte erfolgreich erstellt!",
    fr: "Carte de projet créée avec succès!",
    hr: "Projektna kartica uspješno kreirana!",
    gg: "Globi und Sophia fliegen bis ins Gebirge hinauf."
  },
  projects_form_fail: {
    en: "Error creating project card",
    de: "Fehler beim Erstellen der Projektkarte",
    fr: "Erreur lors de la création de la carte de projet",
    hr: "Greška pri kreiranju projektne kartice",
    gg: "Globi und Sophia fliegen bis ins Gebirge hinauf."
  },
  llm_new_chat: {
    en: "New Chat",
    de: "Neuer Chat",
    fr: "Nouveau Chat",
    hr: "Novi Chat",
    gg: "Globi"
  },
  llm_controls: {
    en: "LLM CONTROLS",
    de: "LLM STEUERUNG",
    fr: "LLM CONTROLS",
    hr: "LLM UPRAVLJANJE",
    gg: "Globi"
  },
  llm_history: {
    en: "History",
    de: "Verlauf",
    fr: "Historique",
    hr: "Povijest",
    gg: "Globi"
  },
  llm_send: {
    en: "Send",
    de: "Send",
    fr: "Send",
    hr: "Send",
    gg: "Globi"
  },
  llm_type_message: {
    en: "Type a message...",
    de: "Nachricht eingeben...",
    fr: "Tapez un message...",
    hr: "Unesite poruku...",
    gg: "Globi und Sophia fliegen bis ins Gebirge hinauf..."
  },
  wip_title: {
    en: "Work in progress",
    de: "In Bearbeitung",
    fr: "Travail en cours",
    hr: "Rad u tijeku",
    gg: "Globi und Sophia fliegen bis ins Gebirge hinauf."
  },
  wip_under_construction: {
    en: "This webpage is currently under construction. I'm working hard to bring you something amazing!",
    de: "Diese Webseite befindet sich derzeit im Aufbau. Ich arbeite hart daran, Ihnen etwas Grossartiges zu präsentieren!",
    fr: "Cette page est actuellement en construction. Je travaille d'arrache-pied pour vous offrir quelque chose d'incroyable!",
    hr: "Ova web stranica je trenutno u izradi. Naporno radim kako bih vam ponudio nešto nevjerojatno!",
    gg: "Globi und Sophia fliegen bis ins Gebirge hinauf."
  },
  wip_see_you_soon: {
    en: "Check back soon!",
    de: "Schau bald wieder vorbei!",
    fr: "Revenez bientôt!",
    hr: "Vratite se uskoro!",
    gg: "Globi und Sophia fliegen bis ins Gebirge hinauf."
  },
  pnf_page_not_found: {
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