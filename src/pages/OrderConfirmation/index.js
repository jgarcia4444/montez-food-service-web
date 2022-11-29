import React from 'react';
import { useNavigate } from 'react-router-dom';
import {FiUser} from 'react-icons/fi';
import useReactGA from '../../customHooks/useReactGA';

import '../../styles/pages/OrderConfirmation.css'

const OrderConfirmation = () => {

    const reactGa = useReactGA();

    const navigate = useNavigate();

    return (
        <div className="order-confirmation-container">
            <div className="title-row">
                <h2 className="order-title">Order Confirmation</h2>
            </div>
            <div className="message-row">
                <p className="order-message">
                    Your order has been received. Look out for an email regarding confirmation of your order.
                </p>
            </div>
            <div className="back-to-account-row">
                <div onClick={() => navigate('/users/account')} className="back-button">
                    <p className="back-button-text">
                        Back to account
                    </p> 
                    <FiUser className="back-button-icon" color={"#fff"} size={20} />
                </div>
            </div>
        </div>
    )
}

export default OrderConfirmation;