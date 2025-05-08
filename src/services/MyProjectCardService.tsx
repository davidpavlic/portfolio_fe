import { API_BASE_URL } from "../config/backend";
import { fetchFromAPI } from "./MyAPIService";


///** API URLS *///
// Define the base URL for the project card API
const API_URLS = {
    PROJECT_CARD_URL: `${API_BASE_URL}/projectcard`,
}


///* HELPER FUNCTIONS *///
// Function to create POST request options with JSON body
export const createPostOptions = (body: FormData): RequestInit => ({
    method: 'POST',
    body,
});


///* PUBLIC API METHODS *///
export const fetchProjectCards = async () => {
    return await fetchFromAPI(API_URLS.PROJECT_CARD_URL);
};

export const addProjectCard = async (formData: FormData): Promise<boolean> => {
    return await fetchFromAPI(API_URLS.PROJECT_CARD_URL, createPostOptions(formData));
};

export const deleteProjectCard = async (projectcard_id: string) => {
    try {
        await fetchFromAPI(`${API_URLS.PROJECT_CARD_URL}/${projectcard_id}`, { method: "DELETE" });
        return true;
    } catch (error) {
        return false;
    }
};
