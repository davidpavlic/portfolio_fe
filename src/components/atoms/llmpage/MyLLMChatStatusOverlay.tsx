import '../styling/MyLLMChatStatusOverlay.css';


///* TYPE DEFINITIONS *///
// - llmStatus: a string representing the status of the LLM server.
type MyLLMChatStatusOverlayProps = {
    llmStatus: string;
};


///* FUNCTIONAL COMPONENT *///
const MyLLMChatStatusOverlay = ({ llmStatus }: MyLLMChatStatusOverlayProps) => (
    <div className='my-llm-overlay'>
        <p className='my-llm-error'>
            {llmStatus === 'checking'
                ? 'Checking LLM status...'
                : 'Error: LLM server is not running'}
        </p>
    </div>
);


//* EXPORT *///
export default MyLLMChatStatusOverlay;