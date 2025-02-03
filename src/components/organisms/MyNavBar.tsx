import "./styling/MyNavBar.css";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import MyEnvDropDown from "../molecules/MyEnvDropDown";
import MyLanguageDropDown from "../molecules/MyLanguageDropDown";
import MyThemeSwitcher from "../atoms/MyThemeSwitcher";
import MyNavLink from "../molecules/MyNavLink";
import { FaCog } from "react-icons/fa";

// Define navigation items. Outside of the component to avoid recreating the array on every render.
const navItems = [
  { link: "/", title: "Home" },
  { link: "/projects", title: "Projects" },
  { link: "/passions", title: "Passions" },
  { link: "/news-scraper", title: "News Scraper" },
];

{/* TODO: When the Navbar collapses, the height decreases by a few px */ }
{/* TODO: When clicking outside of the opened hamburger, close it */}
{/* TODO: Adjust settings font color */}
{/* TODO: Dropdown in Dropdown */ }
{/* TODO: Dropdown no blue coloring */ }
{/* TODO: Collapsed Navbar items */}
{/* TODO: Make Brand look prettier  */}
{/* TODO: When selecting a page make an animation */}
export const MyNavBar = () => {
  // Track window width to conditionally render the settings component.
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width on resize.
  useEffect(() => {
    // Necessary since add-/removeEventlistener must reference to the same function instance.
    const handleResize = () => { setWindowWidth(window.innerWidth); };
    // This will call handleResize whenever the window is resized.
    window.addEventListener("resize", handleResize);
    // It removes the event listener to avoid memory leaks or unnecessary updates.
    return () => { window.removeEventListener("resize", handleResize); };
  }, []);

  return (
    //expand md makes it collapse below 767px.
    <Navbar expand="md" className="my-navbar">
      <Navbar.Brand href="/" className="my-navbar-brand">
        David Pavlic
      </Navbar.Brand>

      {/* Makes the navbar look good, when the menu collapses */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />    {/* TODO: what do aria-controls do? */}

      {/* The id links the collapse to the toggle */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="my-navbar-center">
          {navItems.map((item) => (
            <MyNavLink title={item.title} link={item.link} /> /* Same property two different params? */
          ))}
        </Nav>
      </Navbar.Collapse>

      {/* If screensize is below 991px (bootstrap lg) */}
      {windowWidth <= 1100 ? (
        <Dropdown className="my-navbar-settings-dropdown">
          <Dropdown.Toggle variant="link" className="my-navbar-settings-icon"> {/* TODO: Remove link and make the button look like hamburger menu */}
            <FaCog className="my-navbar-settings-icon" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={(e) => e.stopPropagation()} > {/* e.stopPropagation makes the menu not close when clicked */}
              <MyThemeSwitcher />
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => e.stopPropagation()} >
              <MyLanguageDropDown />
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => e.stopPropagation()} >
              <MyEnvDropDown />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <Nav className="my-navbar-settings">
          <MyThemeSwitcher />
          <MyLanguageDropDown />
          <MyEnvDropDown />
        </Nav>
      )}
    </Navbar>
  );
};

export default MyNavBar;