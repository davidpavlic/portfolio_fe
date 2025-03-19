import React from 'react';
import ReactMarkdown from 'react-markdown';
import "../styling/MyLLMChat.css";

interface MyLLMChatProps {
    isMobile: boolean;
    isExpanded: boolean;
    llmStatus: string;
    messages: Array<{ isUser: boolean, content: string }>;
    userInput: string;
    setUserInput: (value: string) => void;
    sendMessage: () => void;
    toggleSidebar: () => void;
}

const MyLLMChat: React.FC<MyLLMChatProps> = ({
    isMobile,
    isExpanded,
    llmStatus,
    messages,
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
                <div className="my-llm-chat-messages">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`message-bubble ${message.isUser === true ? 'user-message' : 'assistant-message'}`}
                        >
                            <ReactMarkdown>
                                {message.content}
                            </ReactMarkdown>
                        </div>
                    ))}
                </div>
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