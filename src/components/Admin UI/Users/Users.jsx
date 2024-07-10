import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Users.css";
import help from "../Dashboard/help-web-button.png";
import dash from "../Dashboard/dashboard (2).png";
import musers from "../Dashboard/users2.png";
import parcels2 from "../Dashboard/parcels2.png";
import stat from "../Dashboard/status.png";
import prof from "../Dashboard/profile.png";
import UserModal from "./UserModal"; 

function Users() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchUsers = () => {
    fetch(`https://sendit-backend-qhth.onrender.com/users`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(response => {
      if(!response.ok) {
        throw new Error("Failed to fetch Users")
      } 
      return response.json()
    })
    // .then(data => setUsers(prevUsers => [...prevUsers, ...data]))
    .then(data => setUsers(data))
    .catch(error => console.error('Error fetching users:', error));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleView = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(null);
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
          <h1>USERS</h1>
          <div className="usersTableContainer">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>
                        <button onClick={() => handleView(user)} className="admin-bttn">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
        </div>
        {showModal && (
          <UserModal user={selectedUser} onClose={handleCloseModal} />
        )}
      </div>
    </div>
  )
}

export default Users