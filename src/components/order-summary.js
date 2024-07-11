import React from 'react'

import PropTypes from 'prop-types'

import './order-summary.css'

const OrderSummary = (props) => {
  let userParcels;
  if (props.parcelData){
    userParcels = props.parcelData.map((parcel,index)=>{
      return (
        <div className="order-summary-container06" key={index}>
          <div className="order-summary-container07">
            <div className="order-summary-container08">{parcel.id}</div>
            <div className="order-summary-container09">{parcel.pickup_location}</div>
            <div className="order-summary-container10">{parcel.status}</div>
            <div className="order-summary-container11">{parcel.destination}</div>
          </div>
        </div>
      )
    })
  }
  return (
    <div className="order-summary-container">
      <h1 className="order-summary-text">{props.heading}</h1>
      <div className="order-summary-container01">
        <div className="order-summary-container02">
          <span className="order-summary-text1">{props.text}</span>
        </div>
        <div className="order-summary-container03">
          <span className="order-summary-text2">{props.text1}</span>
        </div>
        <div className="order-summary-container04">
          <span className="order-summary-text3">{props.text2}</span>
        </div>
        <div className="order-summary-container05">
          <span className="order-summary-text4">{props.text3}</span>
        </div>
      </div>
      {userParcels}
    </div>
  )
}

OrderSummary.defaultProps = {
  heading: 'Order Summary',
  text: 'Parcel ID',
  text1: 'Pickup Location',
  text2: 'Status',
  text3: 'Destination',
}

OrderSummary.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
}

export default OrderSummary