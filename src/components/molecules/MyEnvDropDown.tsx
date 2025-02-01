import { Dropdown } from "react-bootstrap";
import { useState } from "react";
import MyDropdownToggle from "../atoms/MyDropdownToggle";
import MyDropdownMenu from "../atoms/MyDropdownMenu";

const MyEnvDropDown = () => {

  const [env, setEnv] = useState<string>("Prod");

  const envItems = [
    { label: "Prod" },
    { label: "Test" },
  ];

  return (
    <Dropdown>
      <MyDropdownToggle title={env} />
      <MyDropdownMenu items={envItems} onSelect={setEnv} />
    </Dropdown>
  );
};

export default MyEnvDropDown;
