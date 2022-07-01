import React from 'react';
import { connect } from 'react-redux';

import '../../styles/account/Account.css';
import Layout from '../../shared/Layout';


const Account = ({userInfo}) => {

    const {email, companyName} = userInfo;

    return (
        <Layout>
            <div className="account-container">
                <h2>{email}</h2>
                <h2>{companyName}</h2>
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