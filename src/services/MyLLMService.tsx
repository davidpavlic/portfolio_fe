import { API_BASE_URL } from "../config/backend";


///* SERVICE FUNCTIONS *///
export const fetchAIResponse = async (prompt: string) => {
    try {
      const response = await fetch("http://localhost:11434/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "llama2:latest",
          messages: [{ role: "user", content: prompt }],
          stream: false,
        }),
      });
  
      if (!response.ok) throw new Error("AI response failed");
      const data = await response.json();
      return data.message?.content || "No response from AI";
    } catch (error) {
      console.error("Error fetching AI response:", error);
      return "Error getting AI response";
    }
  };

export const fetchLLMChatsByUser = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/llmchatuser`);
        if (!response.ok) throw new Error("Failed to fetch user chats");
        return await response.json();
    } catch (error) {
        console.error("Error fetching user chats", error);
        return [];
    }
};

export const fetchLLMEntriesByChat = async (id: string) => {
    try {
        const response = await fetch(`${API_BASE_URL}/llmchatuser/${id}`);
        if (!response.ok) throw new Error("Failed to fetch user chats");
        return await response.json();
    } catch (error) {
        console.error("Error fetching user chats", error);
        return [];
    }
};

export const createChatUser = async (chatTitle: string) => {
    try{
        const response = await fetch(`${API_BASE_URL}/llmchatuser`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: chatTitle
            }),
          });
          if (!response.ok) throw new Error("Failed to create chat user");
          return await response.json();
    }catch (error) {
      console.error("Error creating chat user:", error);
      throw error;
    }
}

export const createChatEntry = async (llmChatUserId: string, text: string, fromUser: boolean, entryOrder: number) => {
    try {
      console.log(llmChatUserId, text, fromUser, entryOrder);
      const response = await fetch(`${API_BASE_URL}/llmchatentry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          llmChatUserId,
          text,
          fromUser,
          entryOrder
        }),
      });
      if (!response.ok) throw new Error("Failed to create chat entry");
      return await response.json();
    } catch (error) {
      console.error("Error creating chat entry:", error);
      throw error;
    }
  };

export const deleteLLMChat = async (llm_chat_id: string) => {
    try {
        const response = await fetch(`${API_BASE_URL}/llmchatuser/${llm_chat_id}`, { method: "DELETE" });
        if (!response.ok) throw new Error("Failed to delete llm chat");
        return true;
    } catch (error) {
        console.error("Error deleting llm chat:", error);
        return false;
    }
};
