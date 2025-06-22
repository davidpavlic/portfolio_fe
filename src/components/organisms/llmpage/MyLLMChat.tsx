import '../styling/MyLLMChat.css';
import React from 'react';
import MyLLMChatStatusOverlay from '../../atoms/llmpage/MyLLMChatStatusOverlay';
import MyLLMChatMessages from '../../atoms/llmpage/MyLLMChatMessages';
import MyLLMChatInput from '../../atoms/llmpage/MyLLMChatInput';


//* TYPE DEFINITIONS *///
// - isMobile: boolean indicating if the view is mobile.
// - isExpanded: boolean indicating if the chat is expanded.
// - llmStatus: string representing the status of the LLM.
// - messages: array of message objects with fromUser and content properties.
// - userInput: string representing the user's input.
// - setUserInput: function to set the user input.
// - sendMessage: function to send the message.
// - toggleSidebar: function to toggle the sidebar.
type MyLLMChatProps = {
    isMobile: boolean;
    isExpanded: boolean;
    llmStatus: string;
    messages: Array<{ fromUser: boolean, content: string }>;
    userInput: string;
    setUserInput: (value: string) => void;
    sendMessage: (password: string) => void;
    toggleSidebar: () => void;
}


//* FUNCTIONAL COMPONENT *///
const MyLLMChat: React.FC<MyLLMChatProps> = ({isMobile, isExpanded, llmStatus, messages, userInput, setUserInput, sendMessage, toggleSidebar}: MyLLMChatProps) => (
    <div className='my-llm-chat-content'>

        {isMobile && !isExpanded && (
            <button className='my-llm-chat-mobile-sidebar-toggle' onClick={toggleSidebar}>
                ☰
            </button>
        )}

        {llmStatus !== 'running' ? <MyLLMChatStatusOverlay llmStatus={llmStatus} /> : null}

        <MyLLMChatMessages messages={messages} />

        <MyLLMChatInput
            userInput={userInput}
            setUserInput={setUserInput}
            sendMessage={sendMessage}
            llmStatus={llmStatus}
        />
    </div>
);


//* EXPORT *///
export default MyLLMChat;