import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './faq122.css'

const FAQ122 = (props) => {
  const [faq4Visible, setFaq4Visible] = useState(false)
  const [faq2Visible, setFaq2Visible] = useState(false)
  const [faq3Visible, setFaq3Visible] = useState(false)
  const [faq1Visible, setFaq1Visible] = useState(false)
  return (
    <div className="faq122-faq8 thq-section-padding">
      <div className="faq122-max-width thq-section-max-width thq-flex-row">
        <div className="faq122-section-title thq-flex-column">
          <div className="faq122-content thq-flex-column">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="thq-body-large">{props.content1}</p>
          </div>
          <Link to="/contact-us" className="faq122-button thq-button-filled">
            <span className="thq-body-small">{props.action}</span>
          </Link>
        </div>
        <div className="faq122-list thq-flex-column">
          <div className="faq122-faq1">
            <div
              onClick={() => setFaq1Visible(!faq1Visible)}
              className="faq122-trigger"
            >
              <p className="faq122-faq1-question thq-body-large">
                {props.faq1Question}
              </p>
              <div className="faq122-icons-container">
                {!faq1Visible && (
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq122-icon">
                      <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                    </svg>
                  </div>
                )}
                {faq1Visible && (
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq122-icon02">
                      <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                    </svg>
                  </div>
                )}
              </div>
            </div>
            {faq1Visible && (
              <div className="faq122-container02">
                <span className="thq-body-small">{props.text}</span>
              </div>
            )}
          </div>
          <div className="faq122-faq2">
            <div
              onClick={() => setFaq2Visible(!faq2Visible)}
              className="faq122-trigger1"
            >
              <p className="faq122-faq2-question thq-body-large">
                {props.faq2Question}
              </p>
              <div className="faq122-icons-container1">
                {!faq2Visible && (
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq122-icon04">
                      <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                    </svg>
                  </div>
                )}
                {faq2Visible && (
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq122-icon06">
                      <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                    </svg>
                  </div>
                )}
              </div>
            </div>
            {faq2Visible && (
              <div className="faq122-container05">
                <span className="thq-body-small">{props.text1}</span>
              </div>
            )}
          </div>
          <div className="faq122-faq3">
            <div
              onClick={() => setFaq3Visible(!faq3Visible)}
              className="faq122-trigger2"
            >
              <p className="faq122-faq2-question1 thq-body-large">
                {props.faq3Question}
              </p>
              <div className="faq122-icons-container2">
                {!faq3Visible && (
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq122-icon08">
                      <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                    </svg>
                  </div>
                )}
                {faq3Visible && (
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq122-icon10">
                      <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                    </svg>
                  </div>
                )}
              </div>
            </div>
            {faq3Visible && (
              <div className="faq122-container08">
                <span className="thq-body-small">{props.text2}</span>
              </div>
            )}
          </div>
          <div className="faq122-faq4">
            <div
              onClick={() => setFaq4Visible(!faq4Visible)}
              className="faq122-trigger3"
            >
              <p className="faq122-faq2-question2 thq-body-large">
                {props.faq4Question}
              </p>
              <div className="faq122-icons-container3">
                {!faq4Visible && (
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq122-icon12">
                      <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                    </svg>
                  </div>
                )}
                {faq4Visible && (
                  <div>
                    <svg viewBox="0 0 1024 1024" className="faq122-icon14">
                      <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                    </svg>
                  </div>
                )}
              </div>
            </div>
            {faq4Visible && (
              <div className="faq122-container11">
                <span className="thq-body-small">{props.text3}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

FAQ122.defaultProps = {
  text2:
    'Yes, you can track your parcel using the parcel ID provided after scheduling a pickup and successfully placing an order..',
  content1:
    'Feel free to contact us for any queries, submissions, or complaints.',
  faq4Question: 'Are your services available 24 hours ?',
  faq2Question: 'What are the delivery options?',
  heading1: 'FAQs',
  faq3Question: 'Can I track my parcel?',
  action: 'Contact Us',
  text1:
    'We offer standard, priority, and express delivery options to suit your needs.',
  text3:
    'Yes, our services are run for 24hrs a day and you schedule a pick up time that offers you the most convenience',
  text: 'Simply enter your parcel details on our website to receive an instant quote based on its weight.',
  faq1Question: 'How do I get a quote?',
}

FAQ122.propTypes = {
  text2: PropTypes.string,
  content1: PropTypes.string,
  faq4Question: PropTypes.string,
  faq2Question: PropTypes.string,
  heading1: PropTypes.string,
  faq3Question: PropTypes.string,
  action: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  faq1Question: PropTypes.string,
}

export default FAQ122
