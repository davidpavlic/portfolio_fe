import "../styling/MyLLMSideBar.css";
import MyHistoryList from "../../molecules/llmpage/MyLLMHistoryList";

type HistoryEntry = {
    id: number;
    title: string;
    date: string;
};

type MyLLMSideBarProps = {
    isExpanded: boolean;
    onToggle: () => void;
    history: HistoryEntry[];
    onNewChat: (message: string) => void;
};

export const MyLLMSideBar = ({ isExpanded, onToggle, history, onNewChat}: MyLLMSideBarProps ) => {
    return (
        <div className={`my-llm-sidebar ${isExpanded ? 'expanded' : ''}`}>
        <div className={`my-llm-sidebar-content ${isExpanded ? 'expanded' : ''}`}>
          <h3>LLM CONTROLS</h3>
        </div>
        {isExpanded ? (
          <button className="my-llm-submit-button expanded" onClick={() => onNewChat("")}>New Chat</button>
        ) : (
          <button className="my-llm-submit-button" onClick={() => onNewChat("")} title="New Chat">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
            </svg>
          </button>
        )}
        <button
          className="my-llm-sidebar-toggle"
          onClick={onToggle}
        >
          {isExpanded ? '◀' : '▶'}
        </button>
        
        <MyHistoryList
            history={history}
        />

      </div>
    )
}

export default MyLLMSideBar;