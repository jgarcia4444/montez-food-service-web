import React from 'react';
import { useNavigate } from 'react-router-dom';
import {FiMinus} from 'react-icons/fi';
import { connect } from 'react-redux';

import '../../../styles/components/Alerts/UserAuthAlert.css'

const UserAuthAlert = ({closeAuthAlert, items}) => {

    const navigate = useNavigate();

    const handleUserAuthClick = (authAction) => {
        if (authAction === "LOGIN") {
            navigate("/user-auth/login", {
                state: {
                    authState: 'login',
                }
            });
        } else if (authAction === "SIGNUP") {
            navigate("/user-auth/signup", {
                state: {
                    authState: 'signup'
                }
            });
        }
    }

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
                <div onClick={() => handleUserAuthClick("LOGIN")} className="action-button action-login-button">
                        Login
                </div>
            </div>
            <div className="action-row">
                <small><strong>Or</strong></small>
            </div>
            <div className="action-row">
                <div onClick={() => handleUserAuthClick("SIGNUP")} className="action-button action-signup-button">
                        Sign Up
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        items: state.cart.items
    }
}

export default connect(
    mapStateToProps,
    null
)(UserAuthAlert);