import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ReactGA from 'react-ga';

import '../../styles/account/Account.css';
import '../../styles/Global.css';
import Layout from '../../shared/Layout';
import PastOrders from '../../components/PastOrders';
import logout from '../../redux/actions/userActions/logout';
import Locations from '../../components/Locations';


const Account = ({userInfo, logout}) => {

    const navigate = useNavigate();

    const {email, companyName, pastOrders} = userInfo;
    console.log("Users Info", userInfo);

    useEffect(() => {
        if (email === "") {
            navigate('/user-auth');
        } else {
            ReactGA.initialize('G-7380SQJ6M9');
            ReactGA.pageview('/users/account')
        }
    }, [email, navigate, pastOrders])

    return (
        <Layout>
            <div className="logout-row">
                <div onClick={() => logout()} className="logout-button">Logout</div>
            </div>
            <div className="section-title-row">
                <h2 className="section-title">Account Info</h2>
            </div>
            <div className="account-container">
                <div className="user-information-container">
                    <div className="user-information-row">
                        <div className="user-information-section-label-row">
                            <h2 className="information-section-label">Email</h2>
                        </div>
                        <h4 className="user-information">Primary Email: <strong>{email}</strong></h4>
                    </div>
                    <div className="user-information-row">
                        <div className="user-information-section-label-row">
                            <h2 className="information-section-label">Company Information</h2>
                        </div>
                        <h4 className="user-information">Name: <strong>{companyName}</strong></h4>
                    </div>
                </div>
                <PastOrders />
                <Locations />
            </div>
        </Layout>
    )
};

const mapStateToProps = state => {
    return {
        userInfo: state.userReducer.userInfo,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Account);