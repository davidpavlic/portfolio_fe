import './NavBar.css';
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
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
    <Navbar expand="md">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="/"
              className={activeLink === "/" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("/")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/projects"
              className={activeLink === "/projects" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("/projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="/passions"
              className={activeLink === "/passions" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("/passions")}
            >
              Passions
            </Nav.Link>
            <Nav.Link
              href="/news-scraper"
              className={activeLink === "/news-scraper" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("/news-scraper")}
            >
              NewsScraper
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;