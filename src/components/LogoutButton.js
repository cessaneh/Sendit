import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const LogoutButton = ({ className, children }) => {
  const history = useHistory();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found in local storage');
        return;
      }

      const response = await axios.post('http://localhost:5000/logout', null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        localStorage.removeItem('token');
        console.log('Logged out successfully');
        history.push('/'); // Redirect to home or login page after logout
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <button onClick={handleLogout} className={className}>
      {children}
    </button>
  );
};

export default LogoutButton;
