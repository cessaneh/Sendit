import React from 'react'

import PropTypes from 'prop-types'

import './feature-card.css'

const FeatureCard = (props) => {
  return (
    <div className="feature-card-card">
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="feature-card-image"
      />
      <h4 className="feature-card-text Heading4">{props.heading}</h4>
      <span className="feature-card-text1 Content-Light">{props.text}</span>
      <span className="feature-card-text2">{props.text1}</span>
    </div>
  )
}

FeatureCard.defaultProps = {
  text1: 'Get started >',
  text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  heading: 'Search for ideas',
  imageAlt: 'image',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

FeatureCard.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default FeatureCard
