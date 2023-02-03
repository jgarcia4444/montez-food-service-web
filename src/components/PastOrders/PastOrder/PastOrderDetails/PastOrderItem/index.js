import React, {useState} from 'react';
import { connect } from 'react-redux';
import {FiEdit2} from 'react-icons/fi';

import '../../../../../styles/components/PastOrders/PastOrder/PastOrderDetails/PastOrderItem/PastOrderItem.css';
import updatePendingOrderItem from '../../../../../redux/actions/pendingOrderActions/updatePendingOrderItem';

const PastOrderItem = ({item, adminUsername, updatePendingOrderItem}) => {

    const {itemInfo, quantity} = item;
    const {description, price, caseBought, caseCost, unitsPerCase } = itemInfo;

    const [isEditing, setIsEditing] = useState(false);
    const [editingPrice, setEditingPrice] = useState(price);
    const [editingQunatity, setEditingQuantity] = useState(quantity);

    const calculateTotalPrice = () => {
        if (isEditing === false) {
            let priceToCharge = caseBought === true ? parseFloat(caseCost) : parseFloat(price);
            return (parseFloat(quantity) * priceToCharge).toFixed(2);
        } else {
            let priceToCharge = parseFloat(editingPrice);
            return (parseFloat(editingQunatity) * priceToCharge).toFixed(2);
        }
    }

    const renderPricePer = () => {
        if (caseBought === true) {
            return caseCost;
        } else {
            return price;
        }
    }

    const configureDescription = () => {
        return caseBought === true ? description + `${description} ${unitsPerCase} case` : description;
    }

    const handleConfirmEditingClick = () => {
        console.log("Confirm Clicked!");
        // let updateParams = {

        // };
        // updatePendingOrderItem(updateParams);
    }

    const pricePer = () => {
        let value;
        if (isEditing) {
            value = <input onChange={(e) => setEditingPrice(e.target.value)} type="number" value={editingPrice} />
        } else {
            value = renderPricePer();
        }
        return (
            <div className="item-info-value">
                ${value}
            </div>
        )
    }

    const configurePriceLabel = () => {
        let label;
        if (caseBought === true) {
            label = "Case Price"
        } else {
            label = "Unit Price"
        }
        return (
            <div className="item-info-label">
                {label}
            </div>
        )
    }

    const handleCancelClick = () => {
        setIsEditing(false);
        setEditingPrice(price);
        setEditingQuantity(quantity);
    }

    const configureQuantityLabel = () => {
        if (caseBought === true) {
            return "of Cases";
        } else {
            return "of Units";
        }
    }

    const configureQuantity = () => {
        let body;
        if (isEditing === true) {
            body = <input type="number" value={editingQunatity} onChange={e => setEditingQuantity(e.target.value)} />
        } else {
            body = quantity
        }
        return (
            <div className="item-info-value">
                {body}
            </div>
        )
    }

    return (
        <>
            <div className="past-order-item-container">
                <div className="item-info-block-row">
                    <div className="item-info-block">
                        <div className="item-info-label">Name</div>
                        <div className="item-info-value">{configureDescription()}</div>
                    </div>
                    <div className="item-info-block">
                        {configurePriceLabel()}
                        {pricePer()}
                    </div>
                </div>
                <div className="item-info-block-row">
                    <div className="item-info-block">
                        <div className="item-info-label"># {configureQuantityLabel()}</div>
                        {configureQuantity()}
                    </div>
                    <div className="item-info-block">
                        <div className="item-info-label">Total Price</div>
                        <div className="item-info-value">${calculateTotalPrice()}</div>
                    </div>
                </div>
            </div>
            {(adminUsername !== "" && isEditing === false) &&
                <div className="order-item-edit-action-row">
                    <div onClick={() => setIsEditing(true)} className="order-item-edit-button">
                        <FiEdit2 size={20} color={"#fff"} />
                    </div>
                </div>
            }
            { (adminUsername !== "" && isEditing === true) &&
                <div className="order-item-edit-action-row">
                    <div className="editing-buttons-container">
                        <div onClick={handleCancelClick} className="editing-button cancel-editing-button">Cancel</div>
                        <div onClick={handleConfirmEditingClick} className="editing-button confirm-editing-button">Confirm</div>
                    </div>
                </div>
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        adminUsername: state.admin.username,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updatePendingOrderItem: (itemInfo) => dispatch(updatePendingOrderItem(itemInfo)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(PastOrderItem);