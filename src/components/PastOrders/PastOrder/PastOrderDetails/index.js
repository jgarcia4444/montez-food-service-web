import React from 'react'
import { connect } from 'react-redux';

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

const mapStateToProps = state => {
    return {
        orderItems: state.orderDetails.orderItems,
    }
}

export default connect(
    mapStateToProps,
    null
)(PastOrderDetails);