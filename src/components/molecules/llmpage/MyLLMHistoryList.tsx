import '../styling/MyLLMHistoryList.css';
import { useTranslation } from "react-i18next";
import MyLLMHistoryItem from '../../atoms/llmpage/MyLLMHistoryItem';


//* TYPE DEFINITIONS *///
// - id: string - Unique identifier for the history entry.
// - title: string - Title of the history entry.
// - date: string - Date when the history entry was created.
type LLMHistoryEntry = {
  id: string;
  title: string;
  date: string;
};
// - history: an array of history entries.
// - onLoadChat: a function to load a chat by its ID.
// - onDeleteChat: a function to delete a chat by its ID.
type LLMHistoryListProps = {
  history: LLMHistoryEntry[];
  onLoadChat: (id: string) => void;
  onDeleteChat: (id: string, password: string) => void;
};


///* FUNCTIONAL COMPONENT *///
const MyLLMHistoryList = ({ history, onLoadChat, onDeleteChat }: LLMHistoryListProps) => {
  const { t } = useTranslation();

  return (
    <div className='my-llm-history-list'>
      <h4 className='my-llm-history-list-title'>{t('llm_history')}</h4> 
      <div className='my-llm-history-list-element'>
        {history.map((entry) => (
          <MyLLMHistoryItem
            key={entry.id}
            entry={entry}
            onLoadChat={onLoadChat}
            onDelete={onDeleteChat}
          />
        ))}
      </div>
    </div>
  );
};


///* EXPORT *///
export default MyLLMHistoryList;