import '../styling/MyLLMChatInput.css';


///* TYPE DEFINITIONS *///
// - userInput: a string representing the user's input.
// - setUserInput: a function to update the user input.
// - sendMessage: a function to send the message.
// - llmStatus: a string representing the status of the LLM.
type MyLLMChatInputProps = {
    userInput: string;
    setUserInput: (value: string) => void;
    sendMessage: () => void;
    llmStatus: string;
};


///* FUNCTIONAL COMPONENT *///
const MyLLMChatInput = ({userInput, setUserInput, sendMessage, llmStatus}: MyLLMChatInputProps) => (
    <div className='my-llm-chat-input'>
        <input
            type='text'
            className='my-llm-chat-user-input'
            placeholder='Type a message...'
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            disabled={llmStatus !== 'running'}
        />
        <button
            className='my-llm-chat-send-button'
            onClick={sendMessage}
            disabled={llmStatus !== 'running'}
        >
            Send
        </button>
    </div>
);


///* EXPORT *///
export default MyLLMChatInput;