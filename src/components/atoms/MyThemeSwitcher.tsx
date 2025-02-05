// MyThemeSwitcher.jsx
import "./styling/MyThemeSwitcher.css";
import { useContext } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { ThemeContext } from "../../config/MyThemeProvider"; // Adjust the path accordingly

const MyThemeSwitcher = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  return (
    <button className="my-icon-button" onClick={() => setIsDarkMode(prev => !prev)}>
      {isDarkMode ? <BsMoon size={20} /> : <BsSun size={20} />}
    </button>
  );
};

export default MyThemeSwitcher;
