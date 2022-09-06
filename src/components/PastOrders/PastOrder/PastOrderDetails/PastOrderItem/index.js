import React from 'react'

const PastOrderItem = ({item}) => {

    const {itemInfo, quantity} = item;
    const {description, price } = itemInfo;

    const calculateTotalPrice = () => {
        return (parseInt(quantity) * parseFloat(price)).toFixed(2);
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
                    <div className="item-info-value">${price}</div>
                </div>
            </div>
            <div className="item-info-block-row">
                <div className="item-info-block">
                    <div className="item-info-label"># Ordered</div>
                    <div className="item-info-value">{quantity}</div>
                </div>
                <div className="item-info-block">
                    <div className="item-info-label">Total Price</div>
                    <div className="item-info-value">{calculateTotalPrice()}</div>
                </div>
            </div>
        </div>
    )
}

export default PastOrderItem