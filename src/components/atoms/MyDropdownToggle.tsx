import './styling/MyDropdownToggle.css';
import { Dropdown } from "react-bootstrap";

type DropdownToggleProps = {
  title: string;
};

const DropdownToggle = ({ title }: DropdownToggleProps) => {
  return (
    <Dropdown.Toggle variant="light" id={`${title.toLowerCase()}-dropdown`} className="my-dropdown-toggle">
      {title}
    </Dropdown.Toggle>
  );
};

export default DropdownToggle;