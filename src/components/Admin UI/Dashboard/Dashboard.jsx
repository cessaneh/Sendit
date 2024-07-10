import React from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";
import logo from "./user.png";
import search from "./search.png";
import dash from "./dashboard (2).png";
import help from "./help-web-button.png";
import income from "./income.png";
import users from "./users.png";
import parcels from "./parcels.png";
import notify from "./notifications.png";
import home from "./home.png";
import cargo from "./cargo.png";
import musers from "./users2.png";
import parcels2 from "./parcels2.png";
import stat from "./status.png";
import prof from "./profile.png";

function Dashboard() {
  const history = useHistory();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found in local storage');
        return;
      }

      const response = await axios.get('https://sendit-backend-qhth.onrender.com/logout', {
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
        <div className="admin-header">
          <div className="admin-nav">
            <div className="admin-search">
              <input type="text" placeholder="Search.." />
              <button type="submit"><img src={search} alt="" /></button>
            </div>
            <div className="admin-user">
              <Link to={'/'}><img src={home} alt="" title="Go to home page" /></Link>
              
              <div className="img-case">
                <Link to={'/admin_profile'}><img src={logo} alt="" title="My profile"/></Link> 
              </div>
              <button onClick={handleLogout} className="btn" title="Logout">
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className="admin-content">
          <div className="admin-cards">
            <div className="admin-card">
              <div className="admin-box">
                <h1>194</h1>
                <h3>Users</h3>
              </div>
              <div className="icon-case">
                <img src={users} alt="" />
              </div>
            </div>
            <div className="admin-card">
              <div className="admin-box">
                <h1>53</h1>
                <h3>Parcels</h3>
              </div>
              <div className="icon-case">
                <img src={parcels} alt="" />
              </div>
            </div>
            <div className="admin-card">
              <div className="admin-box">
                <h1>350000</h1>
                <h3>Income</h3>
              </div>
              <div className="icon-case">
                <img src={income} alt="" />
              </div>
            </div>
          </div>
          <div className="admin-content-2">
            <div className="admin-parcels">
              <div className="admin-title">
                <h2>Parcels</h2>
                <Link to={'/admin_parcels'}><a href="#" className="btn">
                  View All
                </a></Link>
              </div>
              <table>
                <tr>
                  <th>Id</th>
                  <th>Pickup location</th>
                  <th>Destination </th>
                  <th>Option</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Karen</td>
                  <td>Utawala</td>
                  <td>
                  <Link to={"/admin_parcels"}><a href="#" className="btn">View</a></Link>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Nakuru</td>
                  <td>Nairobi</td>
                  <td>
                    <Link to={"/admin_parcels"}><a href="#" className="btn">View</a></Link>
                      
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Uthiru 87</td>
                  <td>Kasarani</td>
                  <td>
                  <Link to={"/admin_parcels"}><a href="#" className="btn">View</a></Link>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Nakuru</td>
                  <td>Westlands</td>
                  <td>
                  <Link to={"/admin_parcels"}><a href="#" className="btn">View</a></Link>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Mogadishu</td>
                  <td>Garissa</td>
                  <td>
                  <Link to={"/admin_parcels"}><a href="#" className="btn">View</a></Link>
                  </td>
                </tr>
              </table>
            </div>
            <div className="admin-orders">
              <div className="admin-title">
                <h2>Orders</h2>
                <Link to={'/admin_orders'}><a href="#" className="btn">
                  View All
                </a></Link>
              </div>
              <table>
                <tr>
                  <th>Parcel_id</th>
                  <th>Status</th>
                  <th>Option</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Enroute</td>
                  <td>
                  <Link to={"/admin_orders"}><a href="#" className="btn">View</a></Link>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Delivered</td>
                  <td>
                  <Link to={"/admin_orders"}><a href="#" className="btn">View</a></Link>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Delivered</td>
                  <td>
                  <Link to={"/admin_orders"}><a href="#" className="btn">View</a></Link>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Enroute</td>
                  <td>
                  <Link to={"/admin_orders"}><a href="#" className="btn">View</a></Link>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Canceled</td>
                  <td>
                  <Link to={"/admin_orders"}><a href="#" className="btn">View</a></Link>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
