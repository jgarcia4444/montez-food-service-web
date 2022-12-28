import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import fetchOrderDetails from '../../../redux/actions/pendingOrderActions/fetchOrderDetails';

import '../../../styles/Global.css';
import '../../../styles/pages/PendingOrderDetails/index.css'

import Layout from '../../../shared/Layout';
import PastOrderItem from '../../../components/PastOrders/PastOrder/PastOrderDetails/PastOrderItem';

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

    const renderItems = () => {
        return items.map((item, i) => <PastOrderItem key={`${item.description}-${i}`} item={item}/>);
    }

    useEffect(() => {
        if (companyName === "" && loadingError === "") {
            fetchOrderDetails(orderId);
        }
    },[companyName])

    return (
        <Layout>
            <div className="section-title-row">
                <h2 className="section-title">Pending Order</h2>
            </div>
            <div className="pending-order-details-container">
                <div className="pending-order-details-row">
                    <div className="order-details-column">
                        <h4 className="order-details-label">Company:</h4>
                        <p className="order-details-value">{companyName}</p>
                    </div>
                    <div className="order-details-column">
                        <h4 className="order-details-label">Order Date:</h4>
                        <p className="order-details-value">{createdAt}</p>
                    </div>
                </div>
                <div className="pending-order-details-row">
                    <div className="order-details-column">
                        <h4 className="order-details-label">Total:</h4>
                        <p className="order-details-value">{totalPrice}</p>
                    </div>
                    <div className="order-details-column">
                        <h4 className="order-details-label">Delivery To:</h4>
                        <p className="order-details-value">{configuredAddress()}</p>
                    </div>
                </div>
                <div className="section-title-row">
                    <h2 className="section-title">Items</h2>
                </div>
                <div className="pending-order-details-items-row">
                    <div className="items-container">
                        {renderItems()}
                    </div>
                </div>
            </div>
            <div className="pending-order-action-row">
                <div className="cancel-pending-order-button">
                    Cancel
                </div>
                <div className="confirm-pending-order-button">
                    Confirm
                </div>
            </div>
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