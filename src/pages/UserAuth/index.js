import React, {useState} from 'react';
import '../../styles/userAuth/UserAuth.css'

import Layout from '../../shared/Layout';
import { FiMail, } from 'react-icons/fi'

const UserAuth = () => {

    const [displayState, setDisplayState] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [companyName, setCompanyName] = useState('');

    const inputs = [
        {
            label: "Email",
            value: email,
            changeFunction: (val) => setEmail(val),
            error: '',
        },
        {
            label: "Password",
            value: password,
            changeFunction: (val) => setPassword(val),
            error: '',
        },
        {
            label: "Company Name",
            value: companyName,
            changeFunction: (val) => setCompanyName(val),
            error: '',
        }
    ];

    console.log("INPUTS", inputs)

    const renderInputs = (inputs) => {
        return inputs.map(inputInfo => {
            let inputType = inputInfo.label === "Password" ? 'password' : 'text'
            return (
                <div className="input-row">
                    <div className="input-label-row">
                        {inputInfo.label}
                    </div>
                    <input type={inputType} value={inputInfo.value} onChange={(val) => inputInfo.changeFunction(val.target.value)} />
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
            {renderInputs(inputs.slice(0, 2))}
        </div>
    )

    const signupForm = (
        <div className="column-flex-container">
            {renderInputs(inputs)}
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

    const sendButton = (
        <div className='send-button-row'>
            <div className="send-button">
                {displayState === 'login' ? "Login" : "Sign Up"}
            </div>
        </div>
    )

    return (
        <Layout>
            <div className="user-auth-container">
                {renderDisplayState()}
                {displayState !== '' &&
                    sendButton
                }
            </div>
        </Layout>
    )
};

export default UserAuth