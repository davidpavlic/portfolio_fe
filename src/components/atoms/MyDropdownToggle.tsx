import './styling/MyDropdownToggle.css';
import { RefObject } from 'react';
import { Dropdown } from 'react-bootstrap';


///* TYPE DEFINITION *///
// Defines the expected properties for the MyDropdownToggle component.
// - title: displayed in the dropdown toggle button.
// - inputRef: A React ref object that should point to an HTMLButtonElement.
//             This ref is passed from the parent component and allows the parent
//             to directly access and manipulate the underlying DOM element (the button),
//             for tasks such as focusing or blurring the button.
type MyDropdownToggleProps = {
  title: string;
  inputRef: RefObject<HTMLButtonElement>;
};


///* FUNCTIONAL COMPONENT *///
const MyDropdownToggle = ({ title, inputRef }: MyDropdownToggleProps) => (
  // The ref is attached to the Dropdown.Toggle component,
  // allowing parent components to access its underlying DOM element
  <Dropdown.Toggle
    ref={inputRef}
    className='my-dropdown-toggle'
  >
    {title}
  </Dropdown.Toggle>
);


///* EXPORT *///
export default MyDropdownToggle;