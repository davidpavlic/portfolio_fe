import "./NavBar.css";
import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { BsSun, BsMoon } from "react-icons/bs";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState<string>("home");
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>("English");
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="sm" className="my-navbar">
      <Container className="navbar-container">
        {/* Left: Logo */}
        <Navbar.Brand href="/" className="navbar-brand">
          David Pavlic
        </Navbar.Brand>

        {/* Center: Navigation Links */}
        <Nav className="center-nav">
          <Nav.Link
            href="/"
            className={activeLink === "/" ? "active my-navbar-link" : "my-navbar-link"}
            onClick={() => onUpdateActiveLink("/")}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="/projects"
            className={activeLink === "/projects" ? "active my-navbar-link" : "my-navbar-link"}
            onClick={() => onUpdateActiveLink("/projects")}
          >
            Projects
          </Nav.Link>
          <Nav.Link
            href="/passions"
            className={activeLink === "/passions" ? "active my-navbar-link" : "my-navbar-link"}
            onClick={() => onUpdateActiveLink("/passions")}
          >
            Passions
          </Nav.Link>
          <Nav.Link
            href="/news-scraper"
            className={activeLink === "/news-scraper" ? "active my-navbar-link" : "my-navbar-link"}
            onClick={() => onUpdateActiveLink("/news-scraper")}
          >
            NewsScraper
          </Nav.Link>
        </Nav>

        {/* Right: Dark Mode Toggle, Language Dropdown, and Environment Dropdown */}
        <div className="right-nav">
          {/* Theme Toggle */}
          <button className="icon-button" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <BsMoon size={20} /> : <BsSun size={20} />}
          </button>

          <Dropdown onSelect={(eventKey) => setLanguage(eventKey || "English")}>
            <Dropdown.Toggle variant="light" id="language-dropdown">
              {language}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="English">English</Dropdown.Item>
              <Dropdown.Item eventKey="German">Deutsch</Dropdown.Item>
              <Dropdown.Item eventKey="French">Français</Dropdown.Item>
              <Dropdown.Item eventKey="Croatian">Hrvatski</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="light" id="env-dropdown">
              Env
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/prod">Prod</Dropdown.Item>
              <Dropdown.Item href="#/test">Test</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;