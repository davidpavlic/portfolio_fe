import "./styling/MyNavBar.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import MyEnvDropDown from "../molecules/MyEnvDropDown";
import MyLanguageDropDown from "../molecules/MyLanguageDropDown";
import MyThemeSwitcher from "../atoms/MyThemeSwitcher";
import MyNavLink from "../molecules/MyNavLink";

export const MyNavBar = () => {

  const navItems = [
    { link: "/", title: "Home" },
    { link: "/projects", title: "Projects" },
    { link: "/passions", title: "Passions" },
    { link: "/news-scraper", title: "News Scraper" },
  ];

  return (
    <Navbar expand="sm" className="my-navbar">
      <Container className="navbar-container">

        <Navbar.Brand href="/" className="navbar-brand">
          David Pavlic
        </Navbar.Brand>

        <Nav className="center-nav">
          {navItems.map((item) => (
            <MyNavLink title={item.title} link={item.link}/>
          ))}
        </Nav>

        <div className="right-nav">
          <MyThemeSwitcher />
          <MyLanguageDropDown />
          <MyEnvDropDown />
        </div>

      </Container>
    </Navbar>
  );
};

export default MyNavBar;