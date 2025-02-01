import './NavBar.css';
import { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { useLocation } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState<string>("home");
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="sm" className="my-navbar">
      <Container>
        <Nav className="left-nav">
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
        </Nav>

        <Navbar.Brand href="/" className="navbar-brand">
          David Pavlic
        </Navbar.Brand>

        <Nav className="right-nav">
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
      </Container>
    </Navbar>
  );
};

export default NavBar;