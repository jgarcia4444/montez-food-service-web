import React from 'react'

import PastOrderItem from './PastOrderItem'
import '../../../../styles/components/PastOrders/PastOrder/PastOrderDetails/PastOrderDetails.css';

const PastOrderDetails = ({orderItems}) => {

    const renderItems = () => {
        return orderItems.map((item, i) => <PastOrderItem item={item} key={`${item.description}-${i}`} />)
    }

  return (
    <div className="past-order-details-container">
        <div className="past-order-details-label">
            <h3 className="section-title">Items</h3>
        </div>
        <div className="past-order-items-container">
            {renderItems()}
        </div>
    </div>
  )
}

export default PastOrderDetails