import "./styling/MyNavBar.css";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import MyEnvDropDown from "../molecules/MyEnvDropDown";
import MyLanguageDropDown from "../molecules/MyLanguageDropDown";
import MyThemeSwitcher from "../atoms/MyThemeSwitcher";
import MyNavLink from "../molecules/MyNavLink";
import { FaCog } from "react-icons/fa";

export const MyNavBar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { link: "/", title: "Home" },
    { link: "/projects", title: "Projects" },
    { link: "/passions", title: "Passions" },
    { link: "/news-scraper", title: "News Scraper" },
  ];

  return (
    <Navbar expand="md" className="my-navbar">
      <Container>
        <Navbar.Brand href="/" className="my-navbar-brand">
          David Pavlic
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="my-navbar-center">
            {navItems.map((item) => (
              <MyNavLink key={item.link} title={item.title} link={item.link} />
            ))}
          </Nav>
        </Navbar.Collapse>

        {windowWidth <= 991 ? (
          <Dropdown className="my-navbar-settings-dropdown" align="end" autoClose="outside">
            <Dropdown.Toggle variant="link" className="my-navbar-settings-icon">
              <FaCog style={{ color: "black" }} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as="div">
                <MyThemeSwitcher />
              </Dropdown.Item>
              <Dropdown.Item
                as="div"
                className="dropdown-container"
                onClick={(e) => e.stopPropagation()}
              >
                <MyLanguageDropDown />
              </Dropdown.Item>
              <Dropdown.Item
                as="div"
                className="dropdown-container"
                onClick={(e) => e.stopPropagation()}
              >
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
      </Container>
    </Navbar>
  );
};

export default MyNavBar;