import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar1 from '../components/navbar1';
import Profile from '../components/profile';
import Sidebar from '../components/sidebar';
import Welcome from '../components/welcome';
import OrderSummary from '../components/order-summary';
import Footer from '../components/footer';
import {jwtDecode} from 'jwt-decode'; // Fixed import for jwt-decode
import './user-dashboard.css';

const UserDashboard = (props) => {
  const [userName, setUserName] = useState('');
  const [userData, setUserData] = useState({});
  const [parcelData, setParcelData] = useState([]);

  const getUserIdFromToken = (token) => {
    try {
      if (!token || typeof token !== 'string') {
        throw new Error('Invalid token specified: must be a string');
      }

      const decodedToken = jwtDecode(token);

      if (!decodedToken || !decodedToken.sub) {
        throw new Error('Invalid token: sub field missing');
      }

      return decodedToken.sub.userId;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        setUserName(decodedToken.identity.username || 'sendit_user');
      } catch (error) {
        console.error('Error decoding token:', error);
        setUserName('sendit_user');
      }
    } else {
      setUserName('sendit_user');
    }
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      const userId = getUserIdFromToken(token);
      if (!userId) return;

      try {
        const response = await fetch(`https://sendit-backend-qhth.onrender.com/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchParcelData = async () => {
      const token = localStorage.getItem('token');
      const userId = getUserIdFromToken(token);
      if (!userId) return;

      try {
        const response = await fetch(`https://sendit-backend-qhth.onrender.com/users/${userId}/parcels`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch parcel data');
        }
        const data = await response.json();
        setParcelData(data.parcels);
      } catch (error) {
        console.error('Error fetching parcel data:', error);
      }
    };

    fetchParcelData();
  }, [userData]);

  return (
    <div className="user-dashboard-container">
      <Helmet>
        <title>UserDashboard - SendIT App</title>
        <meta property="og:title" content="UserDashboard - SendIT App" />
      </Helmet>
      <div className="user-dashboard-container1">
        <Navbar1 rootClassName="navbar1-root-class-name" />
      </div>
      <div className="user-dashboard-container2">
        <div className="user-dashboard-container3">
          <Profile
            rootClassName="profile-root-class-name"
            text={userData.username}
            text1={userData.email}
          />
          <Sidebar rootClassName="sidebar-root-class-name" />
        </div>
        <div className="user-dashboard-container4">
          <div className="user-dashboard-container5">
            <Welcome welcome={`Welcome ${userData.username}`} />
            <OrderSummary parcelData={parcelData} />
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name1" />
      </div>
    </div>
  );
};

export default UserDashboard;
