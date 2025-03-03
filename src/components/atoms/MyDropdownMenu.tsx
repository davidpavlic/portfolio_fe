import './styling/MyDropdownMenu.css'
import { Dropdown } from "react-bootstrap";


///* TODO *///
// Remove the padding on top when having a selection style.


///* TYPE DEFINITION *///
// Defines the expected properties for the MyDropdownMenu component.
// - items: an object array containing a 'code' and a display 'label'.
type MyDropdownMenuProps = {
  items: { code: string; label: string }[];
};


///* FUNCTIONAL COMPONENT *///
const MyDropdownMenu = ({ items }: MyDropdownMenuProps) => {
  return (
    <Dropdown.Menu className="my-dropdown-menu">
      {items.map(({ code, label }) => (
        // For each item in the 'items' array, create a Dropdown.Item.
        // The eventkey is passed to the function specified in the parents onSelect property.
        <Dropdown.Item
          className="my-dropdown-item"
          eventKey={code}
          key={code}
        >
          {label}
        </Dropdown.Item>
      ))}
    </Dropdown.Menu>
  );
};


///* EXPORT *///
export default MyDropdownMenu;