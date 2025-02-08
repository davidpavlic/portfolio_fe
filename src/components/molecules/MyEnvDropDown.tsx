import { Dropdown } from "react-bootstrap";
import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import MyDropdownToggle from "../atoms/MyDropdownToggle";
import MyDropdownMenu from "../atoms/MyDropdownMenu";

const MyEnvDropDown = () => {
  const { t } = useTranslation();

  // Get the stored environment code from localStorage; default to "p" (for production)
  const initialEnvCode = localStorage.getItem("env") || "p";
  const [envCode, setEnvCode] = useState<string>(initialEnvCode);
  const toggleRef = useRef<HTMLButtonElement>(null); // Ref for the toggle button
  const [show, setShow] = useState(false); // Control dropdown visibility

  // Define environment items with their respective translation keys.
  const envItems = [
    { code: "p", labelKey: "env_prod" },
    { code: "t", labelKey: "env_test" },
  ];

  // Derive the current environment label from i18n.
  const currentEnvLabel = t(
    envItems.find((item) => item.code === envCode)?.labelKey || "env_prod"
  );

  const handleSelect = (eventKey: string | null) => {
    if (!eventKey) return;

    // Update localStorage and state with the selected environment code.
    localStorage.setItem("env", eventKey);
    setEnvCode(eventKey);

    // Close the dropdown and blur the toggle button.
    setShow(false);
    setTimeout(() => {
      if (toggleRef.current) {
        toggleRef.current.blur();
      }
    }, 1); // Delay to ensure Bootstrap doesn't override the behavior
  };

  return (
    <Dropdown show={show} onToggle={setShow} onSelect={handleSelect}>
      <MyDropdownToggle ref={toggleRef} title={currentEnvLabel} />
      <MyDropdownMenu
        items={envItems.map((item) => ({
          code: item.code,
          label: t(item.labelKey),
        }))}
      />
    </Dropdown>
  );
};

export default MyEnvDropDown;