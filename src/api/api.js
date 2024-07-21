const API_URL = "http://localhost:5000";

// Utility function to handle API requests
const apiRequest = async (endpoint, method = 'GET', body = null, token = null) => {
    try {
        const response = await fetch(`${API_URL}/${endpoint}`, {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
            },
            body: body ? JSON.stringify(body) : null,
        });

        if (!response.ok) {
            const errorData = await response.json();
            const errorMessage = errorData.message || 'Network response was not ok';
            console.error(`Error ${response.status}: ${errorMessage}`);
            throw new Error(errorMessage);
        }

        return await response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
};

// Authentication
export const signup = async (userData) => {
    return await apiRequest('signup', 'POST', userData);
};

export const login = async (credentials) => {
    const response = await apiRequest('login', 'POST', credentials);
    if (response.token) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('refresh_token', response.refresh_token);
    }
    return response;
};

export const logout = async () => {
    const token = localStorage.getItem('token');
    await apiRequest('logout', 'POST', null, token);
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
};

// Users
export const getUsers = async () => {
    return await apiRequest('users');
};

export const getUserById = async (id) => {
    return await apiRequest(`users/${id}`);
};

export const createUser = async (userData) => {
    return await apiRequest('users', 'POST', userData);
};

export const updateUser = async (id, userData) => {
    return await apiRequest(`users/${id}`, 'PATCH', userData);
};

export const deleteUser = async (id) => {
    return await apiRequest(`users/${id}`, 'DELETE');
};

// Orders
export const getOrders = async () => {
    return await apiRequest('orders');
};

export const getOrderById = async (id) => {
    return await apiRequest(`orders/${id}`);
};

export const createOrder = async (orderData) => {
    return await apiRequest('orders', 'POST', orderData);
};

export const updateOrder = async (id, orderData) => {
    return await apiRequest(`orders/${id}`, 'PATCH', orderData);
};

export const deleteOrder = async (id) => {
    return await apiRequest(`orders/${id}`, 'DELETE');
};

// Parcels
export const getParcels = async () => {
    return await apiRequest('parcels');
};

export const getParcelById = async (id) => {
    return await apiRequest(`parcels/${id}`);
};

export const createParcel = async (parcelData) => {
    return await apiRequest('parcels', 'POST', parcelData);
};

export const updateParcel = async (id, parcelData) => {
    return await apiRequest(`parcels/${id}`, 'PATCH', parcelData);
};

export const deleteParcel = async (id) => {
    return await apiRequest(`parcels/${id}`, 'DELETE');
};

// Feedbacks
export const getFeedbacks = async () => {
    return await apiRequest('feedbacks');
};

export const getFeedbackById = async (id) => {
    return await apiRequest(`feedbacks/${id}`);
};

export const createFeedback = async (feedbackData) => {
    return await apiRequest('feedbacks', 'POST', feedbackData);
};

export const updateFeedback = async (id, feedbackData) => {
    return await apiRequest(`feedbacks/${id}`, 'PATCH', feedbackData);
};

export const deleteFeedback = async (id) => {
    return await apiRequest(`feedbacks/${id}`, 'DELETE');
};

// Profiles
export const getProfiles = async () => {
    return await apiRequest('profiles');
};

export const getProfileById = async (id) => {
    return await apiRequest(`profiles/${id}`);
};

export const createProfile = async (profileData) => {
    return await apiRequest('profiles', 'POST', profileData);
};

export const updateProfile = async (id, profileData) => {
    return await apiRequest(`profiles/${id}`, 'PATCH', profileData);
};

export const deleteProfile = async (id) => {
    return await apiRequest(`profiles/${id}`, 'DELETE');
};
