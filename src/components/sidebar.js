import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './sidebar.css'

const Sidebar = (props) => {
  return (
    <div className={`sidebar-container ${props.rootClassName} `}>
      <header data-thq="thq-navbar" className="sidebar-navbar-interactive">
        <div data-thq="thq-navbar-nav" className="sidebar-desktop-menu">
          <nav className="sidebar-links">
            <div className="sidebar-buttons">
              <Link to='/new-delivery-order'>
              <button className="thq-button-filled sidebar-action1">
                {props.action1}
              </button>
              </Link>
              <Link to="/maps" className="thq-button-outline sidebar-action2">
                {props.action2}
              </Link>
            </div>
            <Link
              to="/user-dashboard"
              className="sidebar-link1 thq-body-small thq-link"
            >
              {props.link1}
            </Link>
            <Link
              to="/contact-us"
              className="sidebar-link2 thq-body-small thq-link"
            >
              {props.link2}
            </Link>
            <Link
              to="/services"
              className="sidebar-link3 thq-body-small thq-link"
            >
              {props.link3}
            </Link>
          </nav>
          <button type="button" className="sidebar-button button">
            {props.button}
          </button>
        </div>
        <div data-thq="thq-burger-menu" className="sidebar-burger-menu"></div>
        <div data-thq="thq-mobile-menu" className="sidebar-mobile-menu">
          <div className="sidebar-nav">
            <div className="sidebar-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="sidebar-logo"
              />
              <div data-thq="thq-close-menu" className="sidebar-close-menu">
                <svg viewBox="0 0 1024 1024" className="sidebar-icon">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
            <nav className="sidebar-links1">
              <span className="thq-body-small thq-link">{props.link1}</span>
              <span className="thq-body-small thq-link">{props.link2}</span>
              <span className="thq-body-small thq-link">{props.link3}</span>
              <span className="thq-body-small thq-link">{props.link4}</span>
              <span className="thq-body-small thq-link">{props.link5}</span>
            </nav>
          </div>
          <div className="sidebar-buttons1">
            <button className="thq-button-filled">Login</button>
            <button className="thq-button-outline">Register</button>
          </div>
        </div>
      </header>
    </div>
  )
}

Sidebar.defaultProps = {
  rootClassName: '',
  action1: 'Create Order',
  link5: 'Link5',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  link2: 'Contact Us',
  link4: 'Customize Preferences',
  link1: 'Home',
  logoAlt: 'ParcelPal',
  action2: 'Track Parcel',
  link3: "FAQ's",
}

Sidebar.propTypes = {
  rootClassName: PropTypes.string,
  action1: PropTypes.string,
  button: PropTypes.string,
  link5: PropTypes.string,
  logoSrc: PropTypes.string,
  link2: PropTypes.string,
  link4: PropTypes.string,
  link1: PropTypes.string,
  logoAlt: PropTypes.string,
  action2: PropTypes.string,
  link3: PropTypes.string,
}

export default Sidebar
