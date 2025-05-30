import i18n from "i18next";
import { initReactI18next } from "react-i18next";


///* TRANSLATIONS *///
const translations = {
  env_test: { en: "Test", de: "Test", fr: "Test", hr: "Test", gg: "Globi" },
  env_prod: { en: "Prod", de: "Prod", fr: "Prod", hr: "Prod", gg: "Globi" },
  env_english: { en: "English", de: "Englisch", fr: "Anglais", hr: "Engleski", gg: "Globi" },
  env_german: { en: "German", de: "Deutsch", fr: "Allemand", hr: "Njemacki", gg: "Globi" },
  env_french: { en: "French", de: "Französisch", fr: "Francaise", hr: "Franzuski", gg: "Globi" },
  env_croatian: { en: "Croatian", de: "Kroatisch", fr: "Croate", hr: "Hrvatski", gg: "Globi" },
  env_globi: { en: "Globi", de: "Globi", fr: "Globi", hr: "Globi", gg: "Globi" },
  nav_home: { en: "Home", de: "Home", fr: "Home", hr: "Home", gg: "Globi" },
  nav_projects: { en: "Projects", de: "Projects", fr: "Projects", hr: "Projects", gg: "Globi" },
  nav_passions: { en: "Passions", de: "Passions", fr: "Passions", hr: "Passions", gg: "Globi" },
  nav_llm: { en: "My LLM", de: "Mein LLM", fr: "Mon LLM", hr: "Moj LLM", gg: "Globi" },
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
  main_skills_programming_languages: {
    en: "Programming Languages",
    de: "Programmiersprachen",
    fr: "Languages de programmation",
    hr: "Programski jezici",
    gg: "Globi und Sophia"
  },
  main_skills_fontend_development: {
    en: "Frontend Development",
    de: "Frontend-Entwicklung",
    fr: "Développement Frontend",
    hr: "Frontend razvoj",
    gg: "Globi und Sophia"
  },
  main_skills_backend_databases: {
    en: "Backend & Databases",
    de: "Backend & Datenbanken",
    fr: "Backend & Bases de données",
    hr: "Backend i baze podataka",
    gg: "Globi und Sophia"
  },
  main_skills_devops_tools: {
    en: "DevOps & Tools",
    de: "DevOps & Tools",
    fr: "DevOps & Outils",
    hr: "DevOps i alati",
    gg: "Globi und Sophia"
  },
  main_skills_interests: {
    en: "Interests",
    de: "Interessen",
    fr: "Intérêts",
    hr: "Interesi",
    gg: "Globi und Sophia"
  },
  main_skills_martial_arts: {
    en: "Martial Arts",
    de: "Kampfsport",
    fr: "Arts martiaux",
    hr: "Borilačke vještine",
    gg: "Globi und Sophia"
  },
  main_skills_cooking: {
    en: "Cooking",
    de: "Kochen",
    fr: "Cuisine",
    hr: "Kuhanje",
    gg: "Globi und Sophia"
  },
  main_skills_diving: {
    en: "Diving",
    de: "Tauchen",
    fr: "Plongée",
    hr: "Ronjenje",
    gg: "Globi und Sophia"
  },
  main_skills_travel: {
    en: "Travel",
    de: "Reisen",
    fr: "Voyager",
    hr: "Putovanja",
    gg: "Globi und Sophia"
  },
  main_skills_hiking: {
    en: "Hiking",
    de: "Wandern",
    fr: "Randonnée",
    hr: "Planinarenje",
    gg: "Globi und Sophia"
  },
  main_skills_gaming: {
    en: "Gaming",
    de: "Gaming",
    fr: "Jeux vidéo",
    hr: "Igranje igara",
    gg: "Globi und Sophia"
  },
  main_skills_languages: {
    en: "Languages",
    de: "Sprachen",
    fr: "Langues",
    hr: "Jezici",
    gg: "Globi und Sophia"
  },
  main_skills_spanish: {
    en: "Spanish",
    de: "Spanisch",
    fr: "Espagnol",
    hr: "Španjolski",
    gg: "Globi"
  },
  main_skills_title: {
    en: "My Skills & Interests",
    de: "Skills & Interessen",
    fr: "Compétences & intérêts",
    hr: "Vještine i interesi",
    gg: "Globi und Sophia"
  },
  main_skills_subtitle: {
    en: "Every Day is a New Opportunity to:",
    de: "Jeder Tag bietet neue Chancen um:",
    fr: "Chaque jour est une nouvelle occasion de:",
    hr: "Svaki dan je nova prilika za:",
    gg: "Globi und Sophia fliegen"
  },
  main_skills_text_entry_1: {
    en: "Finally finish that one project laying around",
    de: "Endlich das eine Projekt ab zu schliessen",
    fr: "Terminer enfin ce projet en attente",
    hr: "Završiti konačno taj jedan projekt",
    gg: "Globi und Sophia fliegen bis ins Gebirge hinauf."
  },
  main_skills_text_entry_2: {
    en: "Stare at a bug for an hour and fix it in five seconds",
    de: "Einen Bug nach einer Stunde in 5 Sekunden lösen",
    fr: "Fixer un bug 1h et corriger en 5s",
    hr: "Sat vremena bugljiti u bug, i rješit u 5 sekundi",
    gg: "Globi und Sophia fliegen bis ins Gebirge hinauf."
  },
  main_skills_text_entry_3: {
    en: "Write code that works... and then wonder why",
    de: "Laufenden code schreiben... und nicht verstehen",
    fr: "Écrire du code qui fonctionne... puis se demander pourquoi",
    hr: "Napisati kod koji radi... i onda se pitati zašto",
    gg: "Globi und Sophia fliegen bis ins Gebirge hinauf."
  },
  main_skills_text_entry_4: {
    en: "Stay curious and dive into something new",
    de: "Neugierig bleiben und in Neues eintauchen",
    fr: "Rester curieux et plonger dans quelque chose de nouveau",
    hr: "Ostati znatiželjan i zaroniti u nešto novo",
    gg: "Globi und Sophia fliegen bis ins Gebirge hinauf."
  },
  main_skills_text_entry_5: {
    en: "Teach something you didn’t know six months ago",
    de: "Etwas lehren, das man kürzlich nicht wusste",
    fr: "Enseigner quelque chose qu’on ne connaissait pas il y a six mois",
    hr: "Poučavati nešto što nisi znao prije šest mjeseci",
    gg: "Globi und Sophia fliegen bis ins Gebirge hinauf."
  },
  main_skills_text_entry_6: {
    en: "Work with people who challenge your thinking",
    de: "Mit Leuten arbeiten, die meine Denkweise fordern",
    fr: "Travailler avec des personnes qui stimulent votre pensée",
    hr: "Raditi s ljudima koji izazivaju tvoje razmišljanje",
    gg: "Globi und Sophia fliegen bis ins Gebirge hinauf."
  },
  main_skills_text_entry_7: {
    en: "Take a few hits in MMA and still show up smiling",
    de: "Paar Treffer im MMA kassieren und weiter lächeln",
    fr: "Prendre quelques coups en MMA et continuer à sourire",
    hr: "Primiti udarce u MMA-u i i dalje se smijati",
    gg: "Globi und Sophia fliegen bis ins Gebirge hinauf."
  },
  main_skills_text_entry_8: {
    en: "Experiment in the kitchen even if it turns out weird",
    de: "In der Küche experimentieren egal wie es wird",
    fr: "Expérimenter en cuisine même si c’est bizarre",
    hr: "Eksperimentirati u kuhinji čak i ako ispadne čudno",
    gg: "Globi und Sophia fliegen bis ins Gebirge hinauf."
  },
  main_skills_text_entry_9: {
    en: "To live life pursuing what you love",
    de: "Das im Leben zu verfolgen, was man liebt",
    fr: "Vivre une vie en poursuivant ce que vous aimez",
    hr: "Živjeti život slijedeći ono što voliš",
    gg: "Globi und Sophia fliegen bis ins Gebirge hinauf."
  },
  main_journey_title: {
    en: "My Journey",
    de: "Mein Weg",
    fr: "Mon parcours",
    hr: "Moje putovanje",
    gg: "Globi und Sophia fliegen bis ins Gebirge hinauf."
  },
  main_journey_subtitle: {
    en: "Where I've been and what I've accomplished",
    de: "Wo ich war und was ich erreicht habe",
    fr: "Où j'ai été et ce que j'ai accompli",
    hr: "Gdje sam bio i što sam postigao",
    gg: "Globi und Sophia fliegen bis ins Gebirge hinauf."
  },
  main_journey_experience: {
    en: "Experience",
    de: "Erfahrung",
    fr: "Expérience",
    hr: "Iskustvo",
    gg: "Globi und Sophia"
  },
  main_journey_education: {
    en: "Education",
    de: "Ausbildung",
    fr: "Éducation",
    hr: "Obrazovanje",
    gg: "Globi und Sophia"
  },
  main_journey_notable_achievements: {
    en: "Notable Achievements: ",
    de: "Bemerkenswerte Leistungen: ",
    fr: "Réalisations notables: ",
    hr: "Značajna postignuća: ",
    gg: "Globi und Sophia"
  },
  main_journey_technologies: {
    en: "Technologies: ",
    de: "Technologien: ",
    fr: "Technologies: ",
    hr: "Tehnologije: ",
    gg: "Globi und Sophia"
  },
  main_journey_experience_entry_1_name: {
    en: "Fullstack Software Engineer",
    de: "Fullstack Software Engineer",
    fr: "Ingénieur logiciel Fullstack",
    hr: "Fullstack softverski inženjer",
    gg: "Globi und Sophia"
  },
  main_journey_experience_zurich: {
    en: "Zurich",
    de: "Zürich",
    fr: "Zurich",
    hr: "Zürich",
    gg: "Globi und Sophia"
  },
  main_journey_experience_entry_1_description_1: {
    en: "Organized and implemented solutions for Informaticon client ZAKU AG",
    de: "Organisierte und implementierte Lösungen für den Informaticon-Kunden ZAKU AG",
    fr: "Organisé et mis en œuvre des solutions pour le client Informaticon ZAKU AG",
    hr: "Organizirali i implementirali rješenja za Informaticon klijenta ZAKU AG",
    gg: "Globi und Sophia"
  },
  main_journey_experience_entry_1_description_2: {
    en: "Enhanced customer interactions and PowerBuilder development",
    de: "Verbesserte Kundeninteraktionen und PowerBuilder-Entwicklung",
    fr: "Amélioration des interactions avec les clients et du développement PowerBuilder",
    hr: "Poboljšana interakcija s kupcima i razvoj PowerBuildera",
    gg: "Globi und Sophia"
  },
  main_journey_experience_entry_1_description_3: {
    en: "Conducted framework updates for various clients",
    de: "Durchgeführte Framework-Updates für verschiedene Kunden",
    fr: "Mise à jour du cadre pour divers clients",
    hr: "Provedena ažuriranja okvira za razne klijente",
    gg: "Globi und Sophia"
  },
  main_journey_experience_entry_1_description_4: {
    en: "Analyzed SQL Anywhere databases and Powerbuilder frameworks",
    de: "Analysierte SQL Anywhere-Datenbanken und Powerbuilder-Frameworks",
    fr: "Analyse des bases de données SQL Anywhere et des frameworks Powerbuilder",
    hr: "Analizirane SQL Anywhere baze podataka i Powerbuilder okviri",
    gg: "Globi und Sophia"
  },
  main_journey_experience_entry_1_description_5: {
    en: "Developed interfaces for data synchronization between APIs and local systems",
    de: "Entwicklung von Schnittstellen zur Datensynchronisation zwischen APIs und lokalen Systemen",
    fr: "Développement d'interfaces pour la synchronisation des données entre les API et les systèmes locaux",
    hr: "Razvijene sučelja za sinkronizaciju podataka između API-ja i lokalnih sustava",
    gg: "Globi und Sophia"
  },
  main_journey_experience_entry_2_name: {
    en: "Apprenticeship: Test Automation Engineer",
    de: "Lehre: Testautomatisierungsingenieur",
    fr: "Apprentissage: Ingénieur en automatisation des tests",
    hr: "Učenje: Inženjer automatizacije testiranja",
    gg: "Globi und Sophia"
  },
  main_journey_experience_entry_2_description_1: {
    en: "Created internal test automation for Accenture's apprentice management system",
    de: "Erstellung interner Testautomatisierung für das Lehrlingsmanagementsystem von Accenture",
    fr: "Création d'une automatisation des tests internes pour le système de gestion des apprentis d'Accenture",
    hr: "Izradili internu automatizaciju testiranja za sustav upravljanja učenicima Accenturea",
    gg: "Globi und Sophia"
  },
  main_journey_experience_entry_2_description_2: {
    en: "Worked on CI/CD pipeline testing for client projects",
    de: "Arbeitete an der CI/CD-Pipeline-Tests für Kundenprojekte",
    fr: "Travaillé sur les tests de pipeline CI/CD pour des projets clients",
    hr: "Radio na CI/CD testiranju cjevovoda za klijentske projekte",
    gg: "Globi und Sophia"
  },
  main_journey_experience_entry_2_description_3: {
    en: "Developed Selenium test cases",
    de: "Entwicklung von Selenium-Testfällen",
    fr: "Développement de cas de test Selenium",
    hr: "Razvijeni Selenium testni slučajevi",
    gg: "Globi und Sophia"
  },
  main_journey_experience_entry_2_description_4: {
    en: "Improved adaptability across different work environments",
    de: "Verbesserte Anpassungsfähigkeit in verschiedenen Arbeitsumgebungen",
    fr: "Amélioration de l'adaptabilité dans différents environnements de travail",
    hr: "Poboljšana prilagodljivost u različitim radnim okruženjima",
    gg: "Globi und Sophia"
  },
  main_journey_experience_entry_3_name: {
    en: "Apprenticeship: Fullstack Engineer",
    de: "Lehre: Fullstack Engineer",
    fr: "Apprentissage: Ingénieur Fullstack",
    hr: "Učenje: Fullstack inženjer",
    gg: "Globi und Sophia"
  },
  main_journey_experience_entry_3_description_1: {
    en: "Trained in Python, C, JavaScript, and Java",
    de: "Ausbildung in Python, C, JavaScript und Java",
    fr: "Formation en Python, C, JavaScript et Java",
    hr: "Obrazovanje u Pythonu, C, JavaScriptu i Javi",
    gg: "Globi und Sophia"
  },
  main_journey_experience_entry_3_description_2: {
    en: "Gained practical experience with React/Spring applications",
    de: "Praktische Erfahrung mit React/Spring-Anwendungen",
    fr: "Acquis une expérience pratique avec des applications React/Spring",
    hr: "Stečeno praktično iskustvo s React/Spring aplikacijama",
    gg: "Globi und Sophia"
  },
  main_journey_experience_entry_3_description_3: {
    en: "Worked in SCRUM teams using MS Teams and Slack",
    de: "Arbeitete in SCRUM-Teams mit MS Teams und Slack",
    fr: "Travaillé dans des équipes SCRUM utilisant MS Teams et Slack",
    hr: "Radio u SCRUM timovima koristeći MS Teams i Slack",
    gg: "Globi und Sophia"
  },
  main_journey_education_expected: {
    en: "(Expected)",
    de: "(Erwartet)",
    fr: "(Prévu)",
    hr: "(Očekivano)",
    gg: "Globi und Sophia"
  },
  main_journey_education_entry_1_name: {
    en: "Bachelor of Science in Computer Science",
    de: "Bachelor of Science in Informatik",
    fr: "Bachelor of Science en Informatique",
    hr: "Bachelor of Science u računalnim znanostima",
    gg: "Globi und Sophia"
  },
  main_journey_education_entry_location_winterthur: {
    en: "Winterthur, Switzerland",
    de: "Winterthur, Schweiz",
    fr: "Winterthur, Suisse",
    hr: "Winterthur, Švicarska",
    gg: "Globi und Sophia"
  },
  main_journey_education_entry_1_description_1: {
    en: "Current grade average of 5.5/6",
    de: "Aktueller Notenschnitt von 5.5/6",
    fr: "Moyenne actuelle de 5.5/6",
    hr: "Trenutni prosjek 5.5/6",
    gg: "Globi und Sophia"
  },
  main_journey_education_entry_1_description_2: {
    en: "Relevant coursework: Algorithms, Data Structures, Software Engineering, Database Systems",
    de: "Relevante Kurse: Algorithmen, Datenstrukturen, Software Engineering, Datenbanksysteme",
    fr: "Cours pertinents : Algorithmes, Structures de données, Ingénierie logicielle, Systèmes de bases de données",
    hr: "Relevantni kolegiji: Algoritmi, Strukture podataka, Softversko inženjerstvo, Sustavi baza podataka",
    gg: "Globi und Sophia"
  },
  main_journey_education_entry_1_description_3: {
    en: "University project: Receipt splitter application using Microsoft Services to extract data and split receipts between friends (unfortunately also using JavaFX)",
    de: "Universitätsprojekt: Quittungsaufteilungsanwendung mit Microsoft Services zur Datenextraktion und Aufteilung von Quittungen zwischen Freunden (leider auch mit JavaFX)",
    fr: "Projet universitaire : Application de séparation de reçus utilisant les services Microsoft pour extraire des données et diviser les reçus entre amis (malheureusement aussi en JavaFX)",
    hr: "Sveučilišni projekt: Aplikacija za dijeljenje računa koja koristi Microsoftove usluge za vađenje podataka i dijeljenje računa između prijatelja (nažalost također koristeći JavaFX)",
    gg: "Globi und Sophia"
  },
  main_journey_education_entry_2_name: {
    en: "Military as Security Soldier",
    de: "Militär als Sicherungssoldat",
    fr: "Militaire en tant que soldat de sécurité",
    hr: "Vojska kao vojnik sigurnosti",
    gg: "Globi und Sophia"
  },
  main_journey_education_entry_location_valais: {
    en: "Valais, Switzerland",
    de: "Wallis, Schweiz",
    fr: "Valais, Suisse",
    hr: "Wallis, Švicarska",
    gg: "Globi und Sophia"
  },
  main_journey_education_entry_2_description_1: {
    en: "Strengthening skills in work ethic, discipline, and attention.",
    de: "Stärkung der Fähigkeiten in Arbeitsmoral, Disziplin und Aufmerksamkeit.",
    fr: "Renforcement des compétences en éthique de travail, discipline et attention.",
    hr: "Jačanje vještina u radnoj etici, disciplini i pažnji.",
    gg: "Globi und Sophia"
  },
  main_journey_education_entry_2_description_2: {
    en: "Simply a cool time with new people and experiences.",
    de: "Einfach eine geile Zeit mit neuen Menschen und Erfahrungen.",
    fr: "Tout simplement un bon moment avec de nouvelles personnes et expériences.",
    hr: "Jednostavno dobro vrijeme s novim ljudima i iskustvima.",
    gg: "Globi und Sophia"
  },
  main_journey_education_entry_3_name: {
    en: "EFZ in Apprenticeship in Application Development",
    de: "EFZ in der Lehre zur Applikationsentwicklung",
    fr: "EFZ en apprentissage en développement d'applications",
    hr: "EFZ u učenju u razvoju aplikacija",
    gg: "Globi und Sophia"
  },
  main_journey_education_entry_3_description_1: {
    en: 'Graduated with a grade average of 5.5/6',
    de: 'Abschluss mit einem Notenschnitt von 5.5/6',
    fr: 'Diplômé avec un moyenne scolaire de 5.5/6',
    hr: 'Diplomirao s prosjekom 5.5/6',
    gg: 'Globi und Sophia'
  },
  main_journey_education_entry_3_description_2: {
    en: 'Focus on Java, Python, web development and test automation',
    de: 'Fokus auf Java, Python, Webentwicklung und Testautomatisierung',
    fr: 'Concentration sur Java, Python, développement web et automatisation des tests',
    hr: 'Fokus na Java, Python, web razvoj i automatizaciju testiranja',
    gg: 'Globi und Sophia'
  },
  main_journey_education_entry_3_description_3: {
    en: "Developed a test automation system with Selenium and Gherkin for an apprentice management system as final project",
    de: "Entwicklung eines Testautomatisierungssystems für ein Lehrlingsmanagement-System mit Selenium und Gherkin als Abschlussprojekt",
    fr: "Développement d'un système d'automatisation des tests pour un système de gestion des apprentis avec Selenium et Gherkin comme projet final",
    hr: "Razvijen sustav automatizacije testiranja za sustav upravljanja učenicima s Seleniumom i Gherkinom kao završni projekt",
    gg: "Globi und Sophia"
  },
  main_journey_education_entry_location_zurich: {
    en: "Zurich, Switzerland",
    de: "Zürich, Schweiz",
    fr: "Zurich, Suisse",
    hr: "Zürich, Švicarska",
    gg: "Globi und Sophia"
  },
  main_journey_education_entry_4_name: {
    en: "Technical Vocational Baccalaureate",
    de: "Technische Berufsmaturität",
    fr: "Baccalauréat Technique Professionnel",
    hr: "Tehnička Stručna Matura",
    gg: "Globi und Sophia"
  },
  main_journey_education_entry_4_description_1: {
    en: "Graduated with a grade average of 5.2/6",
    de: "Abschluss mit einem Notenschnitt von 5.2/6",
    fr: "Diplômé avec un moyenne scolaire de 5.2/6",
    hr: "Diplomirao s prosjekom 5.2/6",
    gg: "Globi und Sophia"
  },
  main_journey_education_entry_4_description_2: {
    en: "Excellent performance in Mathematics, Physics, and English",
    de: "Hervorragende Leistungen in Mathematik, Physik und Englisch",
    fr: "Excellente performance en Mathématiques, Physique et Anglais",
    hr: "Izvrsno postignuće iz matematike, fizike i engleskog",
    gg: "Globi und Sophia"
  },
  main_contact_title: {
    en: "Get In Touch",
    de: "Kontaktiere Mich",
    fr: "Contactez-moi",
    hr: "Kontaktirajte me",
    gg: "Globi und Sophia"
  },
  main_contact_subtitle: {
    en: "Feel free to reach out using the form below!",
    de: "Kontaktiere mich gerne über das untenstehende Formular!",
    fr: "N'hésitez pas à me contacter en utilisant le formulaire ci-dessous!",
    hr: "Slobodno me kontaktirajte putem obrasca u nastavku!",
    gg: "Globi und Sophia fliegen bis ins Gebirge hinauf."
  },
  main_contact_form_name: {
    en: "Name:",
    de: "Name:",
    fr: "Nom:",
    hr: "Ime:",
    gg: "Globi und Sophia:"
  },
  main_contact_form_subject: {
    en: "Subject:",
    de: "Betreff:",
    fr: "Sujet:",
    hr: "Predmet:",
    gg: "Globi und Sophia:"
  },
  main_contact_form_message: {
    en: "Message:",
    de: "Nachricht:",
    fr: "Message:",
    hr: "Poruka:",
    gg: "Globi und Sophia:"
  },
  main_contact_form_submit: {
    en: "Send Message",
    de: "Nachricht senden",
    fr: "Envoyer le message",
    hr: "Pošalji poruku",
    gg: "Globi und Sophia:"
  },
  main_contact_form_success: {
    en: "E-Mail sent successfully!",
    de: "E-Mail erfolgreich gesendet!",
    fr: "E-mail envoyé avec succès!",
    hr: "E-mail uspješno poslan!",
    gg: "Globi und Sophia fliegen bis ins Gebirge hinauf."
  },
  main_contact_form_fail: {
    en: "An error occurred while sending the email",
    de: "Beim Senden der E-Mail ist ein Fehler aufgetreten",
    fr: "Une erreur s'est produite lors de l'envoi de l'e-mail",
    hr: "Došlo je do greške prilikom slanja e-pošte",
    gg: "Globi und Sophia fliegen bis ins Gebirge hinauf."
  },
  main_contact_form_error_no_name: {
    en: "Name is required",
    de: "Name ist erforderlich",
    fr: "Le nom est requis",
    hr: "Ime je obavezno",
    gg: "Globi und Sophia fliegen bis ins Gebirge hinauf."
  },
  main_contact_form_error_no_subject: {
    en: "Subject is required",
    de: "Betreff ist erforderlich",
    fr: "Le sujet est requis",
    hr: "Predmet je obavezan",
    gg: "Globi und Sophia fliegen bis ins Gebirge hinauf."
  },
  main_contact_form_error_no_message: {
    en: "Message is required",
    de: "Nachricht ist erforderlich",
    fr: "Le message est requis",
    hr: "Poruka je obavezna",
    gg: "Globi und Sophia fliegen bis ins Gebirge hinauf."
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