import "./styling/MyThemeSwitcher.css";
import { useContext } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { ThemeContext } from "../../config/MyThemeProvider";


///* FUNCTIONAL COMPONENT *///
const MyThemeSwitcher = () => {
  // useContext is a React hook that lets you subscribe to React context values
  // without having to manually pass props through every level of your component tree.
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const handleThemeSwitch = () => {
    // Add transition-disable class synchronously
    document.documentElement.classList.add('no-transition');
    // Toggle theme state
    setIsDarkMode(prev => !prev);
    // Remove transition-disable class after timeout
    setTimeout(() => {
      document.documentElement.classList.remove('no-transition');
    }, 50);
  };

  return (
    <button className="my-theme-switcher-icon-button" onClick={() => handleThemeSwitch()}>
      {isDarkMode ? <BsMoon size={20} /> : <BsSun size={20} />}
    </button>
  );
};


///* EXPORT *///
export default MyThemeSwitcher;