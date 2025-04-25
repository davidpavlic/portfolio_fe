import '../styling/MyLLMChatMessages.css'
import ReactMarkdown from 'react-markdown';


///* TYPE DEFINITION *///
// - messages: an array of message objects.
type MyLLMChatMessagesProps = {
    messages: Array<{ fromUser: boolean, content: string }>;
};


///* FUNCTIONAL COMPONENT *///
const MyLLMChatMessages = ({ messages }: MyLLMChatMessagesProps) => (
    <div className='my-llm-chat-messages'>
        <div className='my-llm-chat-messages-area'>
            {messages.map((message, index) => (
                <div
                    key={index}
                    className={`my-llm-chat-messages-bubble ${message.fromUser === true ? 'my-llm-chat-messages-user-message' : 'my-llm-chat-messages-assistant-message'}`}
                >
                    <ReactMarkdown>
                        {message.content}
                    </ReactMarkdown>
                </div>
            ))}
        </div>
    </div>
);


///* EXPORT *///
export default MyLLMChatMessages;