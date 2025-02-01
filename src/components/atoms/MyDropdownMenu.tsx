import { Dropdown } from "react-bootstrap";

type DropdownMenuProps = {
  items: { label: string }[];
  onSelect: (eventKey: string) => void;
};

const DropdownMenu = ({ items, onSelect }: DropdownMenuProps) => {
  return (
    <Dropdown.Menu>
      {items.map((item, index) => (
        <Dropdown.Item key={index} onClick={() => onSelect(item.label)}>
          {item.label}
        </Dropdown.Item>
      ))}
    </Dropdown.Menu>
  );
};

export default DropdownMenu;