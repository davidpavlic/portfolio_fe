import './styling/MyThemeSwitcher.css';
import { useContext } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import { ThemeContext } from '../../config/MyThemeProvider';


///* FUNCTIONAL COMPONENT *///
const MyThemeSwitcher = () => {
  // useContext is a React hook that lets you subscribe to React context values
  // without having to manually pass props through every level of your component tree.
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const ICON_SIZE = 20;
  const TRANSITION_DISABLE_DURATION = 50;

  const handleThemeSwitch = () => {
    // Add transition-disable class synchronously
    document.documentElement.classList.add('no-transition');
    // Toggle theme state
    setIsDarkMode(prev => !prev);
    // Remove transition-disable class after timeout
    setTimeout(() => {
      document.documentElement.classList.remove('no-transition');
    }, TRANSITION_DISABLE_DURATION);
  };

  return (
    <button
      className="my-theme-switcher-icon-button"
      onClick={handleThemeSwitch}
    >
      {isDarkMode ? <BsMoon size={ICON_SIZE} /> : <BsSun size={ICON_SIZE} />}
    </button>
  );
};


///* EXPORT *///
export default MyThemeSwitcher;