import "../styling/MyLLMHistoryList.css";
import MyLLMHistoryItem from "../../atoms/llmpage/MyLLMHistoryItem";

type HistoryEntry = {
  id: string;
  title: string;
  date: string;
};

type HistoryListProps = {
  history: HistoryEntry[];
  onLoadChat: (id: string) => void;
  onDeleteChat: (id: string) => void;
};

export const MyHistoryList = ({ history, onLoadChat, onDeleteChat }: HistoryListProps) => {
  return (
    <div className="my-llm-history-section">
      <h4 className="my-llm-history-title">History</h4>
      <div className="my-llm-history-list">
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
  )
}

export default MyHistoryList;