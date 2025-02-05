import "./styling/MyNavBar.css";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaCog } from "react-icons/fa";
import MyEnvDropDown from "../molecules/MyEnvDropDown";
import MyLanguageDropDown from "../molecules/MyLanguageDropDown";
import MyThemeSwitcher from "../atoms/MyThemeSwitcher";
import MyNavLink from "../molecules/MyNavLink";

export const MyNavBar = () => {
  const { t } = useTranslation();

  // Define navigation items within the component so that t can be used.
  const navItems = [
    { link: "/", title: t("nav_home") },
    { link: "/projects", title: t("nav_projects") },
    { link: "/passions", title: t("nav_passions") },
    { link: "/news-scraper", title: t("nav_newsscraper") },
  ];

  // Track window width to conditionally render the settings component.
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width on resize.
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    // Expand md makes it collapse below 767px.
    <Navbar expand="md" className="my-navbar">
      <Navbar.Brand href="/" className="my-navbar-brand">
        David Pavlic
      </Navbar.Brand>

      {/* Makes the navbar look good, when the menu collapses */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="my-navbar-center">
          {navItems.map((item, index) => (
            <MyNavLink key={index} title={item.title} link={item.link} />
          ))}
        </Nav>
      </Navbar.Collapse>

      {windowWidth <= 1100 ? (
        <Dropdown className="my-navbar-settings-dropdown">
          <Dropdown.Toggle className="my-navbar-settings-toggle">
            <FaCog className="my-navbar-settings-cog" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={(e) => e.stopPropagation()}>
              <MyThemeSwitcher />
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => e.stopPropagation()}>
              <MyLanguageDropDown />
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => e.stopPropagation()}>
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
