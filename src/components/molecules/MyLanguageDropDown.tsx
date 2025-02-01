import { Dropdown } from "react-bootstrap";
import { useState, useRef } from "react";
import MyDropdownToggle from "../atoms/MyDropdownToggle";
import MyDropdownMenu from "../atoms/MyDropdownMenu";

const MyLanguageDropDown = () => {
  const [language, setLanguage] = useState<string>("English");
  const toggleRef = useRef<HTMLButtonElement>(null); // Ref for the toggle button
  const [show, setShow] = useState(false); // Control dropdown visibility

  const languageItems = [
    { label: "English" },
    { label: "Deutsch" },
    { label: "Français" },
    { label: "Hrvatski" },
  ];

  const handleSelect = (eventKey: string | null) => {
    setLanguage(eventKey || "English");

    // Close the dropdown and blur the toggle button
    setShow(false);
    setTimeout(() => {
      if (toggleRef.current) {
        toggleRef.current.blur();
      }
    }, 1); // Delay to ensure Bootstrap doesn't override the behavior
  };

  return (
    <Dropdown show={show} onToggle={setShow} onSelect={handleSelect}>
      <MyDropdownToggle ref={toggleRef} title={language} />
      <MyDropdownMenu items={languageItems} onSelect={handleSelect} />
    </Dropdown>
  );
};

export default MyLanguageDropDown;