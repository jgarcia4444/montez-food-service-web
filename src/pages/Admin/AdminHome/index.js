import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Layout from '../../../shared/Layout';
import PendingOrders from '../../../components/PendingOrders';

import '../../../styles/pages/AdminHome/index.css';
import getClientDetails from '../../../redux/actions/oauthActions/getClientDetails';

const AdminHome = ({admin, logoutAdmin, getClientDetails}) => {

    const {username, quickbooksAuth} = admin;

    const {clientID, clientSecret, fetchingClientDetails} = quickbooksAuth;

    const navigate = useNavigate();

    useEffect(() => {
        if (username === "") {
            navigate("/");
        } else {
            if (clientID === "" && clientSecret === "") {
                getClientDetails(username);
            }
        }
    })

    return (
        <Layout>
            <div className="admin-home-container">
                <PendingOrders />
                <div className="logout-admin-row">
                    <div onClick={logoutAdmin} className="logout-admin-button">
                        Logout
                    </div>
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
        logoutAdmin: () => dispatch({type: "LOGOUT_ADMIN"}),
        getClientDetails: (adminUsername) => dispatch(getClientDetails(adminUsername)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminHome);