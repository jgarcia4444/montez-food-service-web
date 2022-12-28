import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import fetchOrderDetails from '../../../redux/actions/pendingOrderActions/fetchOrderDetails';

const PendingOrderDetails = ({pendingOrderDetails, fetchOrderDetails}) => {
    const params = useParams();
    const {orderId} = params;

    const {companyName, createdAt, totalPrice, deliveryAddress, items, loadingError} = pendingOrderDetails;

    useEffect(() => {
        if (companyName === "" && loadingError === "") {
            // fetch order details
            fetchOrderDetails(orderId);
        }
    },[companyName])

    return (
        <div className="pending-order-details-container">
            <h2>Pending Order</h2>
        </div>
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