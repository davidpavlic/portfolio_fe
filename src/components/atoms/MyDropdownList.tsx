import './styling/MyDropdownMenu.css';
import { Dropdown } from 'react-bootstrap';


///* TYPE DEFINITION *///
// Defines the expected properties for the MyDropdownList component.
// - items: an object array containing a 'code' and a display 'component'.
type MyDropdownListProps = {
  items: { code: string; component: React.ReactNode }[];
  onClick?: (e: React.MouseEvent) => void; // We expect the function to take 'e' (event) and 'code'
};


///* FUNCTIONAL COMPONENT *///
const MyDropdownList = ({ items, onClick }: MyDropdownListProps) => (
  <Dropdown.Menu className='my-dropdown-menu'>
    {items.map(({ code, component }) => (
      // For each item in the 'items' array, create a Dropdown.Item.
      // The eventkey is passed to the function specified in the parents onSelect property.
      <Dropdown.Item
        className='my-dropdown-menu-item'
        eventKey={code}
        key={code}
        onClick={(e) => {onClick?.(e);}}
      >
        {component}
      </Dropdown.Item>
    ))}
  </Dropdown.Menu>
);


///* EXPORT *///
export default MyDropdownList;