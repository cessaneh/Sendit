import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './pricing82.css'

const Pricing82 = (props) => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <div className="pricing82-pricing23 thq-section-padding">
      <div className="pricing82-max-width thq-section-max-width">
        <div className="pricing82-section-title">
          <div className="pricing82-content">
            <h2 className="pricing82-text thq-heading-2">{props.heading1}</h2>
            <p className="pricing82-text01 thq-body-large">{props.content2}</p>
          </div>
        </div>
        {isMonthly && (
          <div className="pricing82-container">
            <div className="pricing82-column thq-card">
              <div className="pricing82-price">
                <div className="pricing82-price01">
                  <p className="pricing82-text02 thq-body-large">
                    {props.plan1}
                  </p>
                  <h3 className="pricing82-text03 thq-heading-3">
                    {props.plan1Price}
                  </h3>
                  <p className="thq-body-large">{props.plan1Yearly}</p>
                </div>
                <div className="pricing82-list">
                  <div className="pricing82-list-item">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="pricing82-icon thq-icon-small"
                    >
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature1}
                    </span>
                  </div>
                  <div className="pricing82-list-item01">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="pricing82-icon02 thq-icon-small"
                    >
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature2}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing82-button thq-button-outline">
                <span className="thq-body-small">{props.plan1Action}</span>
              </button>
            </div>
            <div className="pricing82-column1 thq-card">
              <div className="pricing82-price02">
                <div className="pricing82-price03">
                  <p className="pricing82-text08 thq-body-large">
                    {props.plan2}
                  </p>
                  <h3 className="pricing82-text09 thq-heading-3">
                    {props.plan2Price}
                  </h3>
                  <p className="thq-body-large">{props.plan1Yearly}</p>
                </div>
                <div className="pricing82-list1">
                  <div className="pricing82-list-item02">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="pricing82-icon04 thq-icon-small"
                    >
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature1}
                    </span>
                  </div>
                  <div className="pricing82-list-item03">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="pricing82-icon06 thq-icon-small"
                    >
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature2}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing82-button1 thq-button-filled">
                <span className="thq-body-small">{props.plan2Action}</span>
              </button>
            </div>
            <div className="pricing82-column2 thq-card">
              <div className="pricing82-price04">
                <div className="pricing82-price05">
                  <p className="pricing82-text14 thq-body-large">
                    {props.plan3}
                  </p>
                  <h3 className="pricing82-text15 thq-heading-3">
                    {props.plan3Price}
                  </h3>
                  <p className="thq-body-large">{props.plan1Yearly}</p>
                </div>
                <div className="pricing82-list2">
                  <div className="pricing82-list-item04">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature1}
                    </span>
                  </div>
                  <div className="pricing82-list-item05">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature2}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing82-button2 thq-button-filled">
                <span className="thq-body-small">{props.plan3Action}</span>
              </button>
            </div>
          </div>
        )}
        {!isMonthly && (
          <div className="pricing82-container1">
            <div className="pricing82-column3 thq-card">
              <svg viewBox="0 0 1024 1024" className="pricing82-icon12">
                <path d="M853.333 853.333h-682.667c-70.571 0-128-57.429-128-128v-426.667c0-70.571 57.429-128 128-128h682.667c70.571 0 128 57.429 128 128v426.667c0 70.571-57.429 128-128 128zM170.667 256c-23.509 0-42.667 19.157-42.667 42.667v426.667c0 23.509 19.157 42.667 42.667 42.667h682.667c23.509 0 42.667-19.157 42.667-42.667v-426.667c0-23.509-19.157-42.667-42.667-42.667h-682.667z"></path>
                <path d="M426.667 640h-170.667c-23.595 0-42.667-19.115-42.667-42.667s19.072-42.667 42.667-42.667h170.667c23.595 0 42.667 19.115 42.667 42.667s-19.072 42.667-42.667 42.667z"></path>
                <path d="M426.667 469.333h-170.667c-23.595 0-42.667-19.115-42.667-42.667s19.072-42.667 42.667-42.667h170.667c23.595 0 42.667 19.115 42.667 42.667s-19.072 42.667-42.667 42.667z"></path>
                <path d="M768 448c0 47.128-38.205 85.333-85.333 85.333s-85.333-38.205-85.333-85.333c0-47.128 38.205-85.333 85.333-85.333 47.128 0 85.333 38.205 85.333 85.333z"></path>
                <path d="M682.667 569.856c-66.645 0-106.667 30.507-106.667 60.971 0 15.232 40.021 30.507 106.667 30.507 62.549 0 106.667-15.232 106.667-30.507 0-30.464-41.813-60.971-106.667-60.971z"></path>
              </svg>
              <div className="pricing82-price06">
                <div className="pricing82-price07">
                  <span className="pricing82-text20 thq-body-large">
                    {props.plan11}
                  </span>
                  <h3 className="pricing82-text21 thq-heading-3">
                    {props.plan1Price1}
                  </h3>
                  <span className="thq-body-large">{props.plan1Yearly1}</span>
                </div>
                <div className="pricing82-list3">
                  <div className="pricing82-list-item06">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature11}
                    </span>
                  </div>
                  <div className="pricing82-list-item07">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature21}
                    </span>
                  </div>
                  <div className="pricing82-list-item08">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature31}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing82-button3 thq-button-outline">
                <span className="thq-body-small">{props.plan1Action1}</span>
              </button>
            </div>
            <div className="pricing82-column4 thq-card">
              <svg viewBox="0 0 1024 1024" className="pricing82-icon24">
                <path d="M598 298v-84h-172v84h172zM854 298q34 0 59 26t25 60v128q0 34-25 60t-59 26h-256v-86h-172v86h-256q-36 0-60-25t-24-61v-128q0-34 25-60t59-26h170v-84l86-86h170l86 86v84h172zM426 682h172v-42h298v170q0 36-25 61t-61 25h-596q-36 0-61-25t-25-61v-170h298v42z"></path>
              </svg>
              <div className="pricing82-price08">
                <div className="pricing82-price09">
                  <span className="pricing82-text27 thq-body-large">
                    {props.plan21}
                  </span>
                  <h3 className="pricing82-text28 thq-heading-3">
                    {props.plan2Price1}
                  </h3>
                  <span className="thq-body-large">{props.plan2Yearly1}</span>
                </div>
                <div className="pricing82-list4">
                  <div className="pricing82-list-item09">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature11}
                    </span>
                  </div>
                  <div className="pricing82-list-item10">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature21}
                    </span>
                  </div>
                  <div className="pricing82-list-item11">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature31}
                    </span>
                  </div>
                  <div className="pricing82-list-item12">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature41}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing82-button4 thq-button-filled">
                <span className="thq-body-small">{props.plan2Action1}</span>
              </button>
            </div>
            <div className="pricing82-column5 thq-card">
              <svg viewBox="0 0 1024 1024" className="pricing82-icon34">
                <path d="M768 640v86h-86v-86h86zM768 470v84h-86v-84h86zM854 810v-426h-342v86h86v84h-86v86h86v86h-86v84h342zM426 298v-84h-84v84h84zM426 470v-86h-84v86h84zM426 640v-86h-84v86h84zM426 810v-84h-84v84h84zM256 298v-84h-86v84h86zM256 470v-86h-86v86h86zM256 640v-86h-86v86h86zM256 810v-84h-86v84h86zM512 298h426v598h-852v-768h426v170z"></path>
              </svg>
              <div className="pricing82-price10">
                <div className="pricing82-price11">
                  <span className="pricing82-text35 thq-body-large">
                    {props.plan31}
                  </span>
                  <h3 className="pricing82-text36 thq-heading-3">
                    {props.plan3Price1}
                  </h3>
                  <span className="thq-body-large">{props.plan3Yearly1}</span>
                </div>
                <div className="pricing82-list5">
                  <div className="pricing82-list-item13">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature11}
                    </span>
                  </div>
                  <div className="pricing82-list-item14">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature21}
                    </span>
                  </div>
                  <div className="pricing82-list-item15">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature31}
                    </span>
                  </div>
                  <div className="pricing82-list-item16">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature41}
                    </span>
                  </div>
                  <div className="pricing82-list-item17">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature51}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing82-button5 thq-button-filled">
                <span className="thq-body-small">{props.plan3Action1}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

Pricing82.defaultProps = {
  plan2Feature3: 'Feature text goes here',
  plan2Feature1: '1kg to 5kg',
  plan1Price: 'KES 499',
  plan2Action1: 'Get started',
  plan1: 'Light',
  plan3: 'Heavy',
  plan2Price: 'KES 1,499',
  plan31: 'Enterprise plan',
  plan3Price1: '$499/year',
  plan3Action1: 'Get started',
  plan1Feature3: 'Feature text goes here',
  plan2Feature31: 'Feature text goes here',
  plan1Yearly: 'per parcel',
  plan21: 'Business plan',
  plan2: 'Medium',
  content1: 'Choose the perfect plan for you',
  plan3Feature4: 'Feature text goes here',
  plan3Feature1: 'Per 10kg',
  plan3Feature2: 'Express Delivery',
  plan2Feature41: 'Feature text goes here',
  content2:
    'Choose a plan that fits your needs. Our pricing is based on parcel weight categories, ensuring you get the best value.',
  plan1Feature2: 'Standard Delivery',
  plan11: 'Basic plan',
  plan3Yearly: 'or $499 yearly',
  plan1Feature31: 'Feature text goes here',
  plan2Action: 'Get started',
  plan2Price1: '$299/year',
  heading1: 'Transparent Pricing',
  plan3Price: 'KES 2,499',
  plan3Feature3: 'Feature text goes here',
  plan1Feature1: 'Up to 1kg',
  plan3Action: 'Get started',
  plan1Feature21: 'Feature text goes here',
  plan1Feature11: 'Feature text goes here',
  plan1Yearly1: 'or $20 monthly',
  plan3Feature41: 'Feature text goes here',
  plan1Action1: 'Get started',
  plan3Feature31: 'Feature text goes here',
  plan3Feature5: 'Feature text goes here',
  plan2Feature21: 'Feature text goes here',
  plan1Price1: '$200/year',
  plan2Feature2: 'Priority Delivery',
  plan2Feature4: 'Feature text goes here',
  plan3Feature21: 'Feature text goes here',
  plan3Yearly1: 'or $49 monthly',
  plan2Yearly: 'or $299 yearly',
  plan2Feature11: 'Feature text goes here',
  plan2Yearly1: 'or $29 monthly',
  plan3Feature11: 'Feature text goes here',
  plan1Action: 'Get started',
  plan3Feature51: 'Feature text goes here',
}

Pricing82.propTypes = {
  plan2Feature3: PropTypes.string,
  plan2Feature1: PropTypes.string,
  plan1Price: PropTypes.string,
  plan2Action1: PropTypes.string,
  plan1: PropTypes.string,
  plan3: PropTypes.string,
  plan2Price: PropTypes.string,
  plan31: PropTypes.string,
  plan3Price1: PropTypes.string,
  plan3Action1: PropTypes.string,
  plan1Feature3: PropTypes.string,
  plan2Feature31: PropTypes.string,
  plan1Yearly: PropTypes.string,
  plan21: PropTypes.string,
  plan2: PropTypes.string,
  content1: PropTypes.string,
  plan3Feature4: PropTypes.string,
  plan3Feature1: PropTypes.string,
  plan3Feature2: PropTypes.string,
  plan2Feature41: PropTypes.string,
  content2: PropTypes.string,
  plan1Feature2: PropTypes.string,
  plan11: PropTypes.string,
  plan3Yearly: PropTypes.string,
  plan1Feature31: PropTypes.string,
  plan2Action: PropTypes.string,
  plan2Price1: PropTypes.string,
  heading1: PropTypes.string,
  plan3Price: PropTypes.string,
  plan3Feature3: PropTypes.string,
  plan1Feature1: PropTypes.string,
  plan3Action: PropTypes.string,
  plan1Feature21: PropTypes.string,
  plan1Feature11: PropTypes.string,
  plan1Yearly1: PropTypes.string,
  plan3Feature41: PropTypes.string,
  plan1Action1: PropTypes.string,
  plan3Feature31: PropTypes.string,
  plan3Feature5: PropTypes.string,
  plan2Feature21: PropTypes.string,
  plan1Price1: PropTypes.string,
  plan2Feature2: PropTypes.string,
  plan2Feature4: PropTypes.string,
  plan3Feature21: PropTypes.string,
  plan3Yearly1: PropTypes.string,
  plan2Yearly: PropTypes.string,
  plan2Feature11: PropTypes.string,
  plan2Yearly1: PropTypes.string,
  plan3Feature11: PropTypes.string,
  plan1Action: PropTypes.string,
  plan3Feature51: PropTypes.string,
}

export default Pricing82
