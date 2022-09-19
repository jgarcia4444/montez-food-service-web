import React, { useState, } from 'react'
import { connect } from 'react-redux';
import sendOrder from '../../../../redux/actions/cartActions/sendOrder';

import '../../../../styles/components/PastOrders/OrderAgainButton.css';
import ConfirmOrderAgain from '../ConfirmOrderAgain';

const OrderAgainButton = ({orderItems, email, sendOrder, orderSendError}) => {

    const [orderAgainPressed, setOrderAgainPressed] = useState(false);

    const handleSendOrder = () => {
        let itemsFormattedForBackend = formatItems(orderItems)
        let orderDetails = {
            items: itemsFormattedForBackend,
            email,
        }
        sendOrder(orderDetails)
    }

    const formatItems = (items) => {
        return items.map(item => {
            return {
                price: item.itemInfo.price,
                quantity: item.quantity,
                description: item.itemInfo.description,
            }
        })
    }

    return (
        <div className="order-again-button-row">
            <div onClick={() => setOrderAgainPressed(true)} className="order-again-button">
                Reorder
            </div>
            {orderAgainPressed === true && <ConfirmOrderAgain dismissConfirm={() => setOrderAgainPressed(false)} handleSendOrder={handleSendOrder} />}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        orderItems: state.orderDetails.orderItems,
        email: state.userReducer.userInfo.email,
        orderSendError: state.cart.orderSendError,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendOrder: (orderDetails) => dispatch(sendOrder(orderDetails)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderAgainButton);