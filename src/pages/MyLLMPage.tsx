import './styling/MyLLMPage.css';
import { useState, useEffect } from 'react';
import MyLLMSideBar from '../components/organisms/llmpage/MyLLMSideBar';
import MyLLMChat from '../components/organisms/llmpage/MyLLMChat';
import { useResizeHandler } from '../hooks/llmpage/useResizeHandler.ts';
import { useOllamaStatus } from '../hooks/llmpage/useOllamaStatus.ts';
import { useChatHistory } from '../hooks/llmpage/useChatHistory.ts';
import { useChatMessage } from '../hooks/llmpage/useChatMessage.ts';


///* FUNCTIONAL COMPONENT *///
export const MyLLMPage = () => {
  const [userInput, setUserInput] = useState('');
  const { isMobile, isSidebarExpanded, toggleSidebar, collapseSidebarIfMobile } = useResizeHandler();
  const { llmStatus } = useOllamaStatus();
  const { history, selectedChatId, setSelectedChatId, loadHistory, handleDeleteChat, loadNewChat } = useChatHistory();
  const {messages, setMessages, loadChatEntries, sendMessage} = useChatMessage(selectedChatId, (newChatId) => {
    setSelectedChatId(newChatId);
    loadHistory();
  });

  ///* HANDLERS *///
  const handleNewChat = async () => {
    await loadNewChat();
    setMessages([]);
    setSelectedChatId(null);
    collapseSidebarIfMobile();
  };

  const handleLoadChat = async (id: string) => {
    await loadChatEntries(id);
    setSelectedChatId(id);
    collapseSidebarIfMobile();
  };

  const handleSendMessage = async () => {
    await sendMessage(userInput, llmStatus);
    await loadHistory();
    setUserInput("");
  };


  ///* USE EFFECTS *///
  useEffect(() => {
    document.body.style.overflow = isMobile && isSidebarExpanded ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMobile, isSidebarExpanded]);


  /// RENDERING ///
  return (
    <div className='my-llm-container'>
      <MyLLMSideBar
        isExpanded={isSidebarExpanded}
        onToggle={toggleSidebar}
        history={history}
        onNewChat={handleNewChat}
        onLoadChat={handleLoadChat}
        onDeleteChat={handleDeleteChat}
      />

      {isMobile && isSidebarExpanded && (
        <div className='my-llm-sidebar-overlay' onClick={toggleSidebar} />
      )}

      <MyLLMChat
        isMobile={isMobile}
        isExpanded={isSidebarExpanded}
        llmStatus={llmStatus}
        messages={messages}
        userInput={userInput}
        setUserInput={setUserInput}
        sendMessage={handleSendMessage}
        toggleSidebar={toggleSidebar}
      />
    </div>
  );
};


///* EXPORT *///
export default MyLLMPage;