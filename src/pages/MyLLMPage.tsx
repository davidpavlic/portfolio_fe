import { useState, useEffect, useRef } from "react";
//import { useTranslation } from "react-i18next";
import { fetchLLMChatsByUser } from "../services/MyLLMService.tsx"; // Import your service function
import "./styling/MyLLMPage.css";
import { MyLLMSideBar } from "../components/organisms/llmpage/MyLLMSideBar";
import MyLLMChat from "../components/organisms/llmpage/MyLLMChat";

interface LLMChatHistory {
  llm_chat_id: number;
  title: string;
  updatedAt: string;
  llm_chat_entries: LLMChatEntry[];
}

interface LLMChatEntry {
  llm_entry_id: number;
  text: string;
  isUser: boolean;
  entry_order: number;
}

interface TransformedHistoryItem {
  id: number;
  title: string;
  date: string;
}

export const MyLLMPage = () => {
  //const { t } = useTranslation();
  const [messages, setMessages] = useState<Array<{isUser: 'true' | 'false', content: string}>>([]);
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");
  const [llmStatus, setLlmStatus] = useState("checking");
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);
  const [history, setHistory] = useState<Array<{id: number, title: string, date: string}>>([]);


  const [isMobile, setIsMobile] = useState(window.innerWidth <= 720);
  const sidebarExpandedRef = useRef(isSidebarExpanded);
  sidebarExpandedRef.current = isSidebarExpanded;


  useEffect(() => {
    const checkOllamaServer = async () => {
      try {
        const response = await fetch("http://localhost:11434/api/tags");
        if (response.ok) {
          setLlmStatus("running");
        } else {
          setLlmStatus("stopped");
        }
      } catch (error) {
        setLlmStatus("stopped");
      }
    };

    checkOllamaServer();

    const loadHistory = async () => {
      try {
        const chats: LLMChatHistory[] = await fetchLLMChatsByUser();
        const transformedHistory: TransformedHistoryItem[] = chats.map((chat: LLMChatHistory) => ({
          id: chat.llm_chat_id,
          title: chat.title,
          date: new Date(chat.updatedAt).toISOString().split('T')[0]
        }));
        setHistory(transformedHistory);
      } catch (error) {
        console.error("Error loading chat history:", error);
        setHistory([]);
      }
    };
  
    loadHistory();

    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 720;
      setIsMobile(newIsMobile);

      // Close sidebar when switching to mobile
      if (newIsMobile && sidebarExpandedRef.current) {
        setSidebarExpanded(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);


  }, []);


  useEffect(() => {
    if (isMobile && isSidebarExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobile, isSidebarExpanded]);


  const sendMessage = async () => {
    if (!userInput.trim() || llmStatus !== "running") return;

    setMessages(prev => [...prev, { isUser: 'true', content: userInput.trim() }]);

    const payload = {
      model: "llama2:latest",
      messages: [{ role: "user", content: userInput }],
      stream: true,
    };

    try {
      const res = await fetch("http://localhost:11434/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      if (!res.body) throw new Error("No response body");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      try {

        setMessages(prev => [...prev, { isUser: 'false', content: '' }]);

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");

          // Save incomplete line for next chunk
          buffer = lines.pop() || "";

          for (const line of lines) {
            if (!line.trim()) continue;
            try {
              const data = JSON.parse(line);
              if (data.message?.content) {
                // Use functional update to ensure latest state
                setResponse((prev) => prev + data.message.content);
                if (data.message?.content) {
                  setMessages(prev => {
                    const newMessages = [...prev];
                    const lastMessage = newMessages[newMessages.length - 1];
                    newMessages[newMessages.length - 1] = {
                      ...lastMessage,
                      content: lastMessage.content + data.message.content
                    };
                    return newMessages;
                  });
                }
              }
            } catch (error) {
              console.error("Error parsing JSON chunk:", error);
            }
          }
        }

        // Process any remaining content after stream ends
        if (buffer.trim()) {
          try {
            const data = JSON.parse(buffer);
            if (data.message?.content) {
              setResponse((prev) => prev + data.message.content);
            }
          } catch (error) {
            console.error("Error parsing final chunk:", error);
          }
        }
      } finally {
        reader.releaseLock();
      }
    } catch (error) {
      console.error("Error fetching LLM response:", error);
      setResponse((prev) => prev + "\nError communicating with LLM.");
    }

    setUserInput("");
  };

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="my-llm-container">
      <MyLLMSideBar
        isExpanded={isSidebarExpanded}
        onToggle={toggleSidebar}
        history={history}
        onNewChat={() => setResponse("")}
      />

      {isMobile && isSidebarExpanded && (
        <div className="my-llm-sidebar-overlay" onClick={toggleSidebar} />
      )}

      <MyLLMChat
        isMobile={isMobile}
        isExpanded={isSidebarExpanded}
        llmStatus={llmStatus}
        messages={messages}
        userInput={userInput}
        setUserInput={setUserInput}
        sendMessage={sendMessage}
        toggleSidebar={toggleSidebar}
      />
    </div>
  );
};

export default MyLLMPage;