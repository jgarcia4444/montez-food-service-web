import React from 'react'
import '../../../../styles/components/PastOrders/OrderAgainButton.css'

const OrderAgainButton = () => {

    const handleOrderAgain = () => {
        console.log("Order Again Clicked!!!")
    }

    return (
        <div className="order-again-button-row">
            <div onClick={handleOrderAgain} className="order-again-button">
                Reorder
            </div>
        </div>
    )
}

export default OrderAgainButton