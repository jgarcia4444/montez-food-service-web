import React from 'react';

import '../../../styles/components/PendingOrders/PendingOrder/index.css';

const PendingOrder = ({orderInfo}) => {


    const {created_at, total_price} = orderInfo;

    return (
        <div className="pending-order-container">
            <div className="pending-order-section">
                <p className="pending-order-text"><strong>Total:</strong> ${total_price.toFixed(2)}</p>
            </div>
            <div className="pending-order-section">
                <p className="pending-order-text"><strong>Order Date:</strong> {created_at}</p>
            </div>
        </div>
    )
};

export default PendingOrder;