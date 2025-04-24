import './styling/MyNavLinks.css';
import { Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import MyNavLink from '../molecules/MyNavLink';


///* CONSTANTS *///
// Define navbar links with translation keys
const NAV_ITEMS = [
    { link: '/', title: 'nav_home' },
    { link: '/projects', title: 'nav_projects' },
    { link: '/news-scraper', title: 'nav_newsscraper' },
    { link: '/my-llm', title: 'nav_llm' },
];

///* FUNCTIONAL COMPONENT *///
const MyNavLinks = () => {
    const { t } = useTranslation();
    
    return (
        <Nav className='my-nav-links'>
            {NAV_ITEMS.map(({ link, title }) => (
                <MyNavLink key={link} title={t(title)} link={link} />
            ))}
        </Nav>
    );
};



///* EXPORT *///
export default MyNavLinks;