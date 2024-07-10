import React from 'react'

import PropTypes from 'prop-types'

import './contact-form7.css'

const ContactForm7 = (props) => {
  return (
    <div className="contact-form7-contact1 thq-section-padding">
      <div className="contact-form7-max-width thq-section-max-width thq-flex-row">
        <div className="contact-form7-section-title thq-flex-column">
          <span className="thq-body-small">{props.content2}</span>
          <div className="contact-form7-content">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <span className="thq-body-small contact-form7-text02">
              {props.content1}
            </span>
          </div>
          <div className="contact-form7-content1">
            <div className="contact-form7-row">
              <svg
                viewBox="0 0 1024 1024"
                className="contact-form7-icon thq-icon-small"
              >
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <span className="thq-body-small">{props.email}</span>
            </div>
            <div className="contact-form7-row1">
              <svg
                viewBox="0 0 1024 1024"
                className="contact-form7-icon2 thq-icon-small"
              >
                <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
              </svg>
              <span className="thq-body-small">{props.phone}</span>
            </div>
            <div className="contact-form7-row2">
              <svg
                viewBox="0 0 1024 1024"
                className="contact-form7-icon4 thq-icon-small"
              >
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <span className="thq-body-small">{props.address}</span>
            </div>
          </div>
        </div>
        <form className="contact-form7-form thq-flex-column">
          <div className="contact-form7-container">
            <div className="contact-form7-input">
              <label
                htmlFor="contact-form-7-first-name"
                className="thq-body-small"
              >
                First name
              </label>
              <input
                type="text"
                id="contact-form-7-first-name"
                placeholder="First Name"
                className="contact-form7-text-input thq-input"
              />
            </div>
            <div className="contact-form7-input1">
              <label
                htmlFor="contact-form-7-last-name"
                className="thq-body-small"
              >
                Last name
              </label>
              <input
                type="text"
                id="contact-form-7-last-name"
                placeholder="Last Name"
                className="contact-form7-text-input1 thq-input"
              />
            </div>
          </div>
          <div className="contact-form7-container1">
            <div className="contact-form7-input2">
              <label htmlFor="contact-form-7-email" className="thq-body-small">
                Email
              </label>
              <input
                type="email"
                id="contact-form-7-email"
                required="true"
                placeholder="Email"
                className="contact-form7-text-input2 thq-input"
              />
            </div>
            <div className="contact-form7-input3">
              <label htmlFor="contact-form-7-phone" className="thq-body-small">
                Phone Number
              </label>
              <input
                type="tel"
                id="contact-form-7-phone"
                placeholder="Phone Number"
                className="contact-form7-text-input3 thq-input"
              />
            </div>
          </div>
          <div className="contact-form7-container2">
            <div className="contact-form7-input4">
              <label
                htmlFor="contact-form-7-options"
                className="thq-body-small"
              >
                Choose one topic
              </label>
              <select
                id="contact-form-7-options"
                placeholder="Select one"
                className="contact-form7-select thq-select"
              >
                <option value="Option 1">Customer service</option>
                <option value="Option 1">Parcel Care</option>
                <option value="Option 1">Delayed Parcel</option>
                <option value="Option 2">Courier Queries</option>
                <option value="Option 2">Finance</option>
                <option value="Option 2">Discounts</option>
                <option value="Option 3">Complimentary Feedback</option>
                <option value="Option 3">Feature request</option>
                <option value="Option 3">Website Issue</option>
              </select>
            </div>
          </div>
          <div className="contact-form7-container3">
            <div className="contact-form7-input5">
              <label
                htmlFor="contact-form-7-message"
                className="thq-body-small"
              >
                Message
              </label>
              <textarea
                id="contact-form-7-message"
                rows="3"
                placeholder="Enter your message"
                className="contact-form7-textarea thq-input"
              ></textarea>
            </div>
          </div>
          <div className="contact-form7-checkbox">
            <input
              type="checkbox"
              id="contact-form-7-check"
              checked="true"
              required="true"
              className="thq-checkbox"
            />
            <label htmlFor="contact-form-7-check" className="thq-body-small">
              I accept the Terms
            </label>
          </div>
          <button
            type="submit"
            className="contact-form7-button thq-button-filled"
          >
            <span className="thq-body-small">{props.action}</span>
          </button>
        </form>
      </div>
    </div>
  )
}

ContactForm7.defaultProps = {
  content2:
    'Our customer support team is here to help you with any inquiries or issues you may have.',
  heading1: 'Get in touch with us',
  phone: '+254-700-4567',
  action: 'Contact us now',
  content1: 'Have a question or need assistance?',
  email: 'support@sendit.com',
  address: '755 Mbagadhi Rd, Nairobi, Kenya',
}

ContactForm7.propTypes = {
  content2: PropTypes.string,
  heading1: PropTypes.string,
  phone: PropTypes.string,
  action: PropTypes.string,
  content1: PropTypes.string,
  email: PropTypes.string,
  address: PropTypes.string,
}

export default ContactForm7
