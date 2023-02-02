import React, {useState} from 'react';
import { connect } from 'react-redux';
import {FiEdit2} from 'react-icons/fi';

import '../../../../../styles/components/PastOrders/PastOrder/PastOrderDetails/PastOrderItem/PastOrderItem.css';

const PastOrderItem = ({item, adminUsername}) => {

    const {itemInfo, quantity} = item;
    const {description, price, caseBought, caseCost, unitsPerCase } = itemInfo;

    const [isEditing, setIsEditing] = useState(false);

    const calculateTotalPrice = () => {
        let priceToCharge = caseBought === true ? parseFloat(caseCost) : parseFloat(price);
        return (parseFloat(quantity) * priceToCharge).toFixed(2);
    }
//
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
        console.log("Confirm Editing Clicked!");
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
                        <div onClick={() => setIsEditing(false)} className="editing-button cancel-editing-button">Cancel</div>
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

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(PastOrderItem);