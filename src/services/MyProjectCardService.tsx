import { API_BASE_URL } from "../config/backend";
import { fetchFromAPI } from "./MyAPIService";


///** API URLS *///
// Define the base URL for the project card API
const API_URLS = {
    PROJECT_CARD_URL: `${API_BASE_URL}/projectcard`,
}


///* HELPER FUNCTIONS *///
// Function to create POST request options with JSON body
export const createPostOptions = (body: FormData, password: string): RequestInit => {
    const headers: HeadersInit = {};
    headers['X-Auth-Password'] = password;

    return {
        method: 'POST',
        headers,
        body,
    }
};


///* PUBLIC API METHODS *///
export const fetchProjectCards = async () => {
    return await fetchFromAPI(API_URLS.PROJECT_CARD_URL);
};

export const addProjectCard = async (formData: FormData, password: string): Promise<boolean> => {
    return await fetchFromAPI(API_URLS.PROJECT_CARD_URL, createPostOptions(formData, password));
};

export const deleteProjectCard = async (projectcard_id: string, password: string) => {
    try {
        const headers: HeadersInit = {};
        headers['X-Auth-Password'] = password;

        await fetchFromAPI(`${API_URLS.PROJECT_CARD_URL}/${projectcard_id}`, { method: "DELETE", headers });
        return true;
    } catch (error) {
        return false;
    }
};
