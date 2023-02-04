import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import {FiEdit2} from 'react-icons/fi';

import '../../../../../styles/components/PastOrders/PastOrder/PastOrderDetails/PastOrderItem/PastOrderItem.css';

import updatePendingOrderItem from '../../../../../redux/actions/pendingOrderActions/updatePendingOrderItem';

import SpinningLoader from '../../../../Loaders/SpinningLoader';

const PastOrderItem = ({item, adminUsername, updatePendingOrderItem, pendingOrderDetails}) => {

    const {itemInfo, quantity} = item;
    const {description, price, caseBought, caseCost, unitsPerCase, id} = itemInfo;
    const {itemEditProcessing, itemEditError} = pendingOrderDetails;

    const [isEditing, setIsEditing] = useState(false);
    const [editingPrice, setEditingPrice] = useState(caseBought === true ? caseCost : price);
    const [editingQuantity, setEditingQuantity] = useState(quantity);

    const params = useParams();
    const {orderId} = params;

    const calculateTotalPrice = () => {
        if (isEditing === false) {
            let priceToCharge = caseBought === true ? parseFloat(caseCost) : parseFloat(price);
            return (parseFloat(quantity) * priceToCharge).toFixed(2);
        } else {
            let priceToCharge = parseFloat(editingPrice);
            return (parseFloat(editingQuantity) * priceToCharge).toFixed(2);
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
        let updateParams = {
            user_order_id: orderId,
            order_item_info: {
                order_item_id: id,
                quantity: editingQuantity,
                price: caseBought === true ? price : editingPrice,
                case_cost: caseBought === true ? editingPrice : caseCost,
            },
            case_bought: caseBought,
            admin_info: {
                username: adminUsername
            }
        };
        updatePendingOrderItem(updateParams);
        if (itemEditError === "") {
            setIsEditing(false);
            setEditingQuantity(quantity);
            if (caseBought === true) {
                setEditingPrice(caseCost);
            } else {
                setEditingPrice(price);
            }
        }
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
            body = <input type="number" value={editingQuantity} onChange={e => setEditingQuantity(e.target.value)} />
        } else {
            body = quantity
        }
        return (
            <div className="item-info-value">
                {body}
            </div>
        )
    }

    const itemError = (
        <div className="item-error-row">
            <p className="item-error">{itemEditError}</p>
        </div>
    )

    const itemProcessing = (
        <div className="item-processing-container">
            <SpinningLoader color={"#ffc72c"}/>
        </div>
    )

    return (
        <>
            <div className="past-order-item-container">
                {itemEditError !== "" &&
                    itemError
                }
                {itemEditProcessing === true &&
                    itemProcessing
                }
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
        pendingOrderDetails: state.pendingOrderDetails,
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