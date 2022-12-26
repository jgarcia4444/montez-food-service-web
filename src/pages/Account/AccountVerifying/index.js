import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {FiLoader, FiActivity} from 'react-icons/fi';
import { useParams, useNavigate } from 'react-router-dom';

import '../../../styles/account/AccountVerifying.css';
import verifyUser from '../../../redux/actions/userActions/verifyUser';

import Layout from '../../../shared/Layout';

const AccountVerifying = ({verifyUser, userInfo}) => {

    const {email} = useParams();
    const navigate = useNavigate();
    const {isVerifying, verificationError, isOrdering, companyName} = userInfo;

    useEffect(() => {
        setTimeout(() => {
            return verifyUser(email);
        }, 2000);
        if (isVerifying === false) {
            if (verificationError === "") {
                if (companyName !== "") {
                    isOrdering === true ? navigate("/order-online") : navigate("/users/account")
                }
            }
        }
    },[isVerifying])

    return (
        <Layout>
            <div className="account-verifying-container">
                <h1 className="account-verifying-title">
                    Account Verifying
                </h1>
                <div className="verifying-loader-row">
                    <FiLoader className={`verifying-loader ${verificationError !== "" ? "stop-loader" : "" }`} size={96} color={"#a0262e"} />
                </div>
                {userInfo.verificationError !== "" &&
                    <div className="account-verification-error-container">
                        <p className="account-verification-error-text">{verificationError}</p>
                    </div>
                }
            </div>
        </Layout>
    )
}

const mapStateToProps = state => {
    return {
        userInfo: state.userReducer.userInfo,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        verifyUser: (email) => dispatch(verifyUser(email)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountVerifying);
