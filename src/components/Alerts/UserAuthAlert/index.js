import React from 'react';
import {FiMinus} from 'react-icons/fi';

import '../../../styles/components/Alerts/UserAuthAlert.css'

const UserAuthAlert = ({closeAuthAlert}) => {

    return (
        <div className="user-auth-alert-container">
            <div onClick={closeAuthAlert} className="close-btn-container">
                <FiMinus color={'#ff0000'} size={16} />
            </div>
            <div className="message-row">
                <p className="message">
                    You must be logged in to access this feature
                </p>
                <small className="message sub-message">Your order will be saved while you login or create an account.</small>
            </div>
            <div className="action-row">
                <div className="action-button action-login-button">
                        Login
                </div>
            </div>
            <div className="action-row">
                <small><strong>Or</strong></small>
            </div>
            <div className="action-row">
                <div className="action-button action-signup-button">
                        Sign Up
                </div>
            </div>
        </div>
    )
}

export default UserAuthAlert;