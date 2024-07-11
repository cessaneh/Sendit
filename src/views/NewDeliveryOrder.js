import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import Navbar1 from '../components/navbar1';
import Footer from '../components/footer';
import './NewDeliveryOrder.css';


const getUserId = () => {
  const token = localStorage.getItem('token');
  if (token) {
    const decodedToken = jwtDecode(token);
    return decodedToken.userId; // Assuming the user ID is stored in the 'userId' field of the token
  }
  return null;
};

const NewDeliveryOrder = () => {
  const [formData, setFormData] = useState({
    deliveryAddress: '',
    description: '',
    weight: '',
    speed: 'standard',
    distance: '', // Add distance to the form data
  });
  const [estimatedCost, setEstimatedCost] = useState(0);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserId = () => {
      const id = getUserId();
      console.log('User ID:', id);
      setUserId(id);
    };

    fetchUserId();
  }, []);


  const getUserEmail = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      return decodedToken.email;
    }
    return null;
  };

  const userEmail = getUserEmail();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Recalculate the estimated cost if the weight, speed, or distance is changed
    if (name === 'weight' || name === 'speed' || name === 'distance') {
      const weight = formData.weight || 1;
      const speed = formData.speed || 'standard';
      const distance = formData.distance || 10; // Provide a default distance if not set
      const estimatedCost = calculateEstimatedCost(distance, weight, speed);
      setEstimatedCost(estimatedCost);
    }
  };

  const [orderId, setOrderId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setErrorMessage('Token not found. Please sign in first.');
        return;
      }

      const response = await axios.post(
        'https://sendit-backend-qhth.onrender.com/parcels',
        {
          pickup_location: formData.pickupLocation,
          destination: formData.deliveryAddress,
          weight: formData.weight,
          description: formData.description,
          price: estimatedCost,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setSuccessMessage('Order created successfully!');
        clearForm();
        const userId = getUserId(); //get user ID from token
        setOrderId({orderId: response.data.id, userId} );
      } else {
        setErrorMessage('Failed to create order.');
      }
    } catch (error) {
      console.error('Error creating order:', error);
      setErrorMessage('Failed to create order.');
    }
  };

  const clearForm = () => {
    setFormData({
      pickupLocation: '',
      deliveryAddress: '',
      description: '',
      weight: '',
      speed: 'standard',
      distance: '', // Reset the distance field
    });
    setEstimatedCost(0);
  };

  const calculateEstimatedCost = (distance, weight, speed) => {
  // Define the base cost for weight
  const baseCostUpTo1kg = 5;
  const costBetween1To5kg = 10;
  const costBetween5To10kg = 15;
  const costAbove10kg = 20;
  const additionalCostPerKgAbove10kg = 2;

  // Define the base cost for distance
  const baseCostUpTo25km = 15;
  const costBetween25To75km = 25;
  const additionalCostPerKmOver25km = 25;
  const costAbove75km = 40;
  const additionalCostPerKmOver75km = 40;

  // Define the speed multipliers
  const standardSpeedMultiplier = 1;
  const expressSpeedMultiplier = 75;
  const samedaySpeedMultiplier = 150;

  // Calculate the weight cost
  let weightCost;
  if (weight <= 1) {
    weightCost = baseCostUpTo1kg;
  } else if (weight <= 5) {
    weightCost = costBetween1To5kg;
  } else if (weight <= 10) {
    weightCost = costBetween5To10kg;
  } else {
    weightCost = costAbove10kg + (weight - 10) * additionalCostPerKgAbove10kg;
  }

  // Calculate the distance cost
  let distanceCost;
  if (distance <= 25) {
    distanceCost = baseCostUpTo25km;
  } else if (distance <= 75) {
    distanceCost = costBetween25To75km + (distance - 25) * additionalCostPerKmOver25km;
  } else {
    distanceCost = costAbove75km + (distance - 75) * additionalCostPerKmOver75km;
  }

  // Calculate the speed multiplier based on the selected speed
  let speedMultiplier;
  switch (speed) {
    case 'express':
      speedMultiplier = expressSpeedMultiplier;
      break;
    case 'sameday':
      speedMultiplier = samedaySpeedMultiplier;
      break;
    default:
      speedMultiplier = standardSpeedMultiplier;
  }

  // Calculate the base cost
  const baseCost = weightCost + distanceCost;

  // Calculate the estimated cost
  const estimatedCost = baseCost + speedMultiplier;

  return estimatedCost.toFixed(2); // Round the estimated cost to two decimal places
};
  


  return (
    <div className="new-delivery-order-container">
      <div className="new-delivery-order-navbar">
        <Navbar1 rootClassName="navbar-root-class-name"></Navbar1>
        <div className="orders-buttons">
        <button className="back-button">
          <Link to="user-dashboard">Go to previous page</Link>
        </button>
        <button className="view-order-summary-button">
          <Link to={`/delivery-order-summary`}>View Order Summary</Link>
        </button>
        </div>
      </div>
      {userEmail && <p>Logged in as: {userEmail}</p>}
      <h2>Create New Delivery Order</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="pickupLocation">Pick Up Location</label>
          <textarea
            id="pickupLocation"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
            placeholder="e.g Mali Safi Goods, Shop 1B, Ground Floor, Imenti House"
          />
        </div>
        <div>
          <label htmlFor="deliveryAddress">Delivery Address / Drop Off Point</label>
          <textarea
            id="deliveryAddress"
            name="deliveryAddress"
            value={formData.deliveryAddress}
            onChange={handleChange}
            placeholder="e.g Marsabit Plaza, Ngong Road"
          />
        </div>
        <div>
          <label htmlFor="items">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Brief description of the Item(s) above. e.g 1 HP, 2 Dell, 3 Acer"
          />
        </div>
        <div>
          <label htmlFor="weight">Approximate Weight<span className="weight-description"> (in kgs.)</span></label>
          <textarea
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            placeholder="What is the approximate weight of your goods? (If less than 1kg just input 1kg)"
          />
        </div>
        <div>
          <label htmlFor="distance">Distance (in km)</label>
          <textarea
            id="distance"
            name="distance"
            value={formData.distance}
            onChange={handleChange}
            placeholder="Enter the approximate distance in kilometers"
          />
        </div>
        <div className="est-cost">
        <p>Estimated Cost: {estimatedCost}</p>
        </div>
        <div>
          <label htmlFor="speed">Delivery Speed</label>
          <select
            id="speed"
            name="speed"
            value={formData.speed}
            onChange={handleChange}
          >
            <option value="standard">Standard</option>
            <option value="express">Express</option>
            <option value="sameday">Same Day</option>
          </select>
        </div>
        <div className="button-container">
          <button type="submit">Create Delivery Order</button>
          <button type="button" onClick={clearForm}>Clear Form</button>
        </div>
      </form>
      {successMessage && <p>{successMessage}</p>}
      {/* Add the success message and order summary link here */}
    {orderId && (
      <div className="order-success-message">
        <p>Order creation successful!</p>
        <button className="view-order-summary-button">
          <Link to={`/order-summary/${orderId}`}>View Order Summary</Link>
        </button>
        <p>
          View your order summary here:{' '}
          <Link to={`/order-summary/${orderId}`}>Order Summary</Link>
        </p>
      </div>
    )}

      <div className="new-delivery-order-footer">
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
    </div>
  );
};

export default NewDeliveryOrder;