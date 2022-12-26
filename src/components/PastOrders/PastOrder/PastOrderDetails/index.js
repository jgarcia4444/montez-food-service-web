import React from 'react'
import { connect } from 'react-redux';

import PastOrderItem from './PastOrderItem'
import '../../../../styles/components/PastOrders/PastOrder/PastOrderDetails/PastOrderDetails.css';

const PastOrderDetails = ({orderDetails}) => {

    const {orderItems, orderAddress} = orderDetails;

    const renderItems = () => {
        return orderItems.map((item, i) => <PastOrderItem item={item} key={`${item.description}-${i}`} />)
    }

    const configuredOrderAddress = () => {
        const {street, city, state, zipCode} = orderAddress;
        return `${street}, ${city}, ${state}, ${zipCode}`;
    }

  return (
    <div className="past-order-details-container">
        <div className="past-order-details-label">
            <h3 className="section-title">Items</h3>
        </div>
        <div className="past-order-items-container">
            {renderItems()}
        </div>
        <div className="order-delivery-row">
            <h3 className="order-delivery-label">Delivery To</h3>
            <p className="order-delivery-value">{configuredOrderAddress()}</p>
        </div>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        orderDetails: state.orderDetails
        
    }
}

export default connect(
    mapStateToProps,
    null
)(PastOrderDetails);