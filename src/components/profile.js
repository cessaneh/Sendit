import React from 'react'

import PropTypes from 'prop-types'

import './profile.css'

const Profile = (props) => {
  return (
    <div className={`profile-container ${props.rootClassName} `}>
      <h1 className="profile-text">{props.heading}</h1>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="profile-image"
      />
      <span className="profile-text1">{props.text}</span>
      <span className="profile-text2">{props.text1}</span>
      <span className="profile-text3">{props.text2}</span>
      <button type="button" className="profile-button button">
        {props.button}
      </button>
    </div>
  )
}

Profile.defaultProps = {
  imageAlt: 'imageAlt',
  heading: 'Profile',
  text2: 'Phone: +2547 65469287',
  text: 'Name: Jane Doe',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text1: 'Email: Jane.d@gmail.com',
  button: 'Edit Profile',
  rootClassName: '',
}

Profile.propTypes = {
  imageAlt: PropTypes.string,
  heading: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  imageSrc: PropTypes.string,
  text1: PropTypes.string,
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Profile
