import "./styling/MyThemeSwitcher.css";
import { useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

const MyThemeSwitcher = () => {

    const [darkMode, setDarkMode] = useState<boolean>(false);

    return (
        <button className="my-icon-button" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <BsMoon size={20} /> : <BsSun size={20} />}
        </button>
    );
};

export default MyThemeSwitcher;
