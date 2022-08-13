import React from 'react';
import '../../../styles/components/Alerts/CartActionAlert.css';

import {FiCheckCircle, FiTrash} from 'react-icons/fi';

const CartActionAlert = ({title, message, destructive}) => {

    const configureIcon = () => {
        if (destructive === true) {
            return <FiTrash size={24} color="#ff0000" />
        } else {
            return <FiCheckCircle size={24} color="#00ff00" />
        }
    }

    const dynamicTitleClassName = () => {
        var dynamicClass = "action-title ";
        if (destructive === true) {
            dynamicClass += "destructive"
        };
        return dynamicClass;
    }

    const dynamicMessageClassName = () => {
        var dynamicClass = "action-message ";
        if (destructive === true) {
            dynamicClass += "destructive"
        }
        return dynamicClass;
    }

    return (
        <div className="cart-action-overall-container">
            <div className="cart-action-alert-container">
                <div className="action-title-row">
                    <h3 className={dynamicTitleClassName()}>{title}</h3>
                </div>
                <div className="action-icon-row">
                    {configureIcon()}
                </div>
                <div className="action-message-row">
                    <p className={dynamicMessageClassName()}>{message}</p>
                </div>
            </div>
        </div>
    )
}

export default CartActionAlert;