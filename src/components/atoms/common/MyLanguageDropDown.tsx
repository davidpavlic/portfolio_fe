import '../styling/MyLanguageDropDown.css'

import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

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
  const { i18n, t } = useTranslation();
  const toggleRef = useRef<HTMLButtonElement>(null); // Ref for the toggle button
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref for the dropdown menu
  const [code, setCode] = useState<string>(localStorage.getItem('language') || 'en');   // Retrieve stored code from localStorage or fallback to defaultCode
  const [show, setShow] = useState(false); // Control dropdown visibility

  // Derive the current language label from i18n.
  const currentLabel = t(LANGUAGE_ITEMS.find(item => item.code === code)?.labelKey || '');

  const handleSelect = (eventKey: string | null) => {
    if (!eventKey) return;

    // Execute the onSelect function with the selected code.
    i18n.changeLanguage(eventKey);

    // Update localStorage and state with the selected code.
    localStorage.setItem('language', eventKey);
    setCode(eventKey);

    // Close the dropdown and blur the toggle button.
    setShow(false);
    requestAnimationFrame(() => toggleRef.current?.blur()); // Blurs the button with the next free frame
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setShow(false); // Close dropdown when clicking outside
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside); // Add event listener for clicks outside the dropdown
    return () => document.removeEventListener('mousedown', handleClickOutside); // Cleanup on unmount
  }, []);

  return (
    <div className="my-language-dropdown" ref={dropdownRef}>
      <button
        ref={toggleRef}
        className={`my-dropdown-toggle ${show ? 'show' : ''}`}
        onClick={() => setShow(!show)} // Toggle dropdown visibility
        aria-expanded={show}
      >
        {currentLabel}
      </button>
      {show && (
        <div className="my-dropdown-menu">
          {LANGUAGE_ITEMS.map(({ code, labelKey }) => (
            <button
              key={code}
              className="my-dropdown-menu-item"
              onClick={() => handleSelect(code)} // Handle item selection
            >
              {t(labelKey)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};


///* EXPORT *///
export default MyLanguageDropDown;