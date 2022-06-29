import React, {useState} from 'react';
import '../../styles/userAuth/UserAuth.css'

import Layout from '../../shared/Layout';
import { FiMail, } from 'react-icons/fi'

const UserAuth = () => {

    const [displayState, setDisplayState] = useState('');

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const loginInputs = [
        {
            label: "Email",
            value: loginEmail,
            changeFunction: (val) => setLoginEmail(val),
            error: '',
        },
        {
            label: "Password",
            value: loginPassword,
            changeFunction: (val) => setLoginPassword(val),
            error: '',
        }
    ]

    const renderInputs = (inputs) => {
        return inputs.map(inputInfo => {
            let inputType = inputInfo.label === "Password" ? 'password' : 'text'
            return (
                <div className="input-row">
                    <div className="input-label-row">
                        {inputInfo.label}
                    </div>
                    <input type={inputType} value={inputInfo.value} onChange={inputInfo.changeFunction} />
                </div>
            )
        })
    }

    const actionButtons = (
        <div className='column-flex-container'>
            <div className="action-button-row">
                <div onClick={() => setDisplayState('login')} className="action-button action-login-button">
                    Login
                </div>
            </div>
            <div className="or-row">
                <h5>Or</h5>
            </div>
            <div className="action-button-row">
                <div onClick={() => setDisplayState('signup')} className="action-button action-signup-button">
                    Sign Up
                </div>
            </div>
        </div>
    )

    const loginForm = (
        <div className='column-flex-container'>
            {renderInputs(loginInputs)}
        </div>
    )

    const signupForm = (
        <div className="column-flex-container">

        </div>
    )

    const renderDisplayState = () => {
        switch(displayState) {
            case '':
                return actionButtons;
            case 'login':
                return loginForm;
            case 'signup':
                return signupForm; 
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