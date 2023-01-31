import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { useNavigate, Link, useParams } from 'react-router-dom';

import Layout from '../../../shared/Layout';
import PendingOrders from '../../../components/PendingOrders';
import LinkButton from '../../../components/Buttons/LinkButton';

import '../../../styles/pages/AdminHome/index.css';
import getClientDetails from '../../../redux/actions/oauthActions/getClientDetails';
import setAuthCodeAndRealmId from '../../../redux/actions/oauthActions/setauthCodeAndRealmId';
import getTokens from '../../../redux/actions/oauthActions/getTokens';

const AdminHome = ({admin, logoutAdmin, getClientDetails, setAuthCodeAndRealmId, getTokens}) => {

    const {username, quickbooksAuth} = admin;
    const {clientID, clientSecret, fetchingClientDetails, authorizeUrl, authorizationCode, realmID, accessToken, refreshToken} = quickbooksAuth;
    const navigate = useNavigate();

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
            } else if (clientID !== "" && clientSecret !== "") {
                if (authorizationCode === "") {
                    const queryParams = new URLSearchParams(window.location.search);
                    if (queryParams.get('code') !== null) {
                        let code = queryParams.get('code');
                        let iD = queryParams.get("realmId");
                        let infoObject = {
                            authorizationCode: code,
                            realmID: iD
                        };
                        setAuthCodeAndRealmId(infoObject);
                    }
                } else {
                    if (accessToken === "") {
                        let authorizationInfo = {
                            authorizationCode,
                            realmID
                        }
                        getTokens(authorizationInfo);
                    }
                }
            }
        }
    },[username, authorizationCode, clientID])

    return (
        <Layout>
            <div className="admin-home-container">
                {accessToken === "" && 
                    <LinkButton text={"Authorize Quickbooks"} to={configureLinkPath()} />
                }
                
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
        setAuthCodeAndRealmId: (infoObject) => dispatch(setAuthCodeAndRealmId(infoObject)),
        getTokens: (authInfo) => dispatch(getTokens(authInfo)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminHome);