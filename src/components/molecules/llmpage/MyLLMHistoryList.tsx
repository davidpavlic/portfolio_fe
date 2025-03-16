import "../styling/MyLLMHistoryList.css";

type HistoryEntry = {
    id: number;
    title: string;
    date: string;
};

type HistoryListProps = {
    history: HistoryEntry[];
};

export const MyHistoryList = ({history}: HistoryListProps) => {
    return (
        <div className="my-llm-history-section">
          <h4 className="my-llm-history-title">History</h4>
          <div className="my-llm-history-list">
            {history.map((entry) => (
              <button
                key={entry.id}
                className="my-llm-history-item"
                onClick={() => console.log("Load chat", entry.id)} //TODO
              >
                <span className="my-llm-history-item-title">{entry.title}</span>
                <span className="my-llm-history-item-date">{entry.date}</span>
              </button>
            ))}
          </div>
        </div>
    )
}

export default MyHistoryList;