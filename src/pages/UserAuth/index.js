import React, {useState, useEffect} from 'react';
import '../../styles/userAuth/UserAuth.css';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Layout from '../../shared/Layout';
import { FiUser, FiLock, FiMail, FiChevronLeft } from 'react-icons/fi';
import createUser from '../../redux/actions/userActions/createUser';
import loginUser from '../../redux/actions/userActions/loginUser';
import SpinningLoader from '../../components/Loaders/SpinningLoader';

const UserAuth = ({createUser, userReducer, loginUser}) => {

    const navigate = useNavigate();

    const {loading, userInfo} = userReducer;

    const [displayState, setDisplayState] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [companyNameError, setCompanyNameError] = useState('');

    const inputs = [
        {
            label: "Email",
            value: email,
            changeFunction: (val) => setEmail(val),
            error: emailError,
            icon: <FiMail size={24} color={'#ffc72c'} />
        },
        {
            label: "Password",
            value: password,
            changeFunction: (val) => setPassword(val),
            error: passwordError,
            icon: <FiLock size={24} color={'#ffc72c'} />
        },
        {
            label: "Company Name",
            value: companyName,
            changeFunction: (val) => setCompanyName(val),
            error: companyNameError,
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
                <div key={inputInfo.label} className="input-row">
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

    const handleSendClick = () => {
        if (displayState === 'login') {
            handleLoginPress()
        } else {
            handleSignupPress()
        }
    }

    const handleLoginPress = () => {
        let loginInputs = inputs.slice(0, 2);
        checkForPresenceErrors(loginInputs)
        if (emailError === "" && passwordError === "") {
            let userInfo = {
                email: email,
                password: password
            }
            loginUser(userInfo);
        }
    };

    const handleSignupPress = () => {
        checkForPresenceErrors(inputs)
        if (emailError === "" && passwordError === "" && companyNameError === "") {
            let userInfo = {
                email: email,
                password: password,
                company_name: companyName
            }
            createUser(userInfo);
        }
    }

    const checkForPresenceErrors = (formInputs) => {
        formInputs.forEach(inputInfo => {
            const {label, value} = inputInfo;
            if (value === "") {
                switch(label) {
                    case "Password":
                        setPasswordError("Password cannot be left blank.");
                        break;
                    case "Email":
                        setEmailError('Email cannot be left blank.');
                        break;
                    case "Company Name":
                        setCompanyNameError('Company Name cannot be left blank.');
                        break;
                    default: 
                        break;
                }
            }
        })
    }

    const configureSendText = () => {
        return displayState === 'login' ? "Login" : "Sign Up"
    }

    const sendButton = (
        <div className='send-button-row'>
            <div onClick={handleSendClick} className="send-button">
                {loading === true ? <SpinningLoader color={'#ffc72c'} /> : configureSendText()}
            </div>
        </div>
    )

    const backButton = (
        <div onClick={() => setDisplayState('')} className="back-button-row">
            <FiChevronLeft color={'#00f'} size={20} /> back
        </div>
    )

    useEffect(() => {
        if (userInfo.email !== "") {
            navigate('/users/account');
        }
    }, [userInfo.email])

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

const mapStateToProps = state => {
    return {
        userReducer: state.userReducer,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        createUser: (userInfo) => dispatch(createUser(userInfo)),
        loginUser: (userInfo) => dispatch(loginUser(userInfo)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserAuth);