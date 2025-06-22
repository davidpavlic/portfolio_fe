import '../styling/MyLLMChatInput.css';
import { useTranslation } from "react-i18next";
import { useState } from 'react';
import MyPasswordModal from '../../molecules/common/MyPasswordModal';


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
const MyLLMChatInput = ({ userInput, setUserInput, sendMessage, llmStatus }: MyLLMChatInputProps) => {
    const { t } = useTranslation();
    const isDisabled = llmStatus !== 'running';
    const [showPasswordModal, setShowPasswordModal] = useState(false);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !isDisabled) {
            sendMessage();
        }
    };

    // Function to handle form submission authorization
    const authorizeSubmit = () => {
        setShowPasswordModal(true);
    }

    const onAuthorized = (success: boolean, password: string) => {
        setShowPasswordModal(false);
        if (success) {
            handleSubmit(password);
        }
    };

    const handleSubmit = async (password: string) => {
        console.log(password);
        sendMessage();
    }

    return (
        <div>
            {showPasswordModal && (
                <MyPasswordModal
                    closeModal={() => setShowPasswordModal(false)}
                    onAuthorized={onAuthorized}
                />
            )}
            <div className='my-llm-chat-input'>
                <input
                    type='text'
                    className='my-llm-chat-user-input'
                    placeholder={t('llm_type_message')}
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={isDisabled}
                />
                <button
                    className='my-llm-chat-send-button'
                    onClick={authorizeSubmit}
                    disabled={isDisabled}
                >
                    {t('llm_send')}
                </button>
            </div>
        </div>
    );
};

///* EXPORT *///
export default MyLLMChatInput;