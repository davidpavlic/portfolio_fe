import './styling/MyNavLink.css';
import { useLocation } from "react-router-dom";
import { Nav } from "react-bootstrap";

type NavLinkProps = {
    title: string;
    link: string;
};

const MyThemeSwitcher = ({ title, link }: NavLinkProps) => {

    const location = useLocation();

    return (
        <Nav.Link
            href={link}
            className={location.pathname === link ? "active my-navbar-link" : "my-navbar-link"}
        >
            {title}
        </Nav.Link>
    );
};

export default MyThemeSwitcher;
