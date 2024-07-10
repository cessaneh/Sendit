import React, { useState } from 'react'

function OrderDetail({order, onClose}) {
  const [showForm, setShowForm] = useState(false);
  const [newStatus, setNewStatus] = useState('');

  const handleUpdateStatusClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://sendit-backend-qhth.onrender.com/orders/${order.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        alert ('Status Updated Successfully. User will receive an email of the update.')
        setNewStatus('');
        setShowForm(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className='admin-status-order'>
      <span className="close" onClick={onClose}>&times;</span>
      <h3>Order Details:</h3>
        <p>ID: {order.id}</p>
        <p>Status: {order.status}</p>
        <p>Parcel Id: {order.parcel_id}</p>
        <button onClick={handleUpdateStatusClick} className='admin-bttn'>Update Status</button>
        {showForm && (
        <form onSubmit={handleSubmit} className='my-form'>
          <label>
            New Status:
            <input
              type="text"
              placeholder='Update Status...'
              value={newStatus}
              onChange={(e) => setNewStatus(e.target.value)}
            />
          </label>
          <button type="submit" className='admin-bttn'>Submit</button>
        </form>
      )}
    </div>
  )
}

export default OrderDetail