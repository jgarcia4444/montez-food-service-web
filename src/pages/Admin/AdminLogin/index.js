import React, {useEffect, useState} from 'react';
import { FiUser, FiLock } from 'react-icons/fi'

import Layout from '../../../shared/Layout';
import FormInput from '../../../components/FormInput';

const AdminLogin = () => {

    const [adminUsername, setAdminUsername] = useState("");
    const [adminUsernameError, setAdminUsernameError] = useState("");
    const [adminPassword, setAdminPassword] = useState("");
    const [adminPasswordError, setAdminPasswordError] = useState("");

    const usernameInputInfo = {
        label: "Username",
        value: adminUsername,
        changeFunction: val => setAdminUsername(val),
        error: adminUsernameError,
        icon: <FiUser size={24} color={'#ffc72c'}/>,
    }

    const passwordInputInfo = {
        label: "Password",
        value: adminPassword,
        changeFunction: val => setAdminPassword(val),
        error: adminPasswordError,
        icon: <FiLock size={24} color={'#ffc72c'} />
    }

    return (
        <Layout>
            <div className="admin-login-container">
                <div className="form-label-row">
                    <h2 className="form-label">Admin Login</h2>
                </div>
                <div className="form">
                    <div className="form-row">
                        <FormInput inputinfo={usernameInputInfo}/>
                    </div>
                    <div className="form-row">
                        <FormInput inputInfo={passwordInputInfo}/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AdminLogin;