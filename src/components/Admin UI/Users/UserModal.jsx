import { useState } from 'react';
import "./UserModal.css";


const UserModal = ({ user, onClose }) => {
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  const handleUpdate = () => {
    fetch(`https://sendit-backend-qhth.onrender.com/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ username, email })
    })
    .then(response => response.json())
    .then(data => {
      console.log('User updated:', data);
      onClose();
    })
    .catch(error => console.error('Error updating user:', error));
  };

  const handleMakeAdmin = () => {
    fetch(`https://sendit-backend-qhth.onrender.com/upgrade_user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ userId: user.id })
    })
    .then(response => response.json())
    .then(data => {
      console.log('User upgraded to admin:', data);
      onClose();
    })
    .catch(error => console.error('Error upgrading user:', error));
  };

  const handleDelete = () => {
    fetch(`https://sendit-backend-qhth.onrender.com/users/${user.id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('User deleted:', data);
      onClose();
    })
    .catch(error => console.error('Error deleting user:', error));
  };

  return (
    <div className="admin-users-center">
        <span className="close" onClick={onClose}>&times;</span>
        <h3>Update User</h3>
        <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
          <div className="admin-inputbox">
            <label>
              <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                />
            </label>
          </div>
          <div className="admin-inputbox">
            <label>
              <input 
                  type="email" 
                  value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
          </div>
          
          <button type="submit" className='admin-bttn'>Submit</button>
        </form>
        <div className="admin-button-wrapper">
            <button className='admin-bttn' onClick={handleMakeAdmin}>Make Admin</button>
            <button className='admin-bttn' onClick={handleDelete}>Delete User</button>
        </div>
        
    </div>
  );
};

export default UserModal;
