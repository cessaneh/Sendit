import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavigationLinks1 from './navigation-links1';
import NavigationLinks from './navigation-links';
import LogoutButton from './LogoutButton';
import './navbar1.css';

const Navbar1 = (props) => {
  return (
    <div className={`navbar1-navbar-container ${props.rootClassName}`}>
      <header data-role="Header" className="navbar1-max-width navigation-container">
        <Link to="/user-dashboard" className="">
          <img alt={props.imageAlt} src={props.text6} className="navbar1-image" />
        </Link>
        <div className="navbar1-container">
          <NavigationLinks1 rootClassName="navigation-links1-root-class-name" className="" />
        </div>
        <div className="navbar1-container1">
          <LogoutButton className="navbar1-navlink1 button">
            <span className="navbar1-text">{props.text1}</span>
            <svg viewBox="0 0 1024 1024" className="navbar1-icon">
              <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z" className="" />
            </svg>
          </LogoutButton>
        </div>
        <div data-role="BurgerMenu" className="navigation-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar1-icon02">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
              className=""
            ></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="navigation-mobile-menu">
          <div className="navbar1-nav">
            <div className="navbar1-container2">
              <img
                alt={props.imageAlt1}
                src={props.imageSrc1}
                className="navbar1-image1"
              />
              <div data-role="CloseMobileMenu" className="navbar1-menu-close">
                <svg viewBox="0 0 1024 1024" className="navbar1-icon04">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
            <button className="navbar1-primary-btn button-primary button">
              {props.primaryBtn1}
            </button>
            <NavigationLinks
              rootClassName="navigation-links-root-class-name9"
              className=""
            ></NavigationLinks>
          </div>
          <div className="navbar1-social-media">
            <span className="navbar1-text1">{props.text}</span>
            <div className="navbar1-container3">
              <svg viewBox="0 0 1024 1024" className="navbar1-icon06">
                <path
                  d="M384 384h177.106v90.782h2.532c24.64-44.194 84.958-90.782 174.842-90.782 186.946 0 221.52 116.376 221.52 267.734v308.266h-184.61v-273.278c0-65.184-1.334-149.026-96.028-149.026-96.148 0-110.82 70.986-110.82 144.292v278.012h-184.542v-576z"
                  className=""
                ></path>
                <path d="M64 384h192v576h-192v-576z" className=""></path>
                <path
                  d="M256 224c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z"
                  className=""
                ></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="navbar1-icon10">
                <path
                  d="M512 92.2c136.8 0 153 0.6 206.8 3 50 2.2 77 10.6 95 17.6 23.8 9.2 41 20.4 58.8 38.2 18 18 29 35 38.4 58.8 7 18 15.4 45.2 17.6 95 2.4 54 3 70.2 3 206.8s-0.6 153-3 206.8c-2.2 50-10.6 77-17.6 95-9.2 23.8-20.4 41-38.2 58.8-18 18-35 29-58.8 38.4-18 7-45.2 15.4-95 17.6-54 2.4-70.2 3-206.8 3s-153-0.6-206.8-3c-50-2.2-77-10.6-95-17.6-23.8-9.2-41-20.4-58.8-38.2-18-18-29-35-38.4-58.8-7-18-15.4-45.2-17.6-95-2.4-54-3-70.2-3-206.8s0.6-153 3-206.8c2.2-50 10.6-77 17.6-95 9.2-23.8 20.4-41 38.2-58.8 18-18 35-29 58.8-38.4 18-7 45.2-15.4 95-17.6 53.8-2.4 70-3 206.8-3zM512 0c-139 0-156.4 0.6-211 3-54.4 2.4-91.8 11.2-124.2 23.8-33.8 13.2-62.4 30.8-90.6 59-28.2 28.2-45.8 56.8-59 90.6-12.6 32.4-21.4 69.8-23.8 124.2-2.4 54.6-3 72-3 211s0.6 156.4 3 211c2.4 54.4 11.2 91.8 23.8 124.2 13.2 33.8 30.8 62.4 59 90.6 28.2 28.2 56.8 45.8 90.6 59 32.4 12.6 69.8 21.4 124.2 23.8 54.6 2.4 72 3 211 3s156.4-0.6 211-3c54.4-2.4 91.8-11.2 124.2-23.8 33.8-13.2 62.4-30.8 90.6-59 28.2-28.2 45.8-56.8 59-90.6 12.6-32.4 21.4-69.8 23.8-124.2 2.4-54.6 3-72 3-211s-0.6-156.4-3-211c-2.4-54.4-11.2-91.8-23.8-124.2-13.2-33.8-30.8-62.4-59-90.6-28.2-28.2-56.8-45.8-90.6-59-32.4-12.6-69.8-21.4-124.2-23.8-54.6-2.4-72-3-211-3zM512 247.4c-145.8 0-264.6 118.8-264.6 264.6s118.8 264.6 264.6 264.6 264.6-118.8 264.6-264.6-118.8-264.6-264.6-264.6zM512 728c-119.2 0-216-96.8-216-216s96.8-216 216-216 216 96.8 216 216-96.8 216-216 216zM850.8 182.4c0 34-27.4 61.4-61.4 61.4s-61.4-27.4-61.4-61.4c0-34 27.4-61.4 61.4-61.4s61.4 27.4 61.4 61.4z"
                  className=""
                ></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="navbar1-icon14">
                <path
                  d="M925.8 271.6c-34.2 15.2-70.8 25.4-109.4 30 39.4-23.6 69.6-60.6 83.8-104.6-36.8 21.8-77.4 37.8-120.6 46-34.8-38.8-84.4-63-139.4-63-105.6 0-190.6 92.6-178 196.6-148.2-7.4-282-78.4-370.6-186-48.6 83.4-24.4 191 58.6 245.2-30.8-1-59.8-9.4-85.2-23.4-2.2 86.2 59.6 166.8 148.2 184.8-26 7-53.6 9.6-82.2 3.4 23.4 73.2 90.6 126.4 170.4 128-78.6 61.6-174.8 86.4-275.2 72.8 82 52.6 179.4 82.4 283.4 82.4 340.6 0 537.2-292 525.2-554.6 36.6-26.4 69.4-59.4 94.8-97.2z"
                  className=""
                ></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="navbar1-icon18">
                <path
                  d="M512 373.6c-76.8 0-139 62-139 138.4s62 138.4 139 138.4c76.8 0 139-62 139-138.4s-62-138.4-139-138.4zM512 569c-31.2 0-56.6-25.4-56.6-57s25.4-57 56.6-57c31.2 0 56.6 25.4 56.6 57s-25.4 57-56.6 57z"
                  className=""
                ></path>
                <path
                  d="M911.8 0h-799.6c-61.8 0-112.2 50.4-112.2 112.2v799.6c0 61.8 50.4 112.2 112.2 112.2h799.6c61.8 0 112.2-50.4 112.2-112.2v-799.6c0-61.8-50.4-112.2-112.2-112.2zM512 825.4c-172.8 0-312.8-140-312.8-312.8s140-312.8 312.8-312.8 312.8 140 312.8 312.8-140 312.8-312.8 312.8zM859 261.4c-40.6 0-73.4-32.8-73.4-73.4s32.8-73.4 73.4-73.4 73.4 32.8 73.4 73.4-32.8 73.4-73.4 73.4z"
                  className=""
                ></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="navbar1-icon22">
                <path
                  d="M585.143 512l292.571-292.571v-87.429h-87.429l-292.571 292.571-292.571-292.571h-87.429v87.429l292.571 292.571-292.571 292.571v87.429h87.429l292.571-292.571 292.571 292.571h87.429v-87.429z"
                  className=""
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

Navbar1.defaultProps = {
  primaryBtn1: 'Log Out',
  rootClassName: '',
  imageAlt: 'logo',
  text6: '/black___red_simple_flat_delivery_service_logo-removebg-preview-1500h.png',
  text: 'Follow us',
  imageAlt1: 'image',
  imageSrc1: '/black___red_simple_flat_delivery_service_logo-removebg-preview-1500h.png',
  text1: 'Log Out',
};

Navbar1.propTypes = {
  primaryBtn1: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  text6: PropTypes.string,
  text: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc1: PropTypes.string,
  text1: PropTypes.string,
};

export default Navbar1;
