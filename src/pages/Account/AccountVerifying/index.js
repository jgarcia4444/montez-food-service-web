import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {FiLoader, FiActivity} from 'react-icons/fi';
import { useParams } from 'react-router-dom';

import '../../../styles/account/AccountVerifying.css';
import verifyUser from '../../../redux/actions/userActions/verifyUser';

import Layout from '../../../shared/Layout';

const AccountVerifying = ({verifyUser}) => {

    const {email} = useParams();

    useEffect(() => {
        // verifyUser(email)
    })

    return (
        <Layout>
            <div className="account-verifying-container">
                <h1 className="account-verifying-title">
                    Account Verifying
                </h1>
                <div className="verifying-loader-row">
                    <FiLoader className="verifying-loader" size={96} color={"#a0262e"} />
                </div>
            </div>
        </Layout>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        verifyUser: (email) => dispatch(verifyUser(email)),
    }
}

export default connect(
    null,
    mapDispatchToProps
)(AccountVerifying);
