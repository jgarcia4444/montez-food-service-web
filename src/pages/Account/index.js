import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import '../../styles/account/Account.css';
import Layout from '../../shared/Layout';


const Account = ({userInfo, logout}) => {

    const navigate = useNavigate();

    const {email, companyName} = userInfo;

    useEffect(() => {
        if (email === "") {
            navigate('/user-auth');
        }
    }, [email])

    return (
        <Layout>
            <div className="logout-row">
                <div onClick={() => logout()} className="logout-button">Logout</div>
            </div>
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