import '../styling/MyLLMSideBar.css';
import { useTranslation } from "react-i18next";
import MyLLMHistoryList from '../../molecules/llmpage/MyLLMHistoryList';
import MyLLMSideBarNewChatButton from '../../atoms/llmpage/MyLLMSideBarNewChatButton';

type HistoryEntry = {
  id: string;
  title: string;
  date: string;
};

type MyLLMSideBarProps = {
  isExpanded: boolean;
  onToggle: () => void;
  history: HistoryEntry[];
  onNewChat: (message: string) => void;
  onLoadChat: (id: string) => void;
  onDeleteChat: (id: string) => void;
};

//TODO: Collapse Navbar when selecting a chat or outside of the sidebar additionally

const MyLLMSideBar = ({ isExpanded, onToggle, history, onNewChat, onLoadChat, onDeleteChat }: MyLLMSideBarProps) => {
  const { t } = useTranslation();
  const expandedClass = isExpanded ? 'expanded' : '';

  return (
    <div className={`my-llm-sidebar ${expandedClass}`}>
      <div className={`my-llm-sidebar-content ${expandedClass}`}>
        <h3>{t('llm_controls')}</h3>
      </div>

      <MyLLMSideBarNewChatButton
        isExpanded={isExpanded}
        onNewChat={onNewChat}
      />

      <button className='my-llm-sidebar-toggle' onClick={onToggle}>
        {isExpanded ? '◀' : '▶'}
      </button>

      <MyLLMHistoryList
        history={history}
        onLoadChat={onLoadChat}
        onDeleteChat={onDeleteChat}
      />

    </div>
  )
}

export default MyLLMSideBar;