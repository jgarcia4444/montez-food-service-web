
import React from 'react';

import '../../../styles/components/OrderItem.css';

const OrderItem = ({itemInfo}) => {

    const {description, price, quantity, totalPrice} = itemInfo;
    return (
        <div className="order-item-row">
            <div className="order-item-top-row">
                <div className="item-name-container">
                    <div className="item-name-label-row">
                        <h6 className="item-label">
                            Item Name
                        </h6>
                    </div>
                    <div className="item-name-row">
                        <p className="item-value">
                            {description}
                        </p>
                    </div>
                </div>
                <div className="item-total-price-container">
                    <div className="item-total-price-label-row">
                        <h6 className="item-label">
                            Total Price
                        </h6>
                    </div>
                    <div className="item-total-price-row">
                        <p className="item-value">
                            ${totalPrice}
                        </p>
                    </div>
                </div>
            </div>
            <div className="order-item-bottom-row">
                <div className="item-price-per-container">
                    <div className="item-price-per-label-row">
                        <h6 className="item-label">
                            Price Per
                        </h6>
                    </div>
                    <div className="item-price-per-row">
                        <p className="item-value">
                            ${price}
                        </p>
                    </div>
                </div>
                <div className="item-quantity-container">
                    <div className="item-quantity-label-row">
                        <h6 className="item-label">
                            Quantity
                        </h6>
                    </div>
                    <div className="item-quantity-row">
                        <p className="item-value">
                            {quantity}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderItem;