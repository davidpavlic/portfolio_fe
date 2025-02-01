import "./styling/MyDropdownToggle.css";
import { Dropdown } from "react-bootstrap";
import { forwardRef } from "react";

//TODO: when clicking on an element outside of the box it should have the hover styling

type DropdownToggleProps = {
  title: string;
};

// Forward ref to access the button inside Dropdown.Toggle
const MyDropdownToggle = forwardRef<HTMLButtonElement, DropdownToggleProps>(
  ({ title }, ref) => {
    return (
      <Dropdown.Toggle ref={ref} className="my-dropdown-toggle">
        {title}
      </Dropdown.Toggle>
    );
  }
);

export default MyDropdownToggle;