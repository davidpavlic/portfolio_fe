import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./styling/MyLLMPage.css";

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
    { id: 1, title: "Discussing AI ethics", date: "2024-03-15" },
    { id: 2, title: "Planning a project", date: "2024-03-14" },
    { id: 3, title: "Recipe brainstorming", date: "2024-03-13" },
    { id: 4, title: "Travel recommendations", date: "2024-03-12" },
    { id: 5, title: "Fitness routine discussion", date: "2024-03-11" },
    { id: 1, title: "Discussing AI ethics", date: "2024-03-15" },
    { id: 2, title: "Planning a project", date: "2024-03-14" },
    { id: 3, title: "Recipe brainstorming", date: "2024-03-13" },
    { id: 4, title: "Travel recommendations", date: "2024-03-12" },
    { id: 5, title: "Fitness routine discussion", date: "2024-03-11" },
    { id: 1, title: "Discussing AI ethics", date: "2024-03-15" },
    { id: 2, title: "Planning a project", date: "2024-03-14" },
    { id: 3, title: "Recipe brainstorming", date: "2024-03-13" },
    { id: 4, title: "Travel recommendations", date: "2024-03-12" },
    { id: 5, title: "Fitness routine discussion", date: "2024-03-11" }
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
      <div className={`myllm-sidebar ${isSidebarExpanded ? 'expanded' : ''}`}>
        <div className="myllm-sidebar-content">
          <h3>LLM CONTROLS</h3>
        </div>
        {isSidebarExpanded ? (
          <button className="myllm-submit-button expanded" onClick={() => setResponse("")}>New Chat</button>
        ) : (
          <button className="myllm-submit-button" onClick={() => setResponse("")} title="New Chat">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
            </svg>
          </button>
        )}
        <button
          className="sidebar-toggle"
          onClick={toggleSidebar}
        >
          {isSidebarExpanded ? '◀' : '▶'}
        </button>
        <div className="history-section">
          <h4 className="myllm-history-title">History</h4>
          <div className="history-list">
            {history.map((entry) => (
              <button
                key={entry.id}
                className="history-item"
                onClick={() => console.log("Load chat", entry.id)}
              >
                <span className="history-title">{entry.title}</span>
                <span className="history-date">{entry.date}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

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