import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import fetchOrderDetails from '../../../redux/actions/pendingOrderActions/fetchOrderDetails';

import '../../../styles/Global.css';
import '../../../styles/pages/PendingOrderDetails/index.css'

import Layout from '../../../shared/Layout';

const PendingOrderDetails = ({pendingOrderDetails, fetchOrderDetails}) => {
    const params = useParams();
    const {orderId} = params;

    const {companyName, createdAt, totalPrice, deliveryAddress, items, loadingError} = pendingOrderDetails;


    const configuredAddress = () => {
        if (deliveryAddress !== null) {
            const {street, city, state, zipCode} = deliveryAddress;
            return `${street}, ${city}, ${state}, ${zipCode}`;
        } else {
            return '';
        }
    }

    useEffect(() => {
        if (companyName === "" && loadingError === "") {
            fetchOrderDetails(orderId);
        }
    },[companyName])

    return (
        <Layout>
            <div className="pending-order-details-container">
                <div className="section-title-row">
                    <h2 className="section-title">Pending Order</h2>
                </div>
                <div className="pending-order-details-row">
                    <div className="order-details-label-container">
                        <h4 className="order-details-label">Company:</h4>
                    </div>
                    <div className="order-details-value-container">
                        <p className="order-details-value">{companyName}</p>
                    </div>
                    <div className="order-details-label-container">
                        <h4 className="order-details-label">Order Date:</h4>
                    </div>
                    <div className="order-details-value-container">
                        <p className="order-details-value">{createdAt}</p>
                    </div>
                </div>
                <div className="pending-order-details-row">
                    <div className="order-details-label-container">
                        <h4 className="order-details-label">Total:</h4>
                    </div>
                    <div className="order-details-value-container">
                        <p className="order-details-value">{totalPrice}</p>
                    </div>
                    <div className="order-details-label-container">
                        <h4 className="order-details-label">Delivery To:</h4>
                    </div>
                    <div className="order-details-value-container">
                        <p className="order-details-value">{configuredAddress()}</p>
                    </div>
                </div>
                <div className="pending-order-details-row"></div>
            </div>
            <div className="pending-order-action-row"></div>
        </Layout>
    )
}

const mapStateToProps = state => {
    return {
        pendingOrderDetails: state.pendingOrderDetails,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOrderDetails: (orderId) => dispatch(fetchOrderDetails(orderId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PendingOrderDetails);