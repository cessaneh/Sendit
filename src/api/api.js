const API_URL = "http://localhost:5000";

// Example fetch request
export const fetchSomeData = async () => {
    try {
        const response = await fetch(`${API_URL}/some-endpoint`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};
