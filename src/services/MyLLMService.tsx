import { API_BASE_URL } from "../config/backend";


///* SERVICE FUNCTIONS *///
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