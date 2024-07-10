import React from 'react'

import PropTypes from 'prop-types'

import './features24.css'

const Features24 = (props) => {
  return (
    <div
      className={`features24-layout349 thq-section-padding ${props.rootClassName} `}
    >
      <div className="features24-max-width thq-section-max-width">
        <div className="features24-container"></div>
        <div className="thq-grid-3">
          <div className="features24-container2 thq-card">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="features24-image thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature7Title}</h2>
            <span className="features24-text01 thq-body-small">
              {props.feature7Description}
            </span>
          </div>
          <div className="features24-container3 thq-card">
            <img
              alt={props.feature8ImageAlt}
              src={props.feature8ImageSrc}
              className="features24-image1 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature8Title}</h2>
            <span className="features24-text03 thq-body-small">
              {props.feature8Description}
            </span>
          </div>
          <div className="features24-container4 thq-card">
            <img
              alt={props.feature9ImageAlt}
              src={props.feature9ImageSrc}
              className="features24-image2 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature9Title}</h2>
            <span className="features24-text05 thq-body-small">
              {props.feature9Description}
            </span>
          </div>
          <div className="features24-container5 thq-card">
            <img
              alt={props.feature10ImageAlt}
              src={props.feature10ImageSrc}
              className="features24-image3 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature10Title}</h2>
            <span className="features24-text07 thq-body-small">
              {props.feature10Description}
            </span>
          </div>
          <div className="features24-container6 thq-card">
            <img
              alt={props.feature5ImageAlt}
              src={props.feature5ImageSrc}
              className="features24-image4 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature11Title}</h2>
            <span className="features24-text09 thq-body-small">
              {props.feature11Description}
            </span>
          </div>
          <div className="features24-container7 thq-card">
            <img
              alt={props.feature6ImageAlt}
              src={props.feature6ImageSrc}
              className="features24-image5 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature6Title}</h2>
            <span className="features24-text11 thq-body-small">
              {props.feature12Description}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Features24.defaultProps = {
  feature1ImageAlt: 'Image of easy parcel sending feature',
  feature10Description:
    'Never miss an update! Get real-time email notifications when your parcel status changes.',
  feature10ImageAlt: 'Image of secure transactions feature',
  feature8ImageAlt: 'Image of real-time tracking feature',
  feature6ImageAlt: 'Image of customer support feature',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature9ImageSrc:
    'https://images.unsplash.com/photo-1695654401585-4293d1c97cbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTY4OTg4Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature6Title: 'Customer Support',
  action1: 'Download the App',
  feature7Description:
    'Real-time updates coming your way! Our admins keep you posted about your parcel status.',
  feature7Title: 'Admin Update Parcel Status',
  rootClassName: '',
  feature10ImageSrc:
    'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTY4OTg4MXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature8ImageSrc:
    'https://images.unsplash.com/photo-1554620158-d8d5c2f3a27b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTY4OTg4MHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature12Description:
    'We respect your decisions! Cancel or change the destination of your parcel delivery when the parcel’s status is yet to be marked as delivered.',
  feature11Description:
    'Stay in the loop! Receive email alerts when your parcel location changes.',
  heading1: 'Features',
  feature6ImageSrc:
    'https://images.unsplash.com/photo-1596558450255-7c0b7be9d56a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTY4OTg4Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature11Title: 'Real-time Email Notification for Location Change.',
  feature10Title: 'Real-time Email Notification for Status Change',
  feature9Title: 'Google Map with Markers.',
  feature5ImageAlt: 'Image of business logistics management feature',
  feature8Description:
    'Track your parcel in real-time. Know exactly where your parcel is, thanks to our diligent admins.',
  feature5ImageSrc:
    'https://images.unsplash.com/photo-1446694292248-2c2a7e575b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTY4OTg4MXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature9ImageAlt: 'Image of delivery notifications feature',
  feature8Title: 'Admin Update Parcel Location',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1640695186958-470133dee50f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTY4OTg4MXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature9Description:
    'Visualize your parcel journey! See the pickup and destination locations marked on Google Map.',
}

Features24.propTypes = {
  feature1ImageAlt: PropTypes.string,
  feature10Description: PropTypes.string,
  feature10ImageAlt: PropTypes.string,
  feature8ImageAlt: PropTypes.string,
  feature6ImageAlt: PropTypes.string,
  content1: PropTypes.string,
  feature9ImageSrc: PropTypes.string,
  feature6Title: PropTypes.string,
  action1: PropTypes.string,
  feature7Description: PropTypes.string,
  feature7Title: PropTypes.string,
  rootClassName: PropTypes.string,
  feature10ImageSrc: PropTypes.string,
  feature8ImageSrc: PropTypes.string,
  feature12Description: PropTypes.string,
  feature11Description: PropTypes.string,
  heading1: PropTypes.string,
  feature6ImageSrc: PropTypes.string,
  feature11Title: PropTypes.string,
  feature10Title: PropTypes.string,
  feature9Title: PropTypes.string,
  feature5ImageAlt: PropTypes.string,
  feature8Description: PropTypes.string,
  feature5ImageSrc: PropTypes.string,
  feature9ImageAlt: PropTypes.string,
  feature8Title: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature9Description: PropTypes.string,
}

export default Features24
