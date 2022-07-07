import React, {useState} from 'react';
import '../../styles/forgotPassword/ForgotPassword.css';
import FormInput from '../FormInput';
import { FiMail, FiHash, FiLock } from 'react-icons/fi';

const ForgotPassword = ({email, setEmail, emailError, forgotPasswordState, code, setCode, passwordResetError}) => {

    const [passwordResetState, setPasswordResetState] = useState('');

    const findUserInputInfo = {
        label: "Email",
        value: email,
        changeFunction: (val) => setEmail(val),
        error: emailError,
        icon: <FiMail size={24} color={'#ffc72c'} />
    }

    const findUser = (
        <FormInput inputInfo={findUserInputInfo} />
    )

    const codeInputInfo = {
        label: "Code",
        value: code,
        changeFunction: (val) = setCode(val),
        error: passwordResetError,
        icon: <FiHash size={24} color={'#ffc72c'} />
    }

    const inputCode = (
        <FormInput inputInfo={codeInputInfo} />
    )

    const renderInputByState = () => {
        switch(forgotPasswordState) {
            case "code":
                return inputCode;
            default:
                return findUser;
        }
    }

    const renderAssociatedText = () => {
        switch(forgotPasswordState) {
            default:
                return "Enter the email associated with your account:"
        }
    }


    return (
        <div className="column-flex-container">
            <p className="description-text">{renderAssociatedText()}</p>
            
            {renderInputByState()}
        </div>
    )
};

export default ForgotPassword;
