import './styling/MyNavLink.css';
import { useLocation } from "react-router-dom";
import { Nav } from "react-bootstrap";


///* TYPE DEFINITION *///
// Defines the expected properties for the MyDropdownMenu component.
// - title: displayed text in nav element
// - link: link to the url when clicked
type NavLinkProps = {
    title: string;
    link: string;
};


///* FUNCTIONAL COMPONENT *///
const MyThemeSwitcher = ({ title, link }: NavLinkProps) => {
    const location = useLocation();

    return (
        <Nav.Link
            href={link}
            //if the url is equal to the given link, the nav element is active
            className={location.pathname === link ? "active my-navbar-link" : "my-navbar-link"}
        >
            {title}
        </Nav.Link>
    );
};


///* EXPORT *///
export default MyThemeSwitcher;