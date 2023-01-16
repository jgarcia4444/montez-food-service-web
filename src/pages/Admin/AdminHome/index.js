import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { useNavigate, Link, useParams } from 'react-router-dom';

import Layout from '../../../shared/Layout';
import PendingOrders from '../../../components/PendingOrders';

import '../../../styles/pages/AdminHome/index.css';
import getClientDetails from '../../../redux/actions/oauthActions/getClientDetails';

const AdminHome = ({admin, logoutAdmin, getClientDetails}) => {

    // const params = useParams();
    // console.log("params from the admin home page", params);

    const queryParams = new URLSearchParams(window.location.search);
    const code = queryParams.get("code");
    console.log("Here is the authorization code", code);
    const realmID = queryParams.get("realmId");
    console.log("Here is the realm id", realmID);

    const {username, quickbooksAuth} = admin;

    const {clientID, clientSecret, fetchingClientDetails, authorizeUrl} = quickbooksAuth;

    const navigate = useNavigate();

    console.log(`Client ID: ${quickbooksAuth.clientID}, Client Secret: ${quickbooksAuth.clientSecret}`);

    const configureLinkPath = () => {
        if (clientID !== "" && clientSecret !== "") {
            let redirectUri = "https://montez-food-service-web.vercel.app/users/admin"
            return `${authorizeUrl}client_id=${clientID}&client_secret=${clientSecret}&redirect_uri=${redirectUri}&scope=com.intuit.quickbooks.accounting&response_type=code&state=authorizationCodeGet`;
        } else {
            return "#"
        }
    }
    useEffect(() => {
        if (username === "") {
            navigate("/");
        } else {
            if (clientID === "" && clientSecret === "") {
                getClientDetails(username);
            } 
        }
    },[])

    return (
        <Layout>
            <div className="admin-home-container">
                <a href={configureLinkPath()} target="_blank">Authorize Quickbooks</a>
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