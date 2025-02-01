import './styling/MyDropdownMenu.css'
import { Dropdown } from "react-bootstrap";

//TODO: Remove the padding on top when having a selection style

type DropdownMenuProps = {
  items: { label: string }[];
  onSelect: (eventKey: string) => void;
};

const DropdownMenu = ({ items, onSelect }: DropdownMenuProps) => {
  return (
    <Dropdown.Menu>
      {items.map((item) => (
        <Dropdown.Item className="my-dropdown-item" eventKey={item.label} key={item.label} onClick={() => onSelect(item.label)}>
          {item.label}
        </Dropdown.Item>
      ))}
    </Dropdown.Menu>
  );
};

export default DropdownMenu;