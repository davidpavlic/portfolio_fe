import '../styling/MySettingsMenu.css';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { CSSTransition } from 'react-transition-group';
import { FaCog } from 'react-icons/fa';
import MyEnvDropDown from '../../atoms/common/MyEnvDropDown';
import MyLanguageDropDown from '../../atoms/common/MyLanguageDropDown';
import MyThemeSwitcher from '../../atoms/common/MyThemeSwitcher';



///* CONSTANTS *///
const LANGUAGE_OPTIONS = [
  { labelKey: 'env_english', code: 'en' },
  { labelKey: 'env_german', code: 'de' },
  { labelKey: 'env_french', code: 'fr' },
  { labelKey: 'env_croatian', code: 'hr' },
  { labelKey: 'env_globi', code: 'gg' },
]

const ENV_OPTIONS = [
  { label: 'Prod', code: 'p' },
  { label: 'Test', code: 't' },
];

const SETTING_COMPONENTS = [
  { code: 'theme', component: <MyThemeSwitcher /> },
  { code: 'language', component: <MyLanguageDropDown /> },
  { code: 'env', component: <MyEnvDropDown /> },
];



///* FUNCTIONAL COMPONENT *///
const MySettingsMenu = () => {
  const { i18n, t } = useTranslation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeMenu, setActiveMenu] = useState<'main' | 'language' | 'environment'>('main');
  const [menuHeight, setMenuHeight] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLAnchorElement>(null);

  const calculateHeight = (el: HTMLElement) => {
    requestAnimationFrame(() => {
      setMenuHeight(el.scrollHeight + 32);
    });
  };

  const handleLanguageSelect = (code: string) => {
    localStorage.setItem('language', code);
    if (typeof i18n !== 'undefined') i18n.changeLanguage(code);
  };

  const handleEnvSelect = (code: string) => {
    localStorage.setItem('env', code);
    //TODO: Change environament logic
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      !toggleRef.current?.contains(event.target as Node)
    ) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    if (showDropdown) {
      const firstMenu = dropdownRef.current?.querySelector('.my-navbar-settings-dropdown-menu');
      if (firstMenu instanceof HTMLElement) {
        calculateHeight(firstMenu);
      }
    }
  }, [showDropdown]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const renderMenu = (items: { label: string; onClick: () => void }[]) => (
    <div className='my-navbar-settings-dropdown-menu'>
      <a className='my-navbar-settings-dropdown-menu-item' onClick={() => setActiveMenu('main')}>← Back</a>
      {items.map(({ label, onClick }) => (
        <a key={label} className='my-navbar-settings-dropdown-menu-item' onClick={onClick}>{label}</a>
      ))}
    </div>
  );

  const renderMobileDropdown = () => (
    <div className='my-navbar-settings-dropdown' style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        classNames='menu-primary'
        onEnter={calculateHeight}
      >
        <div className='my-navbar-settings-dropdown-menu'>
          <div className='my-navbar-settings-dropdown-menu-item my-navbar-settings-theme-switcher-item'>
            <MyThemeSwitcher />
          </div>
          <a className='my-navbar-settings-dropdown-menu-item' onClick={() => setActiveMenu('language')}>Language</a>
          <a className='my-navbar-settings-dropdown-menu-item' onClick={() => setActiveMenu('environment')}>Environment</a>
        </div>
      </CSSTransition>

      <CSSTransition in={activeMenu === 'language'} unmountOnExit timeout={500} classNames='menu-sub' onEnter={(el: { scrollHeight: number; }) => setMenuHeight(el.scrollHeight + 32)}>
        {renderMenu(LANGUAGE_OPTIONS.map(({ code, labelKey }) => ({
          label: t(labelKey),
          onClick: () => handleLanguageSelect(code),
        })))}
      </CSSTransition>

      <CSSTransition in={activeMenu === 'environment'} unmountOnExit timeout={500} classNames='menu-sub' onEnter={(el: { scrollHeight: number; }) => setMenuHeight(el.scrollHeight + 32)}>
        {renderMenu(ENV_OPTIONS.map(({ code, label }) => ({
          label,
          onClick: () => handleEnvSelect(code),
        })))}
      </CSSTransition>
    </div>
  );

  if (windowWidth <= 1100) {
    return (
      <div className='my-navbar-settings-wrapper'>
        <a
          ref={toggleRef}
          className='my-navbar-settings-button'
          onClick={() => setShowDropdown(prev => !prev)}
        >
          <FaCog className='my-navbar-settings-icon' />
        </a>

        {showDropdown && renderMobileDropdown()}
      </div>
    );
  }

  return (
    <div className='my-navbar-settings-menu'>
      {SETTING_COMPONENTS.map(({ code, component }) => (
        <div key={code}>{component}</div>
      ))}
    </div>
  );
};

export default MySettingsMenu;