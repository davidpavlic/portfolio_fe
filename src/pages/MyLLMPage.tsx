import { useState, useEffect, useRef } from "react";
//import { useTranslation } from "react-i18next";
import { fetchAIResponse, fetchLLMChatsByUser, fetchLLMEntriesByChat, createChatEntry, deleteLLMChat, createChatUser } from "../services/MyLLMService.tsx"; // Import your service function
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

interface Message {
  isUser: boolean;
  content: string;
}

export const MyLLMPage = () => {
  //const { t } = useTranslation();
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");
  const [llmStatus, setLlmStatus] = useState("checking");
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);
  const [history, setHistory] = useState<Array<{ id: number, title: string, date: string }>>([]);


  const [isMobile, setIsMobile] = useState(window.innerWidth <= 720);
  const sidebarExpandedRef = useRef(isSidebarExpanded);
  sidebarExpandedRef.current = isSidebarExpanded;
  const [selectedChatId, setSelectedChatId] = useState<number | null>(null);

  const handleDeleteChat = async (chatId: number) => {
    const success = await deleteLLMChat(chatId);
    if (success) {
      setHistory(prev => prev.filter(entry => entry.id !== chatId));
      if (selectedChatId === chatId) {
        setMessages([]);
        setSelectedChatId(null);
      }
    }
  };

  // Add this function to load chat entries
  const loadChatEntries = async (id: number) => {
    try {
      // First get the full chat data
      const chatData: LLMChatHistory = await fetchLLMEntriesByChat(id);

      // Extract the entries array from the chat object
      const entries = chatData.llm_chat_entries || [];

      // Now we can safely sort
      const sortedEntries = entries.sort((a, b) => a.entry_order - b.entry_order);

      const transformedMessages = sortedEntries.map(entry => ({
        isUser: entry.isUser,
        content: entry.text
      }));

      setMessages(transformedMessages);
      setSelectedChatId(id);
    } catch (error) {
      console.error("Error loading chat entries:", error);
    }
  };

  // Update onNewChat handler
  const handleNewChat = () => {
    setMessages([]);
    setSelectedChatId(null);
    setResponse("");
  };

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

    try {
      // Create temporary user message
      const userMessage: Message = {
        isUser: true,
        content: userInput.trim()
      };

      // Optimistically add user message
      setMessages(prev => [...prev, userMessage]);

      // Calculate entry order for user message
      const entryOrderUser = messages.length + 1;

      // Get AI response with streaming
      let aiPrompt = userInput.trim();
      if(messages.length > 0){
        const historyString = messages
          .map(msg => `${msg.isUser ? "User" : "AI"}: ${msg.content}`)
          .join("\n");

        aiPrompt = "Chat history (for context only):\n"
          + historyString
          + "\nNew message:\n"
          + userInput.trim()
      }

      console.log(aiPrompt);
      const aiContent = await fetchStreamingAIResponse(aiPrompt);

      // Calculate entry order for AI message
      const entryOrderAI = entryOrderUser + 1;

      let chatId = selectedChatId;

      if (!selectedChatId) {
        const payload = {
          model: "llama2:latest",
          messages: [{ role: "user", content: "Create a short fitting title for a Chatprompt"
            + "Do not make an intro text, just print the generated title, ready to fit into the database"
            + "Do not give multiple recommendations, just one"
            + "Keep it at around 3 to 5 words"
            + "This is the prompt:"
            + "\nUserinput: " + userInput + "\nResponse: " + aiContent}],
          stream: false,
        };

        const titleResponse = await fetch("http://localhost:11434/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!titleResponse.ok) throw new Error(`HTTP error! status: ${titleResponse.status}`);
        if (!titleResponse.body) throw new Error("No response body");

        const titleData = await titleResponse.json();
        let titleString = titleData.message?.content || "New Chat";

        if(titleString.indexOf(":") != -1){
          titleString = titleString.slice(titleString.indexOf(":") + 1);
        }
        titleString.replace(/["']/g, '');

        let chatUser = await createChatUser(titleString);
        chatId = chatUser.llm_chat_id;
        setSelectedChatId(chatUser.llm_chat_id);
      }
      if (!chatId) return;

      // Save user message to backend
      await createChatEntry(
        chatId,
        userInput.trim(),
        true,
        entryOrderUser
      )

      // Save AI message to backend
      await createChatEntry(
        chatId,
        aiContent,
        false,
        entryOrderAI
      );

      loadHistory();
    } catch (error) {
      console.error("Error processing message:", error);
      // Remove user message if error occurs
      setMessages(prev => prev.slice(0, -1));
    }

    setUserInput("");
  };

  // Modified streaming function that returns complete content
  const fetchStreamingAIResponse = async (prompt: string): Promise<string> => {
    return new Promise(async (resolve, reject) => {
      try {
        const payload = {
          model: "llama2:latest",
          messages: [{ role: "user", content: prompt }],
          stream: true,
        };

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
        let aiContent = "";
        let aiMessageId = -1; // Track the position of the AI message

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";

          for (const line of lines) {
            if (!line.trim()) continue;
            try {
              const data = JSON.parse(line);
              if (data.message?.content) {
                aiContent += data.message.content;

                setMessages(prev => {
                  // Create new AI message if needed
                  if (prev[prev.length - 1]?.isUser) {
                    aiMessageId = prev.length;
                    return [...prev, {
                      isUser: false,
                      content: data.message.content
                    }];
                  }

                  // Update existing AI message
                  return prev.map((msg, index) =>
                    index === aiMessageId
                      ? { ...msg, content: msg.content + data.message.content }
                      : msg
                  );
                });
              }
            } catch (error) {
              console.error("Error parsing JSON chunk:", error);
            }
          }
        }

        // Process any remaining buffer
        if (buffer.trim()) {
          try {
            const data = JSON.parse(buffer);
            if (data.message?.content) {
              aiContent += data.message.content;
            }
          } catch (error) {
            console.error("Error parsing final chunk:", error);
          }
        }

        resolve(aiContent);
      } catch (error) {
        reject(error);
      }
    });
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
        onNewChat={handleNewChat}
        onLoadChat={loadChatEntries}
        onDeleteChat={handleDeleteChat}
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