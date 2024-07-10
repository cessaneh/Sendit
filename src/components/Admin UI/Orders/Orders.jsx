import { Link } from "react-router-dom";
import "./Orders.css";
import help from "../Dashboard/help-web-button.png"
import dash from "../Dashboard/dashboard (2).png"
import musers from "../Dashboard/users2.png";
import parcels2 from "../Dashboard/parcels2.png";
import stat from "../Dashboard/status.png";
import prof from "../Dashboard/profile.png";
import { useState, useEffect } from "react";
import OrderDetail from "./OrderDetail";

function Orders() {
  const [orders, setOrders]= useState([])
  const [parcelId, setParcelId] = useState("")
  const [status, setStatus] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://sendit-backend-qhth.onrender.com/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ parcel_id: parcelId, status: status }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.msg) {
        setMessage(data.msg);
        setError('');
      } else {
        setError(data.error);
        setMessage('');
      }
    })
    .catch(error => {
      console.log(error)
      setError('Failed to create order');
      setMessage('');
    });
  };

  useEffect(() => {
    fetch(`https://sendit-backend-qhth.onrender.com/orders`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setOrders(data.order_statuses);
    })
    .catch(error => {
      setError(error.message);
    });
  }, []);

  const handleViewDetails = (orderId) => {
    fetch(`https://sendit-backend-qhth.onrender.com/orders/${orderId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch order details');
        }
        return response.json();
      })
      .then(data => {
        console.log(data.order_status)
        setSelectedOrder(data.order_status);
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedOrder(null);
  };

  return (
    <div className="admin-main">
      <div className="admin-side-menu">
        <div className="admin-brand-name">
          <h1>SendIt</h1>
        </div>
        <ul>
          <Link to={'/admin_dashboard'}><li><img src={dash} alt="" />&nbsp; <span>Dashboard</span></li></Link>
          <Link to={'/admin_users'}><li><img src={musers} alt="" />&nbsp; <span>Users</span></li></Link>
          <Link to={'/admin_parcels'}><li><img src={parcels2} alt="" />&nbsp; <span>Parcels</span></li></Link>
          <Link to={'/admin_orders'}><li><img src={stat} alt="" />&nbsp; <span>Orders</span></li></Link>
          <Link to={'/admin_profile'}><li><img src={prof} alt="" />&nbsp; <span>My Profile</span></li></Link>
          <Link to={'/help'}><li><img src={help} alt="" />&nbsp; <span>Help</span></li></Link>{" "}
        </ul>
      </div>
      <div className="admin-container">
        <h1>ORDERS</h1>
          <div className="admin-center"> 
            <h3>Create Status Order</h3>
            <form onSubmit={handleSubmit}>
            <div className="admin-inputbox">
              <input 
                  type="text" 
                  required="required"
                  value={parcelId}
                  placeholder="Enter the parcel_id.."
                  onChange={(e) => setParcelId(e.target.value)}
                  />
            </div>
            <div className="admin-inputbox">
              <input 
                  type="text" 
                  required="required" 
                  value={status}
                  placeholder="Enter the Status.."
                  onChange={(e) => setStatus(e.target.value)} 
                  />
            </div>
            <div className="admin-inputbox">
              <button className="admin-bttn">Submit</button>
            </div>
          </form>
          {message && <p className="success-message">{message}</p>}
          {error && <p className="error-message">{error}</p>}
          </div>
            <h1>ALL STATUS ORDERS: </h1>
            <div className="ordertableContainer">
            <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Status</th>
                    <th>Parcel_id</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.status}</td>
                      <td>{order.parcel_id}</td>
                      <td>
                        <button onClick={()=>{handleViewDetails(order.id)}} className="admin-bttn">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          <div className="ordercontent-3">
              {selectedOrder && <OrderDetail order={selectedOrder} onClose={handleCloseModal} />}
          </div>
      </div>
    </div>
  )
}

export default Orders