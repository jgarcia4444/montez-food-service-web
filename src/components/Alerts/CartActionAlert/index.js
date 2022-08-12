import React from 'react';
import '../../../styles/components/Alerts/CartActionAlert.css';

import {FiCheckCircle, FiTrash} from 'react-icons/fi';

const CartActionAlert = ({title, message}) => {

    const configureIcon = () => {
        if (title === "Update Success") {
            return <FiCheckCircle size={24} color="#00FF00" />
        } else if (title === "Removed From Cart") {
            return <FiTrash size={24} color="#ff0000" />
        } else {
            return <FiCheckCircle size={24} color="#00FF00" />
        }
    }

    return (
        <div className="cart-action-alert-container">
            <div className="action-title-row">
                <h3>{title}</h3>
            </div>
            <div className="action-icon-row">
                {configureIcon()}
            </div>
            <div className="action-message-row">
                <p className="action-message">{message}</p>
            </div>
        </div>
    )
}

export default CartActionAlert;