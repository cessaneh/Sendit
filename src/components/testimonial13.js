import React from 'react'

import PropTypes from 'prop-types'

import './testimonial13.css'

const Testimonial13 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial13-max-width thq-section-max-width">
        <div className="testimonial13-section-title">
          <h2 className="testimonial13-title thq-heading-2">
            {props.heading1}
          </h2>
          <p className="testimonial13-subtitle thq-body-large">
            {props.content1}
          </p>
        </div>
        <div className="testimonial13-container thq-flex-row">
          <div className="testimonial13-content thq-flex-column">
            <div className="testimonial13-stars">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
            </div>
            <p className="testimonial13-text thq-body-large">{props.review1}</p>
            <div className="testimonial13-avatar">
              <img
                alt={props.author1Alt}
                src={props.author1Src}
                className="testimonial13-avatar-image thq-img-ratio-1-1 thq-img-round"
              />
              <div className="testimonial13-avatar-content">
                <span className="testimonial13-text1 thq-body-small">
                  {props.author1Name}
                </span>
                <span className="thq-body-small">{props.author1Position}</span>
              </div>
              <img
                alt={props.company1LogoAlt}
                src={props.company1LogoSrc}
                className="testimonial13-logo"
              />
            </div>
          </div>
          <div className="testimonial13-content1 thq-flex-column">
            <div className="testimonial13-stars1">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
            </div>
            <p className="testimonial13-text3 thq-body-large">
              {props.review2}
            </p>
            <div className="testimonial13-avatar1">
              <img
                alt={props.author2Alt}
                src={props.author2Src}
                className="testimonial13-avatar-image1 thq-img-round"
              />
              <div className="testimonial13-avatar-content1">
                <span className="testimonial13-text4 thq-body-small">
                  {props.author2Name}
                </span>
                <span className="thq-body-small">{props.author2Position}</span>
              </div>
              <img
                alt={props.company2LogoAlt}
                src={props.company2LogoSrc}
                className="testimonial13-logo1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial13.defaultProps = {
  company2LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  company2LogoAlt: 'Company Y Logo',
  author2Position: 'Operations Manager at Company Y',
  author2Src:
    'https://images.unsplash.com/photo-1618498082545-71f0da44cbcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTY5MjU3MHw&ixlib=rb-4.0.3&q=80&w=1080',
  review2:
    'We switched to SEND IT for our business logistics, and it has been a game-changer. The platform is user-friendly, and the parcel deliveries are always on time.',
  author2Alt: 'Image of Sarah Johnson',
  content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  author1Name: 'John Smith',
  company1LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  author1Position: 'CEO of Company X',
  company1LogoAlt: 'Company X Logo',
  heading1: 'Testimonials',
  author2Name: 'Sarah Johnson',
  author1Src:
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTY5MjU2OXw&ixlib=rb-4.0.3&q=80&w=1080',
  review1:
    'SEND IT has revolutionized the way we handle our deliveries. The tracking feature is incredibly helpful, and the customizable options make it easy to meet our specific needs.',
  author1Alt: 'Image of John Smith',
}

Testimonial13.propTypes = {
  company2LogoSrc: PropTypes.string,
  company2LogoAlt: PropTypes.string,
  author2Position: PropTypes.string,
  author2Src: PropTypes.string,
  review2: PropTypes.string,
  author2Alt: PropTypes.string,
  content1: PropTypes.string,
  author1Name: PropTypes.string,
  company1LogoSrc: PropTypes.string,
  author1Position: PropTypes.string,
  company1LogoAlt: PropTypes.string,
  heading1: PropTypes.string,
  author2Name: PropTypes.string,
  author1Src: PropTypes.string,
  review1: PropTypes.string,
  author1Alt: PropTypes.string,
}

export default Testimonial13
