import React from 'react';
import { connect } from 'react-redux';

import "../../../styles/Global.css";
import '../../../styles/pages/UpdateItemPage/index.css';

import Layout from '../../../shared/Layout';
import UpdateItemForm from '../../../components/UpdateItems/Forms/UpdateItemForm';
import StagedItems from '../../../components/UpdateItems/StagedItems';

const UpdateItemPage = ({stagedItems, }) => {

    return (
        <Layout>
            <div className="update-item-page-container">
                <div className="page-title-row">
                    <h1 className="page-title">Update Item</h1>
                </div>
                <div className="update-item-actions-container">
                    <div className="item-update-container">
                        <UpdateItemForm />
                    </div>
                    <div className="update-items-staging-container">
                        {stagedItems.length !== 0 &&
                            <StagedItems />
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}

const mapStateToProps = state => {
    return {
        stagedItems: state.editItemReducer.stagedItems,
    }
}

export default connect(
    mapStateToProps,
    null
)(UpdateItemPage);