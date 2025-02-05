import { Dropdown } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import MyDropdownToggle from "../atoms/MyDropdownToggle";
import MyDropdownMenu from "../atoms/MyDropdownMenu";

const MyLanguageDropDown = () => {
  const { t, i18n } = useTranslation();

  // Define language items with translation keys, not translated values
  const languageItems = [
    { code: "en", labelKey: "env_english" },
    { code: "de", labelKey: "env_german" },
    { code: "fr", labelKey: "env_french" },
    { code: "hr", labelKey: "env_croatian" },
    { code: "gg", labelKey: "env_globi" },
  ];

  // Retrieve stored language or fallback to English
  const storedLanguageCode = localStorage.getItem("language") || "en";
  const [languageCode, setLanguageCode] = useState<string>(storedLanguageCode);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const [show, setShow] = useState(false);

  // Update the language when the component mounts
  useEffect(() => {
    i18n.changeLanguage(languageCode);
  }, [languageCode, i18n]);

  // Get the translated label dynamically from i18n
  const currentLanguageLabel = t(languageItems.find((item) => item.code === languageCode)?.labelKey || "env_english");

  const handleSelect = (eventKey: string | null) => {
    if (!eventKey) return;

    // Change the language
    i18n.changeLanguage(eventKey);
    localStorage.setItem("language", eventKey);
    setLanguageCode(eventKey);
    
    // Close dropdown
    setShow(false);
    setTimeout(() => {
      if (toggleRef.current) {
        toggleRef.current.blur();
      }
    }, 1);
  };

  return (
    <Dropdown show={show} onToggle={setShow} onSelect={handleSelect}>
      <MyDropdownToggle ref={toggleRef} title={currentLanguageLabel} />
      <MyDropdownMenu
        items={languageItems.map((item) => ({
          code: item.code,
          label: t(item.labelKey), // Translate dynamically
        }))}
        onSelect={handleSelect}
      />
    </Dropdown>
  );
};

export default MyLanguageDropDown;
