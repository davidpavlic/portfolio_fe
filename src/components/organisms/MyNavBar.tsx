import './styling/MyNavBar.css';
import { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaCog } from 'react-icons/fa';
import MyEnvDropDown from '../molecules/MyEnvDropDown';
import MyDropdownList from '../atoms/MyDropdownList';
import MyLanguageDropDown from '../molecules/MyLanguageDropDown';
import MyThemeSwitcher from '../atoms/MyThemeSwitcher';
import MyNavLink from '../molecules/MyNavLink';
import MyDropdownToggle from '../atoms/MyDropdownToggle';


///* TODOS *///
// TODO: When selecting a page make an animation 
//
// TODO: Dropdown in Dropdown
//       - https://www.youtube.com/watch?v=IF6k0uZuypA (7:37-16:51)
//       - Make MyDropDownList & MyDropDownToggle generic for the my-navbar-settings-dropdown section.
// TODO: Collapsed Nav Dropdown Menu Design. 


///* CONSTANTS *///
// Define navbar links with translation keys
const NAV_ITEMS = [
  { link: '/', title: 'nav_home' },
  { link: '/projects', title: 'nav_projects' },
  { link: '/news-scraper', title: 'nav_newsscraper' },
  { link: '/my-llm', title: 'nav_llm' },
];
// Define settings components along with a unique key for each.
const SETTING_COMPONENTS = [
  { code: 'theme', component: <MyThemeSwitcher /> },
  { code: 'language', component: <MyLanguageDropDown /> },
  { code: 'env', component: <MyEnvDropDown /> },
];


///* FUNCTIONAL COMPONENT *///
export const MyNavBar = () => {
  const { t } = useTranslation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);   // Track window width to conditionally render the settings component.
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to control dropdown visibility.
  const dropdownRef = useRef<HTMLButtonElement | null>(null); // Reference to the dropdown menu

  const handleOpenNavDropdown = (event: MouseEvent) => {
    if (!dropdownRef.current) return;
    if (dropdownOpen === false && dropdownRef.current.contains(event.target as Node)) {
      // Toggle dropdown open/close on click inside the dropdown
      setDropdownOpen(true);
    } else {
      // Close dropdown when clicking outside
      setDropdownOpen(false);
    }

  };

  // Update window width on resize.
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize); //listen to window resizes
    document.addEventListener('click', handleOpenNavDropdown); //listen to clicks on the document
    return () => {
      window.removeEventListener('resize', handleResize); //remove on unmount to prevent memory leaks
      document.removeEventListener('click', handleOpenNavDropdown); //listen to clicks on the document
    }
  }, []);

  return (
    // Expand md makes it collapse below 767px.
    <Navbar expand='md' className='my-navbar' >
      {/* Navbar brand that links to the homepage. */}
      <Navbar.Brand href='/' className='my-navbar-brand'>
        David Pavlic
      </Navbar.Brand>

      {/* Toggle button for collapsing/expanding the navigation items on smaller screens. */}
      <Navbar.Toggle aria-controls='basic-navbar-nav' ref={dropdownRef}/>
      {/* Collapsible section that contains the navigation links. */}
      <Navbar.Collapse id='basic-navbar-nav' in={dropdownOpen}>
        <Nav className='my-navbar-center'>
          {/* Iterate over navItems defined in constants section */}
          {NAV_ITEMS.map(({ link, title }) => (
            <MyNavLink key={link} title={t(title)} link={link} />
          ))}
        </Nav>
      </Navbar.Collapse>

      {/* Conditionally render settings based on the current window width. */}
      {windowWidth <= 1100 ? (
        <Dropdown className='my-navbar-settings-dropdown'>
          {/* Dropdown toggle that displays a gear icon. */}
          <MyDropdownToggle className='my-navbar-settings-toggle'>
            <FaCog className='my-navbar-settings-cog' />
          </MyDropdownToggle>
          <MyDropdownList
            items={SETTING_COMPONENTS}
            onClick={(e) => e.stopPropagation()}/>
        </Dropdown>
      ) : (
        // If the window width is greater than 1100 pixels, display settings inline.
        <Nav className='my-navbar-settings'>
          {SETTING_COMPONENTS.map(({ code, component }) => (
            <div key={code}>{component}</div>
          ))}
        </Nav>
      )}
    </Navbar>
  );
};


///* EXPORT *///
export default MyNavBar;