import React, { useState, } from 'react'
import { connect } from 'react-redux';
import sendOrder from '../../../../redux/actions/cartActions/sendOrder';

import '../../../../styles/components/PastOrders/OrderAgainButton.css';
import ConfirmOrderAgain from '../ConfirmOrderAgain';

const OrderAgainButton = ({orderItems, email, sendOrder}) => {

    const [orderAgainPressed, setOrderAgainPressed] = useState(false);

    const handleSendOrder = () => {
        let orderDetails = {
            order_info: {
                items: orderItems,
            },
            user_info: {
                email
            }
        }
        sendOrder(orderDetails)
    }

    return (
        <div className="order-again-button-row">
            <div onClick={() => setOrderAgainPressed(true)} className="order-again-button">
                Reorder
            </div>
            {orderAgainPressed === true && <ConfirmOrderAgain handleSendOrder={handleSendOrder} />}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        orderItems: state.orderDetails.orderItems,
        email: state.userReducer.userInfo.email,
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