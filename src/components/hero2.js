import React from 'react'

import PropTypes from 'prop-types'

import './hero2.css'

const Hero2 = (props) => {
  return (
    <div className="hero2-header5 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero2-image"
      />
      <div className="hero2-container">
        <div className="hero2-max-width thq-section-max-width">
          <div className="hero2-column">
            <div className="hero2-content">
              <h1 className="thq-heading-1 hero2-text">{props.heading1}</h1>
              <p className="thq-body-large hero2-text1">{props.content1}</p>
              <div className="hero2-actions">
                <div className="hero2-container1">
                  <button className="hero2-button thq-button-filled">
                    <span className="thq-body-small">{props.action1}</span>
                  </button>
                </div>
                <div className="hero2-container2">
                  <button className="hero2-button1 thq-button-outline">
                    <span className="thq-body-small">{props.action2}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero2.defaultProps = {
  image1Alt: 'Delivery app illustration',
  image1Src: '/close-up-delivery-person-with-documents-car-1500h.jpg',
  heading1: 'Welcome to SEND IT',
  action2: 'Learn more',
  action1: 'Download the app now',
  content1: 'Your go-to platform for all your parcel delivery needs',
}

Hero2.propTypes = {
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
  heading1: PropTypes.string,
  action2: PropTypes.string,
  action1: PropTypes.string,
  content1: PropTypes.string,
}

export default Hero2
