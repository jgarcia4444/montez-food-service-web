import React from 'react';
import { connect } from 'react-redux';

import "../../../styles/Global.css";

import Layout from '../../../shared/Layout';

const UpdateItemPage = () => {

    return (
        <Layout>
            <div className="update-item-page-container">
                <div className="page-title-row">
                    <h1 className="page-title">Update Item</h1>
                </div>
                <div className="update-item-actions-container">
                    <div className="item-update-container">
                        
                    </div>
                    <div className="update-items-staging-container"></div>
                </div>
            </div>
        </Layout>
    )
}

export default UpdateItemPage