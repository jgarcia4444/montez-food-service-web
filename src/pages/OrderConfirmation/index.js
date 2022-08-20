import React from 'react';

import '../../styles/pages/OrderConfirmation.css'

const OrderConfirmation = () => {

    return (
        <div className="order-confirmation-container">
            <div className="title-row">
                <h2 className="order-title">Order Confirmation</h2>
            </div>
            <div className="message-row">
                <p className="order-message">
                    Your order has been received. Look out for an email regarding confirmation of your order.
                </p>
            </div>
        </div>
    )
}

export default OrderConfirmation;