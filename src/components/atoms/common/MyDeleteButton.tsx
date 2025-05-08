
import '../styling/MyDeleteButton.css';
import { BsTrash } from 'react-icons/bs';


///* TYPE DEFINITION *///
// - onClick: the function that gets executed when the button is clicked
// - className: optional additional CSS classes for styling
type MyDeleteButtonProps = {
    onClick: () => void;
    className?: string;
};


///* FUNCTIONAL COMPONENT *////
const MyDeleteButton = ({ onClick, className }: MyDeleteButtonProps) => (
    <button className={`my-delete-button ${className}`} onClick={onClick}>
        <BsTrash />
    </button>
);


///* EXPORT *///
export default MyDeleteButton;