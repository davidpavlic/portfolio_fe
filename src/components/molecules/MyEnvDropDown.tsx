import { Dropdown } from "react-bootstrap";
import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import MyDropdownToggle from "../atoms/MyDropdownToggle";
import MyDropdownMenu from "../atoms/MyDropdownMenu";


//* CONSTANTS *///
// Define environment items with translation keys
const envItems = [
  { code: "p", labelKey: "env_prod" },
  { code: "t", labelKey: "env_test" },
];


///* FUNCTIONAL COMPONENT *///
const MyEnvDropDown = () => {
  const { t } = useTranslation();
  const [envCode, setEnvCode] = useState<string>(localStorage.getItem("env") || "p");   // Retrieve stored environment from localStorage or fallback to production
  const toggleRef = useRef<HTMLButtonElement>(null); // Ref for the toggle button
  const [show, setShow] = useState(false); // Control dropdown visibility

  // Derive the current environment label from i18n.
  const currentEnvLabel = t(
    envItems.find((item) => item.code === envCode)?.labelKey || "env_prod"
  );

  const handleSelect = (eventKey: string | null) => {
    if (!eventKey) return;

    //Change the environment
    //TODO: Change environment

    // Update localStorage and state with the selected environment code.
    localStorage.setItem("env", eventKey);
    setEnvCode(eventKey);

    // Close the dropdown and blur the toggle button.
    setShow(false);
    setTimeout(() => toggleRef.current?.blur(), 1); // Delay to ensure Bootstrap doesn't override the behavior
  };

  return (
    <Dropdown show={show} onToggle={setShow} onSelect={handleSelect}>
      <MyDropdownToggle inputRef={toggleRef} title={currentEnvLabel} />
      <MyDropdownMenu
        items={envItems.map(i => ({ code: i.code, label: t(i.labelKey) }))}
      />
    </Dropdown>
  );
};


///* EXPORT *///
export default MyEnvDropDown;