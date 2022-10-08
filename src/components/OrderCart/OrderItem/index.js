
import React, {useState} from 'react';
import {FiTrash, FiEdit} from 'react-icons/fi';
import { connect } from 'react-redux';

import '../../../styles/components/OrderItem.css';


import removeOrderItem from '../../../redux/actions/cartActions/removeOrderItem';
import updateOrderItemQuantity from '../../../redux/actions/cartActions/updateOrderItemQuantity';

const OrderItem = ({itemInfo, removeOrderItem, updateOrderItemQuantity}) => {

    const [editingQuantity, setEditingQuantity] = useState(false);
    const [newQuantityValue, setNewQuantityValue] = useState(itemInfo.quantity)
    const [showDestructiveAlert, setShowDestructiveAlert] = useState(false);
    const [showUpdateAlert, setShowUpdateAlert] = useState(false);

    const {description, price, quantity, totalPrice} = itemInfo;

    const handleRemoveOrderItem = () => {
        removeOrderItem(description);
        setShowDestructiveAlert(true);
        setTimeout(() => setShowDestructiveAlert(false), 2000);
    }

    const handleEditItemClick = () => {
        if (editingQuantity === true) {
            if (newQuantityValue !== quantity) {
                let editOrderItemInfo = {
                    description,
                    newQuantityValue
                }
                updateOrderItemQuantity(editOrderItemInfo)
                setEditingQuantity(false);
                // Show a success message
                setShowUpdateAlert(true);
                setTimeout(() => setShowUpdateAlert(false), 2000);
            }
        } else {
            setEditingQuantity(true);
        }
    }

    const handleOrderItemQuantityChange = (e) => {
        const {value} = e.target;
        if (parseInt(value) < 1) {
            setNewQuantityValue('1');
        } else {
            setNewQuantityValue(value)
        }
    }

    const orderItemQuantity = editingQuantity === false ?
    <p className="item-value">
        {quantity}
    </p> :
    <div className="editing-quantity-input-container">
        <input type="number" className="editing-quantity-input" value={newQuantityValue} onChange={handleOrderItemQuantityChange} />
    </div>

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
                        {orderItemQuantity}
                    </div>
                </div>
            </div>
            <div className="order-item-action-row">
                <FiEdit onClick={handleEditItemClick} size={16} className="order-item-action-icon" />
                <FiTrash onClick={handleRemoveOrderItem} size={16} className="order-item-action-icon" />
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        removeOrderItem: itemName => dispatch(removeOrderItem(itemName)),
        updateOrderItemQuantity: orderItemInfo => dispatch(updateOrderItemQuantity(orderItemInfo)),
    }
}

export default connect(
    null,
    mapDispatchToProps
)(OrderItem);