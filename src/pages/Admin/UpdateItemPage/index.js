import React from 'react';
import { connect } from 'react-redux';

import "../../../styles/Global.css";
import '../../../styles/pages/UpdateItemPage/index.css';

import Layout from '../../../shared/Layout';
import UpdateItemForm from '../../../components/UpdateItems/Forms/UpdateItemForm';

const UpdateItemPage = () => {

    return (
        <Layout>
            <div className="update-item-page-container">
                <div className="page-title-row">
                    <h1 className="page-title">Update Item</h1>
                </div>
                <div className="update-item-actions-container">
                    <div className="item-update-container">
                        <UpdateItemForm />
                        <div className="add-to-staging-row">
                            <div className="add-to-staging-button">
                                Add To Staging
                            </div>
                        </div>
                    </div>
                    <div className="update-items-staging-container">
                        {/* <StagedItems /> */}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default UpdateItemPage;