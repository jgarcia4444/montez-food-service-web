import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import '../../../styles/Global.css';
import '../../../styles/pages/PendingOrderDetails/index.css'

import Layout from '../../../shared/Layout';
import PastOrderItem from '../../../components/PastOrders/PastOrder/PastOrderDetails/PastOrderItem';
import ConfirmationForm from '../../../components/PendingOrders/PendingOrder/ConfirmationForm';
import CancelConfirmation from '../../../components/PendingOrders/PendingOrder/CancelConfirmation';

import fetchOrderDetails from '../../../redux/actions/pendingOrderActions/fetchOrderDetails';
import cancelOrder from '../../../redux/actions/pendingOrderActions/cancelOrder';

const PendingOrderDetails = ({cancelOrder, pendingOrderDetails, fetchOrderDetails}) => {

    const navigate = useNavigate();
    const params = useParams();
    const {orderId} = params;

    const {companyName, createdAt, totalPrice, deliveryAddress, items, loadingError, cancelOrderError} = pendingOrderDetails;

    const [showForm, setShowForm] = useState(false);
    const [showCancelConfirmation, setShowCancelConfirmation] = useState(false);
    const [reasonText, setReasonText] = useState("");
    const [reasonTextError, setReasonTextError] = useState("");

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

    const navigateToAdminHome = () => {
        navigate('/users/admin');
    }

    const handleConfirmCancel = () => {
        setReasonTextError("");
        if (reasonText === "") {
            setReasonTextError("A reason must be specified");
        }
        if (reasonTextError === "") {
            let orderInfo = {
                order_id: parseInt(orderId),
                reason_text: reasonText
            }
            cancelOrder(orderInfo);
            if (cancelOrderError === "") {
                setTimeout(navigateToAdminHome, 1500);
            }
        }
    }

    useEffect(() => {
        if (companyName === "" && loadingError === "") {
            fetchOrderDetails(orderId);
        }
    },[companyName])

    return (
        <Layout>
            {showForm === true &&
                <ConfirmationForm dismissForm={() => setShowForm(false)} />
            }
            {showCancelConfirmation === true &&
                <CancelConfirmation reasonTextError={reasonTextError} reasonText={reasonText} setReasonText={setReasonText} dismiss={() => setShowCancelConfirmation(false)} handleConfirmCancel={handleConfirmCancel} />
            }
            <div className="section-title-row">
                <h2 className="section-title">Pending Order</h2>
                <div onClick={navigateToAdminHome} className="admin-home-button">
                    Home
                </div>
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
                <div onClick={() => setShowCancelConfirmation(true)} className="cancel-pending-order-button">
                    Cancel
                </div>
                <div onClick={() => setShowForm(true)} className="confirm-pending-order-button">
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
        fetchOrderDetails: (orderId) => dispatch(fetchOrderDetails(orderId)),
        cancelOrder: (orderInfo) => dispatch(cancelOrder(orderInfo)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PendingOrderDetails);