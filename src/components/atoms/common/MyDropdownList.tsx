import '../styling/MyDropdownList.css';
import { Dropdown } from 'react-bootstrap';


///* TYPE DEFINITION *///
// Defines the expected properties for the MyDropdownList component.
// - items: an object array containing a 'code' and a display 'component'.
// - onClick: an optional function that will be called when an item is clicked.
// - noPadding: an optional boolean to control padding in the dropdown menu.
type MyDropdownListProps = {
  items: { code: string; component: React.ReactNode }[];
  onClick?: (e: React.MouseEvent) => void; // We expect the function to take 'e' (event) and 'code'
  noPadding?: boolean; // Optional property to control padding
};


///* FUNCTIONAL COMPONENT *///
const MyDropdownList = ({ items, onClick, noPadding }: MyDropdownListProps) => (
  <Dropdown.Menu className='my-dropdown-menu'>
    {items.map(({ code, component }) => (
      // For each item in the 'items' array, create a Dropdown.Item.
      // The eventkey is passed to the function specified in the parents onSelect property.
      <Dropdown.Item
        className={`my-dropdown-menu-item ${noPadding ? 'my-dropdown-menu-item-no-padding' : ''}`}
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