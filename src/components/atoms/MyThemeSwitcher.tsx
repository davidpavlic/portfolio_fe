import "./styling/MyThemeSwitcher.css";
import { useContext } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { ThemeContext } from "../../config/MyThemeProvider";


///* FUNCTIONAL COMPONENT *///
const MyThemeSwitcher = () => {
  // useContext is a React hook that lets you subscribe to React context values
  // without having to manually pass props through every level of your component tree.
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  return (
    <button className="my-icon-button" onClick={() => setIsDarkMode(prev => !prev)}>
      {isDarkMode ? <BsMoon size={20} /> : <BsSun size={20} />}
    </button>
  );
};


///* EXPORT *///
export default MyThemeSwitcher;