import '../styling/MySettingsMenu.css';
import { useState, useEffect } from 'react';
import { Dropdown, Nav } from 'react-bootstrap';
import { FaCog } from 'react-icons/fa';
import MyEnvDropDown from '../../atoms/common/MyEnvDropDown';
import MyLanguageDropDown from '../../atoms/common/MyLanguageDropDown';
import MyThemeSwitcher from '../../atoms/common/MyThemeSwitcher';
import MyDropdownList from '../../atoms/common/MyDropdownList';
import MyDropdownToggle from '../../atoms/common/MyDropdownToggle';


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
        <MyDropdownToggle className='my-navbar-settings-toggle'>
          <FaCog className='my-navbar-settings-cog' />
        </MyDropdownToggle>
        <MyDropdownList
          items={SETTING_COMPONENTS}
          onClick={(e) => e.stopPropagation()}
          noPadding={true}
        />
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