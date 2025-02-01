import { Dropdown } from "react-bootstrap";
import { useState, useRef } from "react";
import MyDropdownToggle from "../atoms/MyDropdownToggle";
import MyDropdownMenu from "../atoms/MyDropdownMenu";

const MyEnvDropDown = () => {

  const [env, setEnv] = useState<string>("Prod");  
  const toggleRef = useRef<HTMLButtonElement>(null); // Ref for the toggle button
  const [show, setShow] = useState(false); // Control dropdown visibility

  const envItems = [
    { label: "Prod" },
    { label: "Test" },
  ];

  const handleSelect = (eventKey: string | null) => {
    setEnv(eventKey || "Prod");

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
      <MyDropdownToggle ref={toggleRef} title={env} />
      <MyDropdownMenu items={envItems} onSelect={handleSelect} />
    </Dropdown>
  );
};

export default MyEnvDropDown;
