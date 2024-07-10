import React from 'react'

import PropTypes from 'prop-types'

import './slide.css'

const Slide = (props) => {
  return (
    <div
      data-type="slide"
      className={`slide-slide slide ${props.rootClassName} `}
    >
      <div className="slide-max-width max-content-container">
        <div className="slide-left-side">
          <div className="slide-decorations-container">
            <img alt="image" src="/union-200h.png" className="slide-dots" />
            <div className="slide-squares-container">
              <div className="slide-light-green"></div>
              <div className="slide-orange"></div>
            </div>
          </div>
          <div className="slide-image-container">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="slide-image"
            />
            <div className="slide-slider-controls">
              <div data-action="previousSlide" className="slide-go-left">
                <svg viewBox="0 0 1024 1024" className="slide-icon">
                  <path
                    d="M854 470v84h-520l238 240-60 60-342-342 342-342 60 60-238 240h520z"
                    className=""
                  ></path>
                </svg>
              </div>
              <div data-action="nextSlide" className="slide-go-right">
                <svg viewBox="0 0 1024 1024" className="slide-icon2">
                  <path
                    d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="slide-right-side">
          <span className="slide-testimonial">{props.testimonial}</span>
          <span className="slide-author">{props.author}</span>
          <span className="slide-role">{props.role}</span>
        </div>
      </div>
    </div>
  )
}

Slide.defaultProps = {
  author: 'Elisabeth Brooke',
  testimonial:
    '“Love it! I really like the user interface. The sleek aesthetic of the software makes it easy and pleasant to use. I am also a big fan of the way I can customize and organize different feeds and mail sources.”',
  rootClassName: '',
  imageSrc:
    'https://images.unsplash.com/photo-1508002366005-75a695ee2d17?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDUxfHxzbWlsZXxlbnwwfHx8fDE2NDM0MDc4MTE&ixlib=rb-1.2.1&w=700',
  imageAlt: 'image',
  role: 'Finance Broker',
}

Slide.propTypes = {
  author: PropTypes.string,
  testimonial: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  role: PropTypes.string,
}

export default Slide
