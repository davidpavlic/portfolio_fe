import './styling/MyDropdownToggle.css';
import { RefObject } from 'react';
import { Dropdown } from 'react-bootstrap';


///* TYPE DEFINITION *///
// Defines the expected properties for the MyDropdownToggle component.
// - children: Displayed in the dropdown toggle button.
//             React.ReactNode allows any JSX content to be passed.
// - inputRef: A React ref object that should point to an HTMLButtonElement.
//             This ref is passed from the parent component and allows the parent
//             to directly access and manipulate the underlying DOM element (the button),
//             for tasks such as focusing or blurring the button.
// - className: Optional className to add custom styles.
type MyDropdownToggleProps = {
  children: React.ReactNode; 
  inputRef?: RefObject<HTMLButtonElement>;
  className?: string;
};


///* FUNCTIONAL COMPONENT *///
const MyDropdownToggle = ({ children, inputRef, className }: MyDropdownToggleProps) => (
  // The ref is attached to the Dropdown.Toggle component,
  // allowing parent components to access its underlying DOM element
  <Dropdown.Toggle
    ref={inputRef}
    className={className || 'my-dropdown-toggle'}
  >
    {children}
  </Dropdown.Toggle>
);


///* EXPORT *///
export default MyDropdownToggle;