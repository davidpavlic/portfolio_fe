import '../styling/MySettingsMenu.css';
import { useState, useEffect, useRef } from 'react';
import { FaCog } from 'react-icons/fa';
import MyEnvDropDown from '../../atoms/common/MyEnvDropDown';
import MyLanguageDropDown from '../../atoms/common/MyLanguageDropDown';
import MyThemeSwitcher from '../../atoms/common/MyThemeSwitcher';

const SETTING_COMPONENTS = [
  { code: 'theme', component: <MyThemeSwitcher /> },
  { code: 'language', component: <MyLanguageDropDown /> },
  { code: 'env', component: <MyEnvDropDown /> },
];

const MySettingsMenu = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (windowWidth <= 1100) {
    return (
      <div className="my-navbar-settings-dropdown" ref={dropdownRef}>
        <button
          className={`my-navbar-settings-toggle ${showDropdown ? 'active' : ''}`}
          onClick={() => setShowDropdown(!showDropdown)}
          aria-expanded={showDropdown}
        >
          <FaCog className="my-navbar-settings-cog" />
        </button>
        
        {showDropdown && (
          <div className="my-dropdown-menu">
            {SETTING_COMPONENTS.map(({ code, component }) => (
              <div
                key={code}
                className="my-dropdown-menu-item my-dropdown-menu-item-no-padding"
                onClick={(e) => e.stopPropagation()}
              >
                {component}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="my-navbar-settings">
      {SETTING_COMPONENTS.map(({ code, component }) => (
        <div key={code} className="nav-item">
          {component}
        </div>
      ))}
    </div>
  );
};

export default MySettingsMenu;