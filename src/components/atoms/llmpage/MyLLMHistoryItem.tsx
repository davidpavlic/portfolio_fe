import '../styling/MyLLMHistoryItem.css';
import MyDeleteButton from '../common/MyDeleteButton';
import { useState } from 'react';
import MyPasswordModal from '../../molecules/common/MyPasswordModal';


///* TYPE DEFINITIONS *///
// - entry: object containing id, title, and date of the chat history
// - onLoadChat: function to load the chat when the item is clicked
// - onDelete: function to delete the chat when the delete button is clicked
type MyLLMHistoryItemProps = {
    entry: { id: string, title: string, date: string };
    onLoadChat: (id: string) => void;
    onDelete: (id: string, password: string) => void;
}


///* FUNCTIONAL COMPONENT *///
const MyLLMHistoryItem = ({ entry, onLoadChat, onDelete }: MyLLMHistoryItemProps) => {
    const [showPasswordModal, setShowPasswordModal] = useState(false);

    // Function to handle form submission authorization
    const authorizeSubmit = () => {
        setShowPasswordModal(true);
    }

    const onAuthorized = (success: boolean, password: string) => {
        setShowPasswordModal(false);
        if (success) {
            handleSubmit(password);
        }
    };

    const handleSubmit = async (password: string) => {
        onDelete(entry.id, password);
    }

    return (
        <div>
            {showPasswordModal && (
                <MyPasswordModal
                    closeModal={() => setShowPasswordModal(false)}
                    onAuthorized={onAuthorized}
                />
            )}
            <div className='my-llm-history-item-container'>
                <button
                    className='my-llm-history-item'
                    onClick={() => onLoadChat(entry.id)}
                >
                    <span className='my-llm-history-item-title'>{entry.title}</span>
                    <span className='my-llm-history-item-date'>{entry.date}</span>
                </button>

                <MyDeleteButton className='my-llm-history-item-deletebutton' onClick={authorizeSubmit} />
            </div>
        </div>
    );
}


//* EXPORT *///
export default MyLLMHistoryItem;