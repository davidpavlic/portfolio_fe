import { API_BASE_URL } from '../config/backend';
import { fetchFromAPI } from "./MyAPIService";


///* API URLS *///
// Define the base URLs for the different APIs
const API_URLS = {
  EMAIL_URL: `${API_BASE_URL}/main`,
};


///* HELPER FUNCTIONS *///
// Function to create POST request options with JSON body
export const createPostOptions = (body: object): RequestInit => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});


///* PUBLIC API METHODS *///
export const sendEmail = async (caption: string, description: string): Promise<Boolean> => {
  return await fetchFromAPI(API_URLS.EMAIL_URL, createPostOptions({caption, description}));
};
