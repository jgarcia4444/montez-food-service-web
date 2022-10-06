import React, {useState, useEffect} from 'react';
import '../../styles/userAuth/UserAuth.css';
import { connect, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

import Layout from '../../shared/Layout';
import { FiUser, FiLock, FiMail, FiChevronLeft } from 'react-icons/fi';
import createUser from '../../redux/actions/userActions/createUser';
import loginUser from '../../redux/actions/userActions/loginUser';
import SpinningLoader from '../../components/Loaders/SpinningLoader';
import FormInput from '../../components/FormInput';
import ForgotPassword from '../../components/ForgotPassword';
import sendResetCode from '../../redux/actions/userActions/sendResetCode';
import checkCode from '../../redux/actions/userActions/checkCode';
import changePassword from '../../redux/actions/userActions/changePassword';

const UserAuth = ({createUser, userReducer, loginUser, sendResetCode, checkCode, changePassword}) => {

    const navigate = useNavigate();
    const location = useLocation();
    const authState = location.state !== null ? location.state.authState : "";

    const {loading, userInfo, loggingInError, loginErrors, signupErrors, userCreationError, passwordResetError} = userReducer;

    const {otaCode} = userInfo;

    const [displayState, setDisplayState] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [companyNameError, setCompanyNameError] = useState('');
    const [genericError, setGenericError] = useState('');
    const [forgotPasswordState, setForgotPasswordState] = useState('');
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const dispatch = useDispatch();

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

    const renderInputs = (inputs) => {
        return inputs.map(inputInfo => {    
            return <FormInput key={inputInfo.label} inputInfo={inputInfo} />
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
            {genericError !== "" && 
                <small className="generic-error">{genericError}</small>
            }
            {renderInputs(inputs.slice(0, 2))}
            <div className="forgot-password-button-row">
                <div className="forgot-password-button" onClick={() => setDisplayState('forgot')}>
                    Forgot Password
                </div>
            </div>
        </div>
    )

    const signupForm = (
        <div className="column-flex-container">
            {genericError !== "" && 
                <small className="generic-error">{genericError}</small>
            }
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
            case 'forgot':
                return <ForgotPassword newPassword={newPassword} setNewPassword={setNewPassword} code={code} setCode={setCode} forgotPasswordState={forgotPasswordState} emailError={emailError} email={email} setEmail={setEmail} />
            default:
                return actionButtons
        }
    }

    const handleSendClick = () => {
        if (displayState === 'login') {
            handleLoginPress()
        } else if (displayState === 'signup') {
            handleSignupPress()
        } else if (displayState === 'forgot') {
            if (forgotPasswordState === "checkCode") {
                handleCheckCodePress()
            } else if (forgotPasswordState === "newPassword") {
                handlePasswordChange()
            } else {
                handleSendCodePress()
            }
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

    const handleSignupPress = async () => {
        clearErrors();
        checkForPresenceErrors(inputs)
        if (emailError === "" && passwordError === "" && companyNameError === "") {
            let userInfo = {
                email: email,
                password: password,
                company_name: companyName,
                is_ordering: authState === "signup" ? true : false,
            }
            createUser(userInfo);
        }
    }

    const handleSendCodePress = async () => {
        clearErrors();
        checkForPresenceErrors(inputs.slice(0, 1));
        if (emailError === "") {
            let backendUserInfo = {
                email: email,
            }
            await sendResetCode(backendUserInfo)
            if (passwordResetError === "") {
                setForgotPasswordState('checkCode');
            }
        }
    };

    const handleCheckCodePress = async () => {
        clearErrors();
        if (code === "") {
            dispatch({type: "PASSWORD_RESET_ERROR", errorMessage: "Code cannot be left blank"})
        } else {
            let backendUserInfo = {
                email: userInfo.email,
                ota_code: code,
            }
            await checkCode(backendUserInfo);
            if (passwordResetError === "") {
                setForgotPasswordState('newPassword')
            }
        }
    }

    const handlePasswordChange = async () => {
        clearErrors();
        if (newPassword !== "") {
            let backendUserInfo = {
                email: userInfo.email,
                ota_code: otaCode, 
                new_password: newPassword,
            }
            await changePassword(backendUserInfo);
        } else {
            dispatch({type: "PASSWORD_RESET_ERROR", errorMessage: "New Password cannot be left empty."})
        }
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
        setCompanyNameError('');
    }

    const checkForPresenceErrors = (formInputs) => {
        formInputs.forEach(inputInfo => {
            const {label, value} = inputInfo;
            if (value === "") {
                switch(label) {
                    case "Password":
                        setPasswordError("cannot be left blank.");
                        break;
                    case "Email":
                        setEmailError('cannot be left blank.');
                        break;
                    case "Company Name":
                        setCompanyNameError('cannot be left blank.');
                        break;
                    default: 
                        break;
                }
            }
        })
    }

    const configureSendText = () => {
        if (displayState === "login") {
            return "Login";
        } else if (displayState === "signup") {
            return "Sign Up"
        } else if (displayState === "forgot") {
            if (forgotPasswordState === 'checkCode') {
                return 'Check Code';
            } else if (forgotPasswordState === "newPassword") {
                return "Set Password";
            } else {
                return "Send Code";
            }
        }
    }

    const sendButton = (
        <div className='send-button-row'>
            <div onClick={handleSendClick} className="send-button">
                {loading === true ? <SpinningLoader color={'#ffc72c'} /> : configureSendText()}
            </div>
        </div>
    )

    const handleBackPress = () => {
        setEmailError('');
        setPasswordError('');
        setCompanyNameError('');
        setDisplayState('');
        setForgotPasswordState('')
    } 

    const backButton = (
        <div onClick={handleBackPress} className="back-button-row">
            <FiChevronLeft color={'#a0262e'} size={20} /> Back
        </div>
    )

    const configureGenericError = (error) => {
        if (error !== "") {
            setGenericError(error);
        } else {
            setGenericError('');
        }
    };

    const configureSpecificErrors = (errors) => {
        if (errors.length > 0) {
            errors.forEach(error => {
                let {errorLabel, message} = error;
                if (errorLabel === "email") {
                    setEmailError(message);
                } else if (errorLabel === "password") {
                    setPasswordError(message);
                } else {
                    setCompanyNameError(message);
                }
            });
        } else {
            setEmailError('');
            setPasswordError('');
            setCompanyNameError('');
        }
    }

    useEffect(() => {
        if (authState !== "") {
            if (authState === "login") {
                setDisplayState('login');
            } else if (authState === "signup") {
                setDisplayState('signup');
            }
        } 
        if (displayState === 'login') {
            if (loginErrors.length === 0 && loggingInError === "") {
                if (userInfo.email !== "" && userInfo.companyName !== "") {
                    if (authState === "login") {
                        navigate("/order-online");
                    } else {
                        navigate('/users/account')
                    }
                }
            } else {
                configureGenericError(loggingInError);
                configureSpecificErrors(loginErrors);
            }
        } else if (displayState === 'signup') {
            if (signupErrors.length === 0 && userCreationError === "") {
                if (userInfo.email !== "" && userInfo.companyName !== "") {

                    if (authState === "signup") {
                        navigate('/users/account/verify', {
                            state: {
                                isMidOrder: true
                            }
                        })

                    } else {
                        navigate('/users/account/verify', {
                            state: {
                                isMidOrder: false
                            }
                        });
                    }
                }
            } else {
                configureGenericError(userCreationError);
                configureSpecificErrors(signupErrors);
            }
        } else if (displayState === "forgot") {
            if (forgotPasswordState === "newPassword" && userInfo.companyName !== "") {
                navigate('/users/account');
            }
        } 
    }, [userInfo.companyName, userInfo.email, loginErrors, loggingInError, signupErrors, userCreationError]);

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
        sendResetCode: (userInfo) => dispatch(sendResetCode(userInfo)),
        checkCode: (userInfo) => dispatch(checkCode(userInfo)),
        changePassword: (userInfo) => dispatch(changePassword(userInfo)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserAuth);