import { Dropdown } from "react-bootstrap";
import { useState } from "react";
import MyDropdownToggle from "../atoms/MyDropdownToggle";
import MyDropdownMenu from "../atoms/MyDropdownMenu";

const MyLanguageDropDown = () => {
  const [language, setLanguage] = useState<string>("English");

  const languageItems = [
    { label: "English" },
    { label: "Deutsch" },
    { label: "Français" },
    { label: "Hrvatski" },
  ];

  return (
    <Dropdown >
      <MyDropdownToggle title={language} />
      <MyDropdownMenu items={languageItems} onSelect={setLanguage} />
    </Dropdown>
  );
};

export default MyLanguageDropDown;