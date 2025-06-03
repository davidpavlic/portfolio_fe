import '../styling/MyLanguageDropDown.css'
import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LANGUAGE_ITEMS = [
  { code: 'en', labelKey: 'env_english' },
  { code: 'de', labelKey: 'env_german' },
  { code: 'fr', labelKey: 'env_french' },
  { code: 'hr', labelKey: 'env_croatian' },
  { code: 'gg', labelKey: 'env_globi' },
];

const MyLanguageDropDown = () => {
  const { i18n, t } = useTranslation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLAnchorElement>(null);
  const [code, setCode] = useState<string>(localStorage.getItem('language') || 'en');
  const [show, setShow] = useState(false);

  const currentLabel = t(LANGUAGE_ITEMS.find(item => item.code === code)?.labelKey || '');

  const handleSelect = (eventKey: string | null) => {
    if (!eventKey) return;
    i18n.changeLanguage(eventKey);
    localStorage.setItem('language', eventKey);
    setCode(eventKey);
    setShow(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      !toggleRef.current?.contains(event.target as Node)
    ) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [show]); // Added show to dependencies

  const handleToggle = () => {
    setShow(prev => !prev);
  };

  return (
    <ul className="my-language-dropdown-container">
      <li>
        <a
          ref={toggleRef}
          className="my-language-dropdown-toggle"
          onClick={handleToggle}
        >
          {currentLabel}
        </a>
        {show && (
          <div className="my-language-dropdown" ref={dropdownRef}>
            {LANGUAGE_ITEMS.map(({ code, labelKey }) => (
              <a
                key={code}
                className="my-language-dropdown-menu-item"
                onClick={() => handleSelect(code)}
              >
                {t(labelKey)}
              </a>
            ))}
          </div>
        )}
      </li>
    </ul>
  );
};

export default MyLanguageDropDown;