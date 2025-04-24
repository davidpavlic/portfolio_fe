import './styling/MyNavBar.css';
import { useState, useEffect, useRef } from 'react';
import { Navbar } from 'react-bootstrap';
import MyNavLinks from '../molecules/MyNavLinks';
import MySettingsMenu from '../molecules/MySettingsMenu';


///* FUNCTIONAL COMPONENT *///
export const MyNavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to control dropdown visibility.
  const dropdownRef = useRef<HTMLButtonElement | null>(null); // Reference to the dropdown menu

  const handleOpenNavDropdown = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    setDropdownOpen(prev => target.closest('.navbar-toggler') ? !prev : false);
  };

  useEffect(() => {
    document.addEventListener('click', handleOpenNavDropdown); //listen to clicks on the document
    return () => document.removeEventListener('click', handleOpenNavDropdown); //listen to clicks on the document
  }, []);

  return (
    // Expand md makes it collapse below 767px.
    <Navbar expand='md' className='my-navbar' >
      <Navbar.Brand href='/' className='my-navbar-brand'>David Pavlic</Navbar.Brand>

      {/* Toggle button for collapsing/expanding the navigation items on smaller screens. */}
      <Navbar.Toggle aria-controls='basic-navbar-nav' ref={dropdownRef} />
      <Navbar.Collapse id='basic-navbar-nav' in={dropdownOpen}>
        <MyNavLinks />
      </Navbar.Collapse>

      <MySettingsMenu />
    </Navbar>
  );
};


///* EXPORT *///
export default MyNavBar;