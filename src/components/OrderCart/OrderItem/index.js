
import React from 'react';
import {FiTrash, FiEdit} from 'react-icons/fi';
import { connect } from 'react-redux';

import '../../../styles/components/OrderItem.css';

import removeOrderItem from '../../../redux/actions/cartActions/removeOrderItem';

const OrderItem = ({itemInfo, removeOrderItem}) => {

    const {description, price, quantity, totalPrice} = itemInfo;

    const handleEditClick = () => {

    };

    const handleRemoveOrderItem = () => {
        removeOrderItem(description);
    }

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
            <div className="order-item-action-row">
                <FiEdit onClick={handleEditClick} size={16} className="order-item-action-icon" />
                <FiTrash onClick={handleRemoveOrderItem} size={16} className="order-item-action-icon" />
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        removeOrderItem: (itemName) => dispatch(removeOrderItem(itemName)),
    }
}

export default connect(
    null,
    mapDispatchToProps
)(OrderItem);