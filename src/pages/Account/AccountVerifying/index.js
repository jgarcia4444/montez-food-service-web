import React from 'react';
import {FiLoader, FiActivity} from 'react-icons/fi';

import '../../../styles/account/AccountVerifying.css';

import Layout from '../../../shared/Layout';

const AccountVerifying = () => {

    return (
        <Layout>
            <h1>
                Account Verifying
            </h1>
            <div className="verifying-loader-row">
                <FiLoader className="verifying-loader" size={64} color={"#000"} />
            </div>
        </Layout>
    )
}

export default AccountVerifying;