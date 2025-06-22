import { API_BASE_URL } from '../config/backend';
import { fetchFromAPI } from "./MyAPIService";


///* API URLS *///
// Define the base URLs for the different APIs
const API_URLS = {
  AI_URL: 'http://localhost:11434/api/chat',
  CHAT_USER_URL: `${API_BASE_URL}/llmchatuser`,
  CHAT_ENTRY_URL: `${API_BASE_URL}/llmchatentry`,
};


///* HELPER FUNCTIONS *///
// Function to create POST request options with JSON body
export const createPostOptions = (body: object): RequestInit => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

export const createPostOptionsPassword = (body: object, password: string): RequestInit => {
  const headers: HeadersInit = {};
  headers['X-Auth-Password'] = password;
  headers['Content-Type'] = 'application/json';
  return {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  }
};


///* PUBLIC API METHODS *///
export const fetchAIResponse = async (prompt: string) => {
  const data = await fetchFromAPI(API_URLS.AI_URL, createPostOptions({ model: 'llama2:latest', messages: [{ role: 'user', content: prompt }], stream: false }));
  return data.message?.content ? data : 'No response from AI';
};

export const fetchLLMChatsByUser = async () => {
  return await fetchFromAPI(API_URLS.CHAT_USER_URL);
};

export const createChatUser = async (chatTitle: string, password: string) => {
  return await fetchFromAPI(API_URLS.CHAT_USER_URL, createPostOptionsPassword({ title: chatTitle }, password));
};

export const deleteLLMChat = async (llm_chat_id: string, password: string) => {
  try {
    const headers: HeadersInit = {};
    headers['X-Auth-Password'] = password;

    await fetchFromAPI(`${API_URLS.CHAT_USER_URL}/${llm_chat_id}`, { method: 'DELETE', headers });
    return true;
  } catch (error) {
    return false;
  }
};

export const fetchLLMEntriesByChat = async (id: string) => {
  return await fetchFromAPI(`${API_URLS.CHAT_USER_URL}/${id}`);
};

export const createChatEntry = async (llmChatUserId: string, text: string, fromUser: boolean, entryOrder: number, password: string) => {
  return await fetchFromAPI(API_URLS.CHAT_ENTRY_URL, createPostOptionsPassword({ llmChatUserId, text, fromUser, entryOrder }, password));
};