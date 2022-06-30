import React, {useState} from 'react';
import '../../styles/userAuth/UserAuth.css'

import Layout from '../../shared/Layout';
import { FiUser, FiLock, FiMail, FiChevronLeft } from 'react-icons/fi';

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
            icon: <FiMail size={24} color={'#ffc72c'} />
        },
        {
            label: "Password",
            value: password,
            changeFunction: (val) => setPassword(val),
            error: '',
            icon: <FiLock size={24} color={'#ffc72c'} />
        },
        {
            label: "Company Name",
            value: companyName,
            changeFunction: (val) => setCompanyName(val),
            error: '',
            icon: <FiUser size={24} color={'#ffc72c'} />
        }
    ];

    const configureInputType = (label) => {
        switch(label) {
            case "Password":
                return "password";
            case "Email":
                return "email";
            default:
                return "text";
        }
    }

    const renderInputs = (inputs) => {
        return inputs.map(inputInfo => {
            let inputType = configureInputType(inputInfo.label);
            return (
                <div className="input-row">
                    <div className="input-label-row">
                        {inputInfo.label}
                    </div>
                    <div className="input-outer">
                        {inputInfo.icon}
                        <input className="input" type={inputType} value={inputInfo.value} onChange={(val) => inputInfo.changeFunction(val.target.value)} />
                    </div>
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

    const backButton = (
        <div onClick={() => setDisplayState('')} className="back-button-row">
            <FiChevronLeft color={'#00f'} size={20} /> back
        </div>
    )

    return (
        <Layout>
            <div className="user-auth-container">
                {displayState !== '' &&
                    backButton
                }
                {renderDisplayState()}
                {displayState !== '' &&
                    sendButton
                }
            </div>
        </Layout>
    )
};

export default UserAuth