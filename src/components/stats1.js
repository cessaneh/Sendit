import React from 'react'

import PropTypes from 'prop-types'

import './stats1.css'

const Stats1 = (props) => {
  return (
    <div
      className={`thq-section-padding stats1-container ${props.rootClassName} `}
    >
      <span className="stats1-text thq-body-small">{props.content1}</span>
      <h2 className="stats1-text01 thq-heading-2">{props.heading1}</h2>
      <div className="stats1-container1">
        <div className="stats1-container2">
          <h2 className="stats1-text02 thq-heading-2">{props.stat1}</h2>
          <span className="thq-body-small stats1-text03">
            {props.stat1Description}
          </span>
        </div>
        <div className="stats1-container3">
          <h2 className="stats1-text04 thq-heading-2">{props.stat2}</h2>
          <span className="thq-body-small stats1-text05">
            {props.stat2Description}
          </span>
        </div>
      </div>
      <div className="stats1-container4">
        <div className="stats1-container5">
          <h2 className="stats1-text06 thq-heading-2">{props.stat3}</h2>
          <span className="thq-body-small">{props.stat3Description}</span>
        </div>
        <div className="stats1-container6">
          <h2 className="stats1-text08 thq-heading-2">{props.stat4}</h2>
          <span className="thq-body-small stats1-text09">
            {props.stat4Description}
          </span>
        </div>
      </div>
    </div>
  )
}

Stats1.defaultProps = {
  stat2: '90%',
  image1Src: '9fb124fa-61aa-4335-8622-480330c0df27',
  rootClassName: '',
  stat4Description: 'All of our trusted customers love SEND IT',
  stat1: '80%',
  stat1Description:
    '4 of every 6 Business Owners believe in outsourcing SEND IT for their delivery needs.',
  stat3: '95%',
  heading1: 'Our customers believe that SEND IT does it all',
  content1:
    'At SendIT, we empower you with the ability to create an account and log in with ease. Once you’re in, you can create a parcel delivery order with just a few clicks. But that’s not all! We understand that plans can change, which is why we offer you the flexibility to change the destination of your parcel delivery order anytime before it’s marked as delivered.  Ever had second thoughts about a delivery? With SendIT, you can cancel a parcel delivery order with no hassle. We believe in transparency, which is why we let you see the details of your delivery order at any time. And the best part? You get real-time email notifications whenever there’s a change in the status or location of your parcel.  Join us at SendIT, and experience a courier service that truly delivers on its promises!',
  image1Alt: 'SEND IT Stats',
  stat2Description:
    'In a pull 50 industrial suppliers, 40 are willing to TRUST SEND IT',
  stat4: '100%',
  content2: 'Entrepreneurs are a major part of us',
  stat3Description:
    '4 of every 5 people working at home prefer SEND IT to handle their deliveries.',
}

Stats1.propTypes = {
  stat2: PropTypes.string,
  image1Src: PropTypes.string,
  rootClassName: PropTypes.string,
  stat4Description: PropTypes.string,
  stat1: PropTypes.string,
  stat1Description: PropTypes.string,
  stat3: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  image1Alt: PropTypes.string,
  stat2Description: PropTypes.string,
  stat4: PropTypes.string,
  content2: PropTypes.string,
  stat3Description: PropTypes.string,
}

export default Stats1
