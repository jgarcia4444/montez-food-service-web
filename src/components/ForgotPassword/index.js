import React from 'react';
import '../../styles/forgotPassword/ForgotPassword.css';
import FormInput from '../FormInput';
import { FiMail, FiKey, FiLock } from 'react-icons/fi';

const ForgotPassword = ({newPassword, setNewPassword, email, setEmail, emailError, forgotPasswordState, code, setCode, passwordResetError}) => {

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
        changeFunction: (val) => setCode(val),
        error: passwordResetError,
        icon: <FiKey size={24} color={'#ffc72c'} />
    }

    const inputCode = (
        <FormInput inputInfo={codeInputInfo} />
    )

    const newPasswordInputInfo = {
        label: "New Password",
        value: newPassword,
        changeFunction: val => setNewPassword(val),
        error: passwordResetError,
        icon: <FiLock size={24} color={'#ffc72c'} />
    }

    const newPasswordInput = (
        <FormInput inputInfo={newPasswordInputInfo} />
    )

    const renderInputByState = () => {
        switch(forgotPasswordState) {
            case "checkCode":
                return inputCode;
            case "newPassword":
                return newPasswordInput;
            default:
                return findUser;
        }
    }

    const renderAssociatedText = () => {
        switch(forgotPasswordState) {
            case "newPassword":
                return "Enter a new password";
            case "checkCode":
                return "Check your email inbox for a code (check the spam folder)";
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
