import React from 'react'

import PropTypes from 'prop-types'

import './testimonial16.css'

const Testimonial16 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial16-max-width thq-section-max-width">
        <div className="testimonial16-container">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial16-text01 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="testimonial16-container02 thq-card">
            <div className="testimonial16-container03">
              <img
                alt={props.author1Alt}
                src={props.author1Src}
                className="testimonial16-image"
              />
              <div className="testimonial16-container04">
                <strong className="thq-body-large">{props.author1Name}</strong>
                <span className="thq-body-small">{props.author1Position}</span>
              </div>
            </div>
            <span className="testimonial16-text04 thq-body-small">
              {props.review1}
            </span>
          </div>
          <div className="testimonial16-container05 thq-card">
            <div className="testimonial16-container06">
              <img
                alt={props.author2Alt}
                src={props.author2Src}
                className="testimonial16-image1"
              />
              <div className="testimonial16-container07">
                <strong className="thq-body-large">{props.author2Name}</strong>
                <span className="thq-body-small">{props.author2Position}</span>
              </div>
            </div>
            <span className="testimonial16-text07 thq-body-small">
              {props.review2}
            </span>
          </div>
          <div className="testimonial16-container08 thq-card">
            <div className="testimonial16-container09">
              <img
                alt={props.author3Alt}
                src={props.author3Src}
                className="testimonial16-image2"
              />
              <div className="testimonial16-container10">
                <strong className="thq-body-large">{props.author3Name}</strong>
                <span className="thq-body-small">{props.author3Position}</span>
              </div>
            </div>
            <span className="testimonial16-text10 thq-body-small">
              {props.review3}
            </span>
          </div>
          <div className="testimonial16-container11 thq-card">
            <div className="testimonial16-container12">
              <img
                alt={props.author4Alt}
                src={props.author4Src}
                className="testimonial16-image3"
              />
              <div className="testimonial16-container13">
                <strong className="thq-body-large">{props.author4Name}</strong>
                <span className="thq-body-small">{props.author4Position}</span>
              </div>
            </div>
            <span className="testimonial16-text13 thq-body-small">
              {props.review4}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial16.defaultProps = {
  author1Name: 'John Smith',
  author3Position: 'Online Seller',
  author4Name: 'Michael Chen',
  author2Name: 'Emily Johnson',
  author4Alt: 'Image of Michael Chen',
  author3Src:
    'https://images.unsplash.com/photo-1508905475152-c325323ac955?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTY4OTg4NHw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Position: 'Frequent Sender',
  review3:
    'I love how customizable the delivery options are on SEND IT. I can schedule pickups and drop-offs at my convenience, making my life so much easier.',
  author2Src:
    'https://images.unsplash.com/photo-1641312874336-6279a832a3dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTY4OTg4Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Our Customers Love SEND IT!',
  author1Src:
    'https://images.unsplash.com/photo-1608190003443-86b2636f2fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTY4OTg4M3w&ixlib=rb-4.0.3&q=80&w=1080',
  author4Src:
    'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTY4OTg4Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Alt: 'Image of Sarah Lee',
  review1:
    'SEND IT has made my life so much easier! I can easily track all my deliveries in one place and never miss a package again.',
  review4:
    'SEND IT has saved me so much time and hassle when it comes to sending packages to my family across the country. Highly recommend!',
  author3Name: 'Sarah Lee',
  author1Alt: 'Image of John Smith',
  review2:
    'I run a small business and SEND IT has been a game-changer for managing my deliveries. The notifications are timely and the app is user-friendly.',
  content1:
    'See what our users have to say about their experience with SEND IT.',
  author2Alt: 'Image of Emily Johnson',
  author1Position: 'Freelancer',
  author2Position: 'Small Business Owner',
}

Testimonial16.propTypes = {
  author1Name: PropTypes.string,
  author3Position: PropTypes.string,
  author4Name: PropTypes.string,
  author2Name: PropTypes.string,
  author4Alt: PropTypes.string,
  author3Src: PropTypes.string,
  author4Position: PropTypes.string,
  review3: PropTypes.string,
  author2Src: PropTypes.string,
  heading1: PropTypes.string,
  author1Src: PropTypes.string,
  author4Src: PropTypes.string,
  author3Alt: PropTypes.string,
  review1: PropTypes.string,
  review4: PropTypes.string,
  author3Name: PropTypes.string,
  author1Alt: PropTypes.string,
  review2: PropTypes.string,
  content1: PropTypes.string,
  author2Alt: PropTypes.string,
  author1Position: PropTypes.string,
  author2Position: PropTypes.string,
}

export default Testimonial16
