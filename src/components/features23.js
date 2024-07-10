import React from 'react'

import PropTypes from 'prop-types'

import './features23.css'

const Features23 = (props) => {
  return (
    <div className="features23-layout349 thq-section-padding">
      <div className="features23-max-width thq-section-max-width">
        <div className="features23-container">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="features23-text01 thq-body-small">
            {props.content1}
          </span>
          <button className="thq-button-filled features23-button">
            <span className="thq-body-small">{props.action1}</span>
          </button>
        </div>
        <div className="thq-grid-3">
          <div className="features23-container2 thq-card">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="features23-image thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature1Title}</h2>
            <span className="features23-text03 thq-body-small">
              {props.feature1Description}
            </span>
          </div>
          <div className="features23-container3 thq-card">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="features23-image1 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature2Title}</h2>
            <span className="features23-text05 thq-body-small">
              {props.feature2Description}
            </span>
          </div>
          <div className="features23-container4 thq-card">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="features23-image2 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature3Title}</h2>
            <span className="features23-text07 thq-body-small">
              {props.feature3Description}
            </span>
          </div>
          <div className="features23-container5 thq-card">
            <img
              alt={props.feature4ImageAlt}
              src={props.feature4ImageSrc}
              className="features23-image3 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature4Title}</h2>
            <span className="features23-text09 thq-body-small">
              {props.feature4Description}
            </span>
          </div>
          <div className="features23-container6 thq-card">
            <img
              alt={props.feature5ImageAlt}
              src={props.feature5ImageSrc}
              className="features23-image4 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature5Title}</h2>
            <span className="features23-text11 thq-body-small">
              {props.feature5Description}
            </span>
          </div>
          <div className="features23-container7 thq-card">
            <img
              alt={props.feature6ImageAlt}
              src={props.feature6ImageSrc}
              className="features23-image5 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature6Title}</h2>
            <span className="features23-text13 thq-body-small">
              {props.feature6Description}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Features23.defaultProps = {
  feature1ImageAlt: 'Image of easy parcel sending feature',
  feature6ImageAlt: 'Image of customer support feature',
  feature2ImageAlt: 'Image of real-time tracking feature',
  feature4Title: 'Change Parcel Destination',
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTY4OTg4MXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description:
    'Ready to send a parcel? Just a few clicks and your delivery order is placed!',
  feature6Description:
    'Stay informed! Get all the nitty-gritty details of your delivery order at your fingertips.',
  feature5Description:
    'Need to cancel an order? We’ve got you covered. Cancel your parcel delivery with ease.',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1695654401585-4293d1c97cbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTY4OTg4Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature5Title: 'Cancel Parcel Delivery Order',
  feature5ImageSrc:
    'https://images.unsplash.com/photo-1446694292248-2c2a7e575b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTY4OTg4MXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Description:
    'Step into the world of seamless deliveries! Create your account and join our community of happy customers.',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1640695186958-470133dee50f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTY4OTg4MXw&ixlib=rb-4.0.3&q=80&w=1080',
  action1: 'Download the App',
  heading1: 'Features',
  feature4ImageAlt: 'Image of secure transactions feature',
  feature3ImageAlt: 'Image of delivery notifications feature',
  feature1Title: 'User Account Creation',
  feature6Title: 'View Delivery Order Details',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1554620158-d8d5c2f3a27b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTY4OTg4MHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Title: 'Parcel Delivery Order Creation',
  feature6ImageSrc:
    'https://images.unsplash.com/photo-1596558450255-7c0b7be9d56a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTY4OTg4Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description:
    'Your personal dashboard is just a login away. Access all your parcel details anytime, anywhere.',
  feature2Title: 'User Login',
  content1:
    'Welcome to SendIT, your reliable courier service that brings the world closer to you! Our platform is designed with a simple goal in mind - to make parcel delivery as seamless and efficient as possible.  At SendIT, we empower you with the ability to create an account and log in with ease. Once you’re in, you can create a parcel delivery order with just a few clicks. But that’s not all! We understand that plans can change, which is why we offer you the flexibility to change the destination of your parcel delivery order anytime before it’s marked as delivered.  Ever had second thoughts about a delivery? With SendIT, you can cancel a parcel delivery order with no hassle. We believe in transparency, which is why we let you see the details of your delivery order at any time.  But what truly sets us apart is our admin features. Our admins can change the status and present location of your parcel delivery order, keeping you updated every step of the way. And the best part? You get real-time email notifications whenever there’s a change in the status or location of your parcel.  Join us at SendIT, and experience a courier service that truly delivers on its promises!',
  feature5ImageAlt: 'Image of business logistics management feature',
  feature4Description:
    'Change of plans? No worries! Update your parcel destination anytime before it’s delivered.',
}

Features23.propTypes = {
  feature1ImageAlt: PropTypes.string,
  feature6ImageAlt: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature4Title: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  feature6Description: PropTypes.string,
  feature5Description: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature5Title: PropTypes.string,
  feature5ImageSrc: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  action1: PropTypes.string,
  heading1: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature1Title: PropTypes.string,
  feature6Title: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature3Title: PropTypes.string,
  feature6ImageSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature2Title: PropTypes.string,
  content1: PropTypes.string,
  feature5ImageAlt: PropTypes.string,
  feature4Description: PropTypes.string,
}

export default Features23
