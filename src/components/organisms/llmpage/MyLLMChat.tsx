import React from 'react';
import "../styling/MyLLMChat.css";

interface MyLLMChatProps {
  isMobile: boolean;
  isExpanded: boolean;
  llmStatus: string;
  response: string;
  userInput: string;
  setUserInput: (value: string) => void;
  sendMessage: () => void;
  toggleSidebar: () => void;
}

const MyLLMChat: React.FC<MyLLMChatProps> = ({
  isMobile,
  isExpanded,
  llmStatus,
  response,
  userInput,
  setUserInput,
  sendMessage,
  toggleSidebar
}) => {
  return (
    <div className="my-llm-main-content">
      {isMobile && !isExpanded && (
        <button className="my-llm-mobile-sidebar-toggle" onClick={toggleSidebar}>
          ☰
        </button>
      )}
      
      {llmStatus !== "running" && (
        <div className="my-llm-overlay">
          <p className="my-llm-error">
            {llmStatus === "checking"
              ? "Checking LLM status..."
              : "Error: LLM server is not running"}
          </p>
        </div>
      )}

      <div className="my-llm-box">
        <p className="my-llm-response">{response}</p>
      </div>
      
      <div className="my-llm-input-container">
        <input
          type="text"
          className="my-llm-user-input"
          placeholder="Type a message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          disabled={llmStatus !== "running"}
        />
        <button
          className="my-llm-send-btn"
          onClick={sendMessage}
          disabled={llmStatus !== "running"}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default MyLLMChat;