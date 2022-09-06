import React, {useState} from 'react'
import {FiChevronDown} from 'react-icons/fi';

import '../../../styles/components/PastOrders/PastOrder/PastOrder.css';

const PastOrder = ({orderInfo}) => {

    const {items, totalPrice, orderDate} = orderInfo;

    const [showDetails, setShowDetails] = useState(false);

    const totalQuantity = () => {
        let itemsQuantity = 0;
        items.forEach(item => {
            itemsQuantity += parseInt(item.quantity);
        })
        return itemsQuantity;
    }

    return (
        <div className="past-order-container">
            <div className="past-order-info-block">
                <div className="past-order-info-label">
                    Order Date
                </div>
                <div className="past-order-info-value">
                    {orderDate}
                </div>
            </div>
            <div className="past-order-info-block">
                <div className="past-order-info-label">
                    # Of Items
                </div>
                <div className="past-order-info-value">
                    {totalQuantity()}
                </div>
            </div>
            <div className="past-order-info-block">
                <div className="past-order-info-label">
                    Total Price
                </div>
                <div className="past-order-info-value">
                    ${totalPrice}
                </div>
            </div>
            <div className="past-order-details-action-block">
                <FiChevronDown color={'black'} size={24} />
            </div>
        </div>
    )
}


export default PastOrder