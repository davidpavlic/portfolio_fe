export const fetchFromAPI = async (url: string, options?: RequestInit) => {
    try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error(`Failed to fetch ${url} with status: ${response.status} and message: ${response.statusText}`);
        return response.status !== 204 ? await response.json() : null;
    } catch (error) {
        console.error(`Error fetching from ${url}:`, error);
        throw error;
    }
};