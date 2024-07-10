import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./navigation-links.css";
import NewDeliveryOrder from "../views/NewDeliveryOrder";
import DeliveryOrderSummary from "../views/DeliveryOrderSummary";
import Services from "../views/services";
import SignUp from "../views/signup";

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName}`}>
      <Link to="/" className="navigation-links-navlink navbar-link">
        {props.text}
      </Link>
      <Link to="/about-page" className="navigation-links-navlink1 navbar-link">
        {props.text1}
      </Link>
      <Link to="/services" className="navigation-links-navlink2 navbar-link">
        {props.text2}
      </Link>
      <Link to="/maps" className="navigation-links-navlink3 navbar-link">
        {props.text4}
      </Link>
      
      <Link to="/contact-us" className="navigation-links-navlink4 navbar-link">
        {props.text5}
      </Link>

      
    </nav>
  );
};

NavigationLinks.defaultProps = {
  text: 'Home',
  text1: 'About',
  text2: 'Service',
  text3: 'Orders',
  text4: 'Tracking',
  text5: 'Contact us',
  text6: 'New Delivery Order',
  text7: 'Delivery Order Summary',
  rootClassName: '',
}

NavigationLinks.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  text7: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks;
