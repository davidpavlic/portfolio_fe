import "../styling/MyLLMHistoryList.css";

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
          <div key={entry.id} className="my-llm-history-item-container">
            <button
              className="my-llm-history-item"
              onClick={() => onLoadChat(entry.id)}
            >
              <span className="my-llm-history-item-title">{entry.title}</span>
              <span className="my-llm-history-item-date">{entry.date}</span>
            </button>
            
            <button
              className="my-llm-history-delete-btn"
              onClick={(e) => {
                e.stopPropagation();
                onDeleteChat(entry.id);
              }}
              aria-label="Delete chat"
            >
              <svg viewBox="0 0 24 24" width="46" height="46">
                <path stroke="currentColor" stroke-width="4" d="M6 6L18 18M6 18L18 6" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyHistoryList;