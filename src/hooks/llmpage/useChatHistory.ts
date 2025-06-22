import { useState, useEffect } from "react";
import { fetchLLMChatsByUser, deleteLLMChat } from "../../services/MyLLMService";


///* TYPE DEFINTIONS *///
// - id: identifier of the chat
// - title: title of the chat
// - date: date of the last update
type ChatHistoryItem = {
    id: string;
    title: string;
    date: string;
}


///* CUSTOM HOOK *///
// This hook manages the chat history for the LLM page.
export const useChatHistory = () => {
    const [history, setHistory] = useState<ChatHistoryItem[]>([]);
    const [selectedChatId, setSelectedChatId] = useState<string | null>(null);

    /**
    * Function to load the chat history from the server
    * It fetches the list of chats and transforms the data before storing it in state.
    */
    const loadHistory = async () => {
        try {
            const chats = await fetchLLMChatsByUser();
            const transformedHistory = chats.map((chat: { id: string; title: string; updatedAt: string }) => ({
                id: chat.id,
                title: chat.title,
                date: new Date(chat.updatedAt).toISOString().split('T')[0]
            }));
            setHistory(transformedHistory);
        } catch (error) {
            console.error("Error loading chat history:", error);
            setHistory([]);
        }
    };

     /**
    * Function to delete a chat by its ID
    * After deletion, it updates the chat history and clears selected chat if necessary
    * 
    * @param chatId - ID of the chat to delete
    */
    const handleDeleteChat = async (chatId: string, password: string) => {
        const success = await deleteLLMChat(chatId, password);
        if (success) {
            setHistory(prev => prev.filter(entry => entry.id !== chatId));
            if (selectedChatId === chatId) {
                setSelectedChatId(null);
            }
        }
    };

    const loadNewChat = () => {
        setSelectedChatId(null);
    };

    useEffect(() => {
        loadHistory();
    }, []);

    return { history, selectedChatId, setSelectedChatId, loadHistory, handleDeleteChat, loadNewChat };
};