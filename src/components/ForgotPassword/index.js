import React, {useState} from 'react';
import '../../styles/forgotPassword/ForgotPassword.css';
import FormInput from '../FormInput';
import { FiMail } from 'react-icons/fi';

const ForgotPassword = () => {

    const [passwordResetState, setPasswordResetState] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

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

    const renderInputByState = () => {
        switch(passwordResetState) {
            default:
                return findUser;
        }
    }

    const renderAssociatedText = () => {
        switch(passwordResetState) {
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
