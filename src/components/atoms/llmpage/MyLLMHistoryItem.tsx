import '../styling/MyLLMHistoryItem.css';
import MyDeleteButton from '../common/MyDeleteButton';


///* TYPE DEFINITIONS *///
// - entry: object containing id, title, and date of the chat history
// - onLoadChat: function to load the chat when the item is clicked
// - onDelete: function to delete the chat when the delete button is clicked
type MyLLMHistoryItemProps = {
    entry: { id: string, title: string, date: string };
    onLoadChat: (id: string) => void;
    onDelete: (id: string) => void;
}


///* FUNCTIONAL COMPONENT *///
const MyLLMHistoryItem = ({ entry, onLoadChat, onDelete }: MyLLMHistoryItemProps) => (
    <div className='my-llm-history-item-container'>
        <button
            className='my-llm-history-item'
            onClick={() => onLoadChat(entry.id)}
        >
            <span className='my-llm-history-item-title'>{entry.title}</span>
            <span className='my-llm-history-item-date'>{entry.date}</span>
        </button>

        <MyDeleteButton className='my-llm-history-item-deletebutton' onClick={() => onDelete(entry.id)} />
    </div>
);


//* EXPORT *///
export default MyLLMHistoryItem;