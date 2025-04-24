import { useState, useRef } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import MyDropdownToggle from '../atoms/MyDropdownToggle';
import MyDropdownMenu from '../atoms/MyDropdownMenu';


//* CONSTANTS *///
// Define language items with translation keys
const LANGUAGE_ITEMS = [
  { code: 'en', labelKey: 'env_english' },
  { code: 'de', labelKey: 'env_german' },
  { code: 'fr', labelKey: 'env_french' },
  { code: 'hr', labelKey: 'env_croatian' },
  { code: 'gg', labelKey: 'env_globi' },
];


///* FUNCTIONAL COMPONENT *///
const MyLanguageDropDown = () => {
  const { t, i18n } = useTranslation();
  const toggleRef = useRef<HTMLButtonElement>(null); // Ref for the toggle button
  const [languageCode, setLanguageCode] = useState<string>(localStorage.getItem('language') || 'en');   // Retrieve stored language from localStorage or fallback to English
  const [show, setShow] = useState(false); // Control dropdown visibility

  // Derive the current language label from i18n.
  const currentLanguageLabel = t(
    LANGUAGE_ITEMS.find((item) => item.code === languageCode)?.labelKey || 'env_english'
  );

  const handleSelect = (eventKey: string | null) => {
    if (!eventKey) return;

    // Change the language
    i18n.changeLanguage(eventKey);

    // Update localStorage and state with the selected language code.
    localStorage.setItem('language', eventKey);
    setLanguageCode(eventKey);

    // Close the dropdown and blur the toggle button.
    setShow(false);
    requestAnimationFrame(() => toggleRef.current?.blur()); // Blurs the button with the next free frame
  };

  return (
    <Dropdown show={show} onToggle={setShow} onSelect={handleSelect}>
      <MyDropdownToggle inputRef={toggleRef} title={currentLanguageLabel} />
      <MyDropdownMenu
        items={LANGUAGE_ITEMS.map(i => ({ code: i.code, label: t(i.labelKey) }))}
      />
    </Dropdown>
  );
};


///* EXPORT *///
export default MyLanguageDropDown;