import React, {useState} from 'react';
import '../../styles/userAuth/UserAuth.css'

import Layout from '../../shared/Layout';

const UserAuth = () => {

    const [displayState, setDisplayState] = useState('');

    const actionButtons = (
        <>
            <div className="action-button-row">
                <div className="action-login-button">
                    Login
                </div>
            </div>
            <div className="action-button-row">
                <div className="action-signup-button">
                    Sign Up
                </div>
            </div>
        </>
    )

    const renderDisplayState = () => {
        switch(displayState) {
            case '':
                return actionButtons;
            // case 'login':
            //     return loginForm;
            // case 'create':
            //     return signupForm; 
            default:
                return actionButtons
        }
    }

    return (
        <Layout>
            <div className="user-auth-container">
                {renderDisplayState()}
            </div>
        </Layout>
    )
};

export default UserAuth