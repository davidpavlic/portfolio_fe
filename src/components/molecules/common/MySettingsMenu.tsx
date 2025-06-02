import '../styling/MySettingsMenu.css';
import { useState, useEffect } from 'react';
import { Dropdown, Nav } from 'react-bootstrap';
import { FaCog } from 'react-icons/fa';
import MyEnvDropDown from '../../atoms/common/MyEnvDropDown';
import MyLanguageDropDown from '../../atoms/common/MyLanguageDropDown';
import MyThemeSwitcher from '../../atoms/common/MyThemeSwitcher';


//* CONSTANTS *///
const SETTING_COMPONENTS = [
  { code: 'theme', component: <MyThemeSwitcher /> },
  { code: 'language', component: <MyLanguageDropDown /> },
  { code: 'env', component: <MyEnvDropDown /> },
];


///* FUNCTIONAL COMPONENT *///
const MySettingsMenu = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (windowWidth <= 1100) {
    return (
      <Dropdown className='my-navbar-settings-dropdown'>
        <Dropdown.Toggle
          className='my-navbar-settings-toggle'
        >
          <FaCog className='my-navbar-settings-cog' />
        </Dropdown.Toggle>
        <Dropdown.Menu className='my-dropdown-menu'>
          {SETTING_COMPONENTS.map(({ code, component }) => (
            // For each item in the 'items' array, create a Dropdown.Item.
            // The eventkey is passed to the function specified in the parents onSelect property.
            <Dropdown.Item
              className={`my-dropdown-menu-item my-dropdown-menu-item-no-padding`}
              eventKey={code}
              key={code}
              onClick={(e) => e.stopPropagation()}
            >
              {component}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  }

  return (
    <Nav className='my-navbar-settings'>
      {SETTING_COMPONENTS.map(({ code, component }) => (
        <div key={code}>{component}</div>
      ))}
    </Nav>
  );
};


///* EXPORT *///
export default MySettingsMenu;