import React from 'react';
import { Link } from "react-router-dom";
import help from "../Dashboard/help-web-button.png";
import dash from "../Dashboard/dashboard (2).png";
import musers from "../Dashboard/users2.png";
import parcels2 from "../Dashboard/parcels2.png";
import stat from "../Dashboard/status.png";
import prof from "../Dashboard/profile.png";

function MyProfile() {
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
        <h1>Profile</h1>
      </div>
    </div>

  )
}

export default MyProfile