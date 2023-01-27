import React from 'react';

import '../../../../../styles/components/PastOrders/PastOrder/PastOrderDetails/PastOrderItem/PastOrderItem.css';

const PastOrderItem = ({item}) => {

    const {itemInfo, quantity} = item;
    const {description, price, caseBought, caseCost } = itemInfo;

    const calculateTotalPrice = () => {
        let priceToCharge = caseBought === true ? parseFloat(caseCost) : parseFloat(price);
        return (parseFloat(quantity) * priceToCharge).toFixed(2);
    }

    const renderPricePer = () => {
        if (caseBought === true) {
            return caseCost;
        } else {
            return price;
        }
    }

    return (
        <div className="past-order-item-container">
            <div className="item-info-block-row">
                <div className="item-info-block">
                    <div className="item-info-label">Name</div>
                    <div className="item-info-value">{description}</div>
                </div>
                <div className="item-info-block">
                    <div className="item-info-label">Price Per</div>
                    <div className="item-info-value">${renderPricePer()}</div>
                </div>
            </div>
            <div className="item-info-block-row">
                <div className="item-info-block">
                    <div className="item-info-label"># Ordered</div>
                    <div className="item-info-value">{quantity}</div>
                </div>
                <div className="item-info-block">
                    <div className="item-info-label">Total Price</div>
                    <div className="item-info-value">${calculateTotalPrice()}</div>
                </div>
            </div>
        </div>
    )
}

export default PastOrderItem