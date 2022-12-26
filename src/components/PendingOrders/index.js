import React from 'react'

import '../../styles/Global.css';

const PendingOrders = () => {

    const renderPendingOrders = () => {
        return ""
    }

    return (
        <div className="pending-orders-container">
            <div className="section-title-row">
                <h2 className="section-title">Pending Orders</h2>
            </div>
            <div className="pending-orders">
                {renderPendingOrders()}
            </div>
        </div>
    )
}

export default PendingOrders