import React from 'react'
import "./ParcelDetail.css"

function ParcelDetail({parcel, onClose}) {
  return (
    <div className='parceldetailcard'>
      <div className='parcelcardheader'>
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Parcel Details: </h2>
      </div>
      <div className='my-parcel-detail'>
          <p><strong>ID: </strong>{parcel.id}</p>
          <p><strong>Pickup Location: </strong>{parcel.pickup_location}</p>
          <p><strong>Destination: </strong>{parcel.destination}</p>
          <p><strong>Weight: </strong>{parcel.weight}</p>
          <p><strong>Price: </strong>{parcel.price}</p>
          <p><strong>Description: </strong>{parcel.description}</p>
          <p><strong>Status: </strong>{parcel.status}</p>
          <p><strong>User ID: </strong>{parcel.user_id}</p>
      </div>
    </div>
  );
}

export default ParcelDetail
