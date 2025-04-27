import { useState } from "react";
import { fetchLLMEntriesByChat, createChatEntry, createChatUser, createPostOptions } from "../../services/MyLLMService";
import { fetchAIResponse } from "../../services/MyLLMService";


///* TYPE DEFINITIONS *///
// - fromUser: indicates if the message is from the user or AI.
// - content: the text content of the message.
type Message = {
    fromUser: boolean;
    content: string;
}
// - id: unique identifier for an entry in the chat history.
// - text: the text content of the entry.
// - fromUser: indicates if the entry is from the user or AI.
// - entryOrder: the order of the entry in the chat history.
type LLMChatEntry = {
    id: string;
    text: string;
    fromUser: boolean;
    entryOrder: number;
}
// - id: identifier of the chat
// - title: title of the chat
// - updatedAt: date of the last update of the chat
// - llmChatEntries: array of chat entries associated with the chat.
type LLMChatHistory = {
    id: string;
    title: string;
    updatedAt: string;
    llmChatEntries: LLMChatEntry[];
}


///* HELPER FUNCTION *///
// This function generates a title for the chat based on user input and AI response.
const generateChatTitle = async (userInput: string, aiResponse: string): Promise<string> => {
    const title = await fetchAIResponse(`Create a short fitting title for a Chatprompt
                                        Do not make an intro text, just print the generated title, ready to fit into the database
                                        Do not give multiple recommendations, just one
                                        Keep it at around 3 to 5 words
                                        This is the prompt:
                                        \nUserinput: ${userInput}\nResponse: ${aiResponse}`);
    return title.message.content.split(":")?.pop()?.trim().replace(/["']/g, '') || "New Chat"; // Takes the last part of the title after the colon and remove quotes
};


///* CUSTOM HOOK *///
// This hook manages the chat messages for the LLM page.
export const useChatMessage = (selectedChatId: string | null, onNewChatCreated?: (chatId: string) => void) => {
    const [messages, setMessages] = useState<Message[]>([]);

    // This function loads chat entries from the backend based on the selected chat ID.
    const loadChatEntries = async (id: string) => {
        try {
            const chatData: LLMChatHistory = await fetchLLMEntriesByChat(id);           // Fetch chat history from the backend
            setMessages((chatData.llmChatEntries || [])
                .sort((a, b) => a.entryOrder - b.entryOrder)                            // Sort chat entries by entry order
                .map(entry => ({ fromUser: entry.fromUser, content: entry.text }))      // Map chat entries to the message format
            );
        } catch (error) {
            console.error("Error loading chat entries:", error);
        }
    };

    // This function sends a message to the AI and handles the response.
    const sendMessage = async (userInput: string, llmStatus: string) => {
        if (!userInput.trim() || llmStatus !== "running") return;                           // Check if the input is empty or if the LLM is not running

        try {
            setMessages(prev => [...prev, { fromUser: true, content: userInput.trim() }]);  // Add the user message to the local chat history
            const aiContent = await fetchStreamingAIResponse(userInput.trim());             // Fetch the AI response in a streaming manner
            await saveMessagesToBackend(userInput.trim(), aiContent);                       // Save the messages to the backend
        } catch (error) {
            console.error("Error processing message:", error);
            setMessages(prev => prev.slice(0, -1));
        }
    };

    // Helperfunction for sendMessage: fetches a streaming AI response based on the user prompt.
    const fetchStreamingAIResponse = async (prompt: string): Promise<string> => {
        const payload = {
            model: "llama2:latest",
            messages: [{ role: "user", content: prompt }],
            stream: true,
        };

        try {
            const res = await fetch("http://localhost:11434/api/chat", createPostOptions(payload));
            if (!res.ok || !res.body) throw new Error(`HTTP error! status: ${res.status}`);

            const reader = res.body.getReader();                                                        // Create a reader to process the streamed response body
            const decoder = new TextDecoder();                                                          // Used to decode the binary stream into text
            let buffer = "";                                                                            // Temporary buffer to hold partial data
            let aiContent = "";                                                                         // Accumulated AI content from the stream
            let aiMessageId = -1;                                                                       // Identifier for the AI message in the conversation

            const processLine = (line: string) => {                                                     // Function to process each line of the streamed response  
                try {
                    const { message } = JSON.parse(line);                                               // Parse the JSON line to extract the message
                    if (message?.content) {                                                             // Check if the message content exists
                        aiContent += message.content;                                                   // Append the content to the accumulated AI content
                        setMessages(prev => prev[prev.length - 1]?.fromUser                             // Check if the last message is from the user
                            ? [...prev, { fromUser: false, content: (aiMessageId = prev.length, message.content) }] // Add a new AI message to the chat history
                            : prev.map((msg, i) => i === aiMessageId ? { ...msg, content: msg.content + message.content } : msg)); // Update the last AI message with the new content
                    }
                } catch (err) {
                    console.error("Error parsing JSON chunk:", err);
                }
            };

            while (true) {
                const { done, value } = await reader.read();                                            // Read the next chunk of data from the stream
                if (done) break;                                                                        // Break the loop if the stream is done

                buffer += decoder.decode(value, { stream: true });                                      // Decode the chunk and append it to the buffer
                const lines = buffer.split("\n");                                                       // Split the buffer into lines
                buffer = lines.pop() || "";                                                             // Keep the last line in the buffer for the next iteration
                lines.filter(l => l.trim()).forEach(processLine);                                       // Process each line that is not empty
            }

            if (buffer.trim()) processLine(buffer);                                                     // Process any remaining data in the buffer
            return aiContent;
        } catch (error) {
            console.error("Error fetching AI response:", error);
            throw error;                                                                              
        }
    };


    // Helperfunction for sendMessage: creates a new chat user and saves the messages to the backend.
    const saveMessagesToBackend = async (userInput: string, aiContent: string) => {
        const chatId = selectedChatId ?? (await createChatUser(await generateChatTitle(userInput, aiContent))).id;  // Create a new chat user if no chat is selected
        if (!selectedChatId) onNewChatCreated?.(chatId);                                                            // Call the callback function if a new chat is created

        await createChatEntry(chatId, userInput, true, messages.length + 1);                                        // Create a new chat entry for the user message
        await createChatEntry(chatId, aiContent, false, messages.length + 2);                                       // Create a new chat entry for the AI response
    };

    return { messages, setMessages, loadChatEntries, sendMessage };
};