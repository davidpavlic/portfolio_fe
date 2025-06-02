import '../styling/MySettingsMenu.css';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FaCog } from 'react-icons/fa';
import MyEnvDropDown from '../../atoms/common/MyEnvDropDown';
import MyLanguageDropDown from '../../atoms/common/MyLanguageDropDown';
import MyThemeSwitcher from '../../atoms/common/MyThemeSwitcher';
import { CSSTransition } from 'react-transition-group';

const MySettingsMenu = () => {
  const { i18n, t } = useTranslation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeMenu, setActiveMenu] = useState<'main' | 'language' | 'environment'>('main');
  const [menuHeight, setMenuHeight] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const SETTING_COMPONENTS = [
    { code: 'theme', component: <MyThemeSwitcher /> },
    { code: 'language', component: <MyLanguageDropDown /> },
    { code: 'env', component: <MyEnvDropDown /> },
  ];

  const calculateHeight = (el: HTMLElement) => {
    requestAnimationFrame(() => {
      setMenuHeight(el.scrollHeight + 32);
    });
  };

  const handleLanguageSelect = (code: string) => {
    localStorage.setItem('language', code);
    if (typeof i18n !== 'undefined') i18n.changeLanguage(code); // assume i18n is globally accessible
  };

  const handleEnvSelect = (code: string) => {
    localStorage.setItem('env', code);
    //TODO: Change environament logic
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);

    // Initial height calculation when dropdown opens
    if (showDropdown) {
      const firstMenu = dropdownRef.current?.querySelector('.menu');
      if (firstMenu instanceof HTMLElement) {
        calculateHeight(firstMenu);
      }
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  const renderMobileDropdown = () => (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calculateHeight}
      >
        <div className="menu">
          <a className="menu-item"><MyThemeSwitcher /></a>
          <a className="menu-item" onClick={() => setActiveMenu('language')}>Language</a>
          <a className="menu-item" onClick={() => setActiveMenu('environment')}>Environment</a>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'language'}
        unmountOnExit
        timeout={500}
        classNames="menu-sub"
        onEnter={calculateHeight}
      >
        <div className="menu">
          <a className="menu-item" onClick={() => setActiveMenu('main')}>
            ← Back
          </a>
          {[
            { label: 'English', code: 'en' },
            { label: 'German', code: 'de' },
            { label: 'French', code: 'fr' },
            { label: 'Croatian', code: 'hr' },
            { label: 'Globi', code: 'gg' },
          ].map(({ label, code }) => (
            <a key={code} className="menu-item" onClick={() => handleLanguageSelect(code)}>
              {label}
            </a>
          ))}
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'environment'}
        unmountOnExit
        timeout={500}
        classNames="menu-sub"
        onEnter={calculateHeight}
      >
        <div className="menu">
          <a className="menu-item" onClick={() => setActiveMenu('main')}>
            ← Back
          </a>
          {[{ label: 'Prod', code: 'p' },
          { label: 'Test', code: 't' }
          ].map(({ label, code }) => (
            <a key={code} className="menu-item" onClick={() => handleEnvSelect(code)}>
              {label}
            </a>
          ))}
        </div>
      </CSSTransition>
    </div>
  );

  if (windowWidth <= 1100) {
    return (
      <ul>
        <li className="nav-item">
          <a className="icon-button" onClick={() => setShowDropdown(prev => !prev)}>
            <FaCog />
          </a>
        </li>
        {showDropdown && renderMobileDropdown()}
      </ul>
    );
  }

  return (
    <div className="my-settings-menu">
      {SETTING_COMPONENTS.map(({ code, component }) => (
        <div key={code}>{component}</div>
      ))}
    </div>
  );
};

export default MySettingsMenu;
