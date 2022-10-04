import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import '../../styles/account/Account.css';
import '../../styles/Global.css';
import Layout from '../../shared/Layout';
import PastOrders from '../../components/PastOrders';


const Account = ({userInfo, logout}) => {

    const navigate = useNavigate();

    const {email, companyName, pastOrders} = userInfo;

    useEffect(() => {
        console.log("PAST ORDERS------", pastOrders)
        if (email === "") {
            navigate('/user-auth');
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
        logout: () => dispatch({type: "USER_LOGOUT"}),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Account);