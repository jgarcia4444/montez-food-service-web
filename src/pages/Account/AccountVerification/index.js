import React, {} from 'react'

import Layout from '../../../shared/Layout'
import '../../../styles/account/AccountVerification.css';

const AccountVerification = () => {
  return (
    <Layout>
        <div className="account-verification-details-container"> 
            <div className="account-verification-title-row">
                <h2 className="account-verification-title">Please verify your account</h2>
            </div>
            <div className="account-verification-message-row">
                <p className="account-verification-message">Check your account registration email for a verification email from <strong>montez.food.service.auth@gmail.com</strong></p>
            </div>
            <div className="account-verification-message-row">
                <p className="account-verification-message">Follow the instructions from within the email to verify your account.</p>
            </div>
        </div>
    </Layout>
  )
}

export default AccountVerification;