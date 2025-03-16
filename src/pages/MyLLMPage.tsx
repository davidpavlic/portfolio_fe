import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./styling/MyLLMPage.css";
import { MyLLMSideBar } from "../components/organisms/llmpage/MyLLMSideBar";

export const MyLLMPage = () => {
  const { t } = useTranslation();
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");
  const [llmStatus, setLlmStatus] = useState("checking");
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);
  const [history, setHistory] = useState([
    { id: 1, title: "Discussing AI ethics", date: "2024-03-15" },
    { id: 2, title: "Planning a project", date: "2024-03-14" },
    { id: 3, title: "Recipe brainstorming", date: "2024-03-13" },
    { id: 4, title: "Travel recommendations", date: "2024-03-12" },
    { id: 5, title: "Fitness routine discussion", date: "2024-03-11" },
    { id: 6, title: "Discussing AI ethics", date: "2024-03-15" },
    { id: 7, title: "Planning a project", date: "2024-03-14" },
    { id: 8, title: "Recipe brainstorming", date: "2024-03-13" },
    { id: 9, title: "Travel recommendations", date: "2024-03-12" },
    { id: 10, title: "Fitness routine discussion", date: "2024-03-11" },
    { id: 11, title: "Discussing AI ethics", date: "2024-03-15" },
    { id: 12, title: "Planning a project", date: "2024-03-14" },
    { id: 13, title: "Recipe brainstorming", date: "2024-03-13" },
    { id: 14, title: "Travel recommendations", date: "2024-03-12" },
    { id: 15, title: "Fitness routine discussion", date: "2024-03-11" },
    { id: 16, title: "Discussing AI ethics", date: "2024-03-15" },
    { id: 17, title: "Planning a project", date: "2024-03-14" },
    { id: 18, title: "Recipe brainstorming", date: "2024-03-13" },
    { id: 19, title: "Travel recommendations", date: "2024-03-12" },
    { id: 20, title: "Fitness routine discussion", date: "2024-03-11" }
  ]);


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
    <div className="myllm-container">
      {/* Sidebar */}
      <MyLLMSideBar
        isExpanded={isSidebarExpanded}
        onToggle={toggleSidebar}
        history={history}
        onNewChat={() => setResponse("")}
      />

      {/* Mobile overlay */}
      {isMobile && isSidebarExpanded && (
        <div className="sidebar-overlay" onClick={toggleSidebar} />
      )}

      {/* Main Content */}
      <div className="myllm-main-content">
        {isMobile && !isSidebarExpanded && (
          <button className="mobile-sidebar-toggle" onClick={toggleSidebar}>
            ☰
          </button>
        )}
        {llmStatus !== "running" && (
          <div className="myllm-overlay">
            <p className="myllm-error">
              {llmStatus === "checking"
                ? "Checking LLM status..."
                : "Error: LLM server is not running"}
            </p>
          </div>
        )}

        <div className="myllm-box">
          <p className="myllm-response">{response}</p>
        </div>
        <div className="myllm-input-container">
          <input
            type="text"
            className="myllm-user-input"
            placeholder="Type a message..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            disabled={llmStatus !== "running"}
          />
          <button
            className="myllm-send-btn"
            onClick={sendMessage}
            disabled={llmStatus !== "running"}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyLLMPage;