import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Layout from '../../../shared/Layout';
import PendingOrders from '../../../components/PendingOrders';

const AdminHome = ({username, logoutAdmin}) => {

    const navigate = useNavigate();

    useEffect(() => {
        if (username === "") {
            navigate("/");
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
        username: state.admin.username,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logoutAdmin: () => dispatch({type: "LOGOUT_ADMIN"}),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminHome);