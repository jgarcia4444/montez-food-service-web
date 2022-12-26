import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Layout from '../../../shared/Layout';

const AdminHome = ({username}) => {

    const navigate = useNavigate();

    useEffect(() => {
        if (username === "") {
            navigate("/");
        }
    })

    return (
        <Layout>
            <div className="admin-home-container">

            </div>
        </Layout>
    )
}

const mapStateToProps = state => {
    return {
        username: state.admin.username,
    }
}

export default connect(
    mapStateToProps,
    null
)(AdminHome);