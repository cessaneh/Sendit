import React from 'react'

import PropTypes from 'prop-types'

import './features102.css'

const Features102 = (props) => {
  return (
    <div className="features102-layout300 thq-section-padding">
      <div className="features102-max-width thq-flex-column thq-section-max-width">
        <div className="features102-section-title thq-flex-column">
          <span className="features102-text thq-body-small">
            {props.slogan}
          </span>
          <h2 className="features102-text1 thq-heading-2">
            {props.sectionTitle}
          </h2>
          <p className="features102-text2 thq-body-large">
            {props.sectionDescription}
          </p>
        </div>
        <div className="features102-content thq-grid-3">
          <div className="features102-feature1 thq-flex-column">
            <h3 className="features102-feature1-title thq-heading-3">
              {props.feature1Title}
            </h3>
            <span className="features102-feature1-description thq-body-small">
              {props.feature1Description}
            </span>
          </div>
          <div className="features102-feature2 thq-flex-column">
            <h3 className="features102-feature2-title thq-heading-3">
              {props.feature2Title}
            </h3>
            <span className="features102-feature2-description thq-body-small">
              {props.feature2Description}
            </span>
          </div>
          <div className="features102-feature3 thq-flex-column">
            <h3 className="features102-feature3-title thq-heading-3">
              {props.feature3Title}
            </h3>
            <span className="features102-feature3-description thq-body-small">
              {props.feature3Description}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Features102.defaultProps = {
  feature1Title: '1: Get a Quote',
  heading: 'Heading',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=200',
  feature3Description:
    "Once your order is successfully made, you can now sit back and use our tracking system to monitor your parcel's journey.",
  feature2ImageAlt: 'PlaceholderImage1314',
  sectionDescription:
    'Sending parcels with SendIT is easy. Follow these simple steps to get started.',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1563089145-599997674d42?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=200',
  mainAction: 'Main action',
  text: 'Text',
  feature2Title: '2: Schedule Pickup',
  feature3ImageAlt: 'PlaceholderImage1314',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1400',
  slogan: 'PROCESS',
  secondaryAction: 'Secondary action',
  sectionTitle: 'How SEND IT Works',
  feature1Description:
    'Enter your parcel details and with only just a few clicks, you will receive a quote based on its weight category.',
  feature3Title: '3: Track Delivery',
  feature1ImageAlt: 'PlaceholderImage1314',
  feature2Description:
    'Choose a convenient time for us to pick up your parcel. We are here to offer you the best logistical convenience.',
}

Features102.propTypes = {
  feature1Title: PropTypes.string,
  heading: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  sectionDescription: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  mainAction: PropTypes.string,
  text: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  slogan: PropTypes.string,
  secondaryAction: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3Title: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature2Description: PropTypes.string,
}

export default Features102
