import '../styling/MyDropdownToggle.css';
import '../styling/MyDropdownList.css';

import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown } from 'react-bootstrap';

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

  return (
    <Dropdown show={show} onToggle={setShow} onSelect={handleSelect}>
      <Dropdown.Toggle
        ref={toggleRef}
        className='my-dropdown-toggle'
      >
        {currentLabel}
      </Dropdown.Toggle>
      <Dropdown.Menu className='my-dropdown-menu'>
        {LANGUAGE_ITEMS.map(({ code, labelKey }) => (
          // For each item in the 'items' array, create a Dropdown.Item.
          // The eventkey is passed to the function specified in the parents onSelect property.
          <Dropdown.Item
            className={`my-dropdown-menu-item`}
            eventKey={code}
            key={code}
          >
            {t(labelKey)}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};


///* EXPORT *///
export default MyLanguageDropDown;