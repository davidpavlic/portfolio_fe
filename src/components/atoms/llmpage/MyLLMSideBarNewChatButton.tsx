import '../styling/MyLLMSideBarNewChatButton.css';
import { useTranslation } from "react-i18next";


///* TYPE DEFINITIONS *///
// - isExpanded: boolean to control the button's expanded state.
// - onNewChat: function to handle new chat creation, taking a message string as an argument.
type MyLLMSideBarNewChatButtonProps = {
  isExpanded: boolean;
  onNewChat: (message: string) => void;
}


///* FUNCTIONAL COMPONENT *///
const MyLLMSideBarNewChatButton = ({ isExpanded, onNewChat }: MyLLMSideBarNewChatButtonProps) => {
  const { t } = useTranslation();

  return (
    <button
      className={`my-llm-submit-button ${isExpanded ? "expanded" : ""}`}
      onClick={() => onNewChat("")}
    >
      {isExpanded ? (t('llm_new_chat')) : (
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
        </svg>
      )}
    </button>
  );
};


///* EXPORT *///
export default MyLLMSideBarNewChatButton;