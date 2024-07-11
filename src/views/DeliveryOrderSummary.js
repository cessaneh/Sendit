import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import Navbar1 from '../components/navbar1';
import './DeliveryOrderSummary.css';

const DeliveryOrderSummary = () => {
  const [orders, setOrders] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [userId, setUserId] = useState(null); // Replace with the actual user ID

  useEffect(() => {
    const fetchUserId = () => {
      const token = localStorage.getItem('token');
      if (token) {
        const decodedToken = jwtDecode(token);
        setUserId(decodedToken.sub.userId); // Assuming the user ID is stored in the 'userId' field of the token
      } else {
        setErrorMessage('Token not found. Please sign in first.');
      }
    };

    fetchUserId();
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setErrorMessage('Token not found. Please sign in first.');
          return;
        }

        const response = await axios.get(`https://sendit-backend-qhth.onrender.com/users/${userId}/parcels`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setOrders(response.data.parcels);
        } else {
          console.log('Response status:', response.status);
          console.log('Response data:', response.data);
          setErrorMessage('.failed to fetch orders.');
        }
      } catch (error) {
        console.error('An error occurred:', error);
        setErrorMessage('');
      }
    };

    fetchOrders();
  }, [userId]);


  const handleCancelOrder = async (parcelId) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      setErrorMessage('Token not found. Please sign in first.');
      return;
    }

    const response = await axios.post(`https://sendit-backend-qhth.onrender.com/parcels/${parcelId}/cancel`, null, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      // Order canceled successfully, update the orders state
      setOrders(orders.filter((order) => order.id !== parcelId));
    } else {
      setErrorMessage('Failed to cancel order.');
    }
  } catch (error) {
    console.error('An error occurred:', error);
    setErrorMessage('Failed to cancel order.');
  }
};

  const handleChangeDestination = async (parcelId) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      setErrorMessage('Token not found. Please sign in first.');
      return;
    }

    const newDestination = prompt('Enter new destination:');
    if (!newDestination) {
      return;
    }

    console.log('Sending PUT request to:', `https://sendit-backend-qhth.onrender.com/parcels/${parcelId}/destination`);
    console.log('Request data:', { destination: newDestination });

    const response = await axios.put(`https://sendit-backend-qhth.onrender.com/parcels/${parcelId}/destination`, { destination: newDestination }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      // Destination changed successfully, update the orders state
      setOrders(orders.map((order) => (order.id === parcelId ? { ...order, destination: newDestination } : order)));
    } else {
      console.log('Response status:', response.status);
      console.log('Response data:', response.data);
      setErrorMessage('Failed to change destination.');
    }
  } catch (error) {
    console.error('An error occurred:', error);
    setErrorMessage('Failed to change destination.');
  }
};

  return (
    <div>
      <div className="delivery-order-summary-navbar">
        <Navbar1 rootClassName="navbar-root-class-name"></Navbar1>
      </div>
      <div className="delivery-order-summary-container">
        <h2>Delivery Order Summary</h2>
        {errorMessage && <p>{errorMessage}</p>}
        {orders.length > 0 ? (
          <ul>
            {orders
              .sort((a, b) => a.id - b.id) // Sort orders by ID in ascending order
              .map((order) => (
              <li key={order.id} className="order-item">
                <h3>Order #{order.id}</h3>
                  <div className="order-details">
                <p>Pickup Location: {order.pickup_location}</p>
                <p>Destination: {order.destination}</p>
                  </div>
                {/* <p>Pickup Location: {order.pickup_location}</p> 
                <p>Destination: {order.destination}</p><br />
                <p>Description: {order.description}</p><br /> */}
                <p>Weight: {order.weight} kg</p><br />
                <p>Cost: {order.price} Ksh</p><br />
                <p>Status: {order.status}</p>
                <div className="order-actions">
                <button className="cancel-order-btn" onClick={() => handleCancelOrder(order.id)}>Cancel Order</button>
                <button className="change-destination-btn" onClick={() => handleChangeDestination(order.id, prompt('Enter new destination:'))}>Change Destination</button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default DeliveryOrderSummary;