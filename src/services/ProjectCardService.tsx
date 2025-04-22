// src/services/projectCardService.ts

import { API_BASE_URL } from "../config/backend";


///* SERVICE FUNCTIONS *///
// Fetches all project cards from the backend.
export const fetchProjectCards = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/projectcard`);
        if (!response.ok) throw new Error("Failed to fetch project cards");
        return await response.json();
    } catch (error) {
        console.error("Error fetching project cards:", error);
        return [];
    }
};

// Adds a project card
export const addProjectCard = async (formData: FormData): Promise<boolean> => {
    try {
        const response = await fetch(`${API_BASE_URL}/projectcard`, {
            method: "POST",
            // Do NOT set Content-Type header manually - the browser will set it automatically
            // with the correct boundary parameter for multipart/form-data
            body: formData,
        });

        if (!response.ok) throw new Error("Failed to add project card");
        return true;
    } catch (error) {
        console.error("Error adding project card:", error);
        return false;
    }
};

// Deletes a project card from the backend based on its id.
export const deleteProjectCard = async (projectcard_id: string) => {
    try {
        console.log(projectcard_id);
        const response = await fetch(`${API_BASE_URL}/projectcard/${projectcard_id}`, { method: "DELETE" });
        if (!response.ok) throw new Error("Failed to delete project card");
        return true;
    } catch (error) {
        console.error("Error deleting project card:", error);
        return false;
    }
};
