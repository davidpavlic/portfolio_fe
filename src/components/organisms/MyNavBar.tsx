import "./styling/MyNavBar.css";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaCog } from "react-icons/fa";
import MyEnvDropDown from "../molecules/MyEnvDropDown";
import MyLanguageDropDown from "../molecules/MyLanguageDropDown";
import MyThemeSwitcher from "../atoms/MyThemeSwitcher";
import MyNavLink from "../molecules/MyNavLink";


///* CONSTANTS *///
// Define navbar links with translation keys
const navItems = [
  { link: "/", title: "nav_home" },
  { link: "/projects", title: "nav_projects" },
  { link: "/passions", title: "nav_passions" },
  { link: "/news-scraper", title: "nav_newsscraper" },
];
// Define settings components along with a unique key for each.
const settingsComponents = [
  { key: "theme", component: <MyThemeSwitcher /> },
  { key: "language", component: <MyLanguageDropDown /> },
  { key: "env", component: <MyEnvDropDown /> },
];


///* FUNCTIONAL COMPONENT *///
export const MyNavBar = () => {
  const { t } = useTranslation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);   // Track window width to conditionally render the settings component.

  // Update window width on resize.
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize); //listen to window resizes
    return () => window.removeEventListener("resize", handleResize); //remove on unmount to prevent memory leaks
  }, []);

  return (
    // Expand md makes it collapse below 767px.
    <Navbar expand="md" className="my-navbar">
      {/* Navbar brand that links to the homepage. */}
      <Navbar.Brand href="/" className="my-navbar-brand">
        David Pavlic
      </Navbar.Brand>

      {/* Toggle button for collapsing/expanding the navigation items on smaller screens. */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {/* Collapsible section that contains the navigation links. */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="my-navbar-center">
          {/* Iterate over navItems defined in constants section */}
          {navItems.map(({ link, title }) => (
            <MyNavLink key={link} title={t(title)} link={link} />
          ))}
        </Nav>
      </Navbar.Collapse>

      {/* Conditionally render settings based on the current window width. */}
      {windowWidth <= 1100 ? (
        <Dropdown className="my-navbar-settings-dropdown">
          {/* Dropdown toggle that displays a gear icon. */}
          <Dropdown.Toggle className="my-navbar-settings-toggle">
            <FaCog className="my-navbar-settings-cog" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {/* Iterate over settingsComponents defined in constants section */}
            {settingsComponents.map(({ key, component }) => (
              <Dropdown.Item
                key={key}
                className="my-navbar-settings-dropdown-item"
                onClick={(e) => e.stopPropagation()}
              >
                {component}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        // If the window width is greater than 1100 pixels, display settings inline.
        <Nav className="my-navbar-settings">
          {settingsComponents.map(({ key, component }) => (
            <div key={key}>{component}</div>
          ))}
        </Nav>
      )}
    </Navbar>
  );
};


///* EXPORT *///
export default MyNavBar;