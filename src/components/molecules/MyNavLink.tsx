import './styling/MyNavLink.css';
import { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";

type NavLinkProps = {
    title: string;
    link: string;
  };

const MyThemeSwitcher = ({title, link}: NavLinkProps) => {

    const [activeLink, setActiveLink] = useState<string>("home");

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    const onUpdateActiveLink = (value: string) => {
        setActiveLink(value);
    };

    return (
        <Nav.Link
            href={link}
            className={activeLink === link ? "active my-navbar-link" : "my-navbar-link"}
            onClick={() => onUpdateActiveLink(link)}
        >
            {title}
        </Nav.Link>
    );
};

export default MyThemeSwitcher;
