import React from 'react';
import { connect } from 'react-redux';
import {FiEdit2} from 'react-icons/fi';

import '../../../../../styles/components/PastOrders/PastOrder/PastOrderDetails/PastOrderItem/PastOrderItem.css';

const PastOrderItem = ({item, adminUsername}) => {

    const {itemInfo, quantity} = item;
    const {description, price, caseBought, caseCost, unitsPerCase } = itemInfo;

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

    const configureDescription = () => {
        return caseBought === true ? description + `${description} ${unitsPerCase} case` : description;
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
            {adminUsername !== "" &&
                <div className="order-item-edit-action-row">
                    <div className="order-item-edit-button">
                        <FiEdit2 size={20} color={"#fff"} />
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