import React, {useEffect, useState} from 'react';
import { FiUser, FiLock } from 'react-icons/fi';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import '../../../styles/Global.css';
import '../../../styles/pages/AdminLogin.css';

import Layout from '../../../shared/Layout';
import FormInput from '../../../components/FormInput';
import SpinningLoader from '../../../components/Loaders/SpinningLoader';

import loginAdmin from '../../../redux/actions/adminActions/loginAdmin.js';

const AdminLogin = ({loginAdmin, admin}) => {

    const navigate = useNavigate();

    const {loggingInAdmin, username} = admin;

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

    const handleAdminLoginClick = () => {
        if (adminUsername === "") {
            setAdminUsernameError("Username can not be left blank.");
        }
        if (adminPassword === "") {
            setAdminPasswordError("Password can not be left blank.");
        }
        if (adminUsernameError === "" && adminPasswordError === "") {
            let adminInfo = {
                username: adminUsername,
                password: adminPassword,
            }
            loginAdmin(adminInfo)
        }
    }

    useEffect(() => {
        if (username !== "") {
            navigate("/users/admin")
        }
    },[username])

    return (
        <Layout>
            <div className="admin-login-container">
                <div className="section-title-row">
                    <h2 className="section-title">Admin Login</h2>
                </div>
                <div className="form">
                    <div className="form-row">
                        <FormInput inputInfo={usernameInputInfo}/>
                    </div>
                    <div className="form-row">
                        <FormInput inputInfo={passwordInputInfo}/>
                    </div>
                </div>
                <div onClick={handleAdminLoginClick} className="form-login-button">
                    {loggingInAdmin === true ? <SpinningLoader color={'#ffc72c'} /> : "Login"}
                </div>
            </div>
        </Layout>
    )
}
const mapStateToProps = state => {
    return {
        admin: state.admin,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        loginAdmin: (adminInfo) => dispatch(loginAdmin(adminInfo)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AdminLogin);