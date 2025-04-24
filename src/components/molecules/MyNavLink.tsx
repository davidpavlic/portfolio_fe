import './styling/MyNavLink.css';
import { NavLink } from 'react-router-dom';


///* TYPE DEFINITION *///
// Defines the expected properties for the MyNavLink component.
// - title: displayed text in nav element
// - link: link to the url when clicked
type NavLinkProps = {
    title: string;
    link: string;
};


///* FUNCTIONAL COMPONENT *///
const MyNavLink = ({ title, link }: NavLinkProps) => (
    <NavLink
        //if the url is equal to the given link, the nav element is active
        to={link}
        //ensures that the link is only considered active if the current URL matches exactly.
        end
        className={({ isActive }) => isActive ? 'my-navbar-link active' : 'my-navbar-link'}
    >
        {title}
    </NavLink>
);



///* EXPORT *///
export default MyNavLink;