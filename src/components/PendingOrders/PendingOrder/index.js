import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import '../../../styles/components/PendingOrders/PendingOrder/index.css';

const PendingOrder = ({orderInfo, accessToken}) => {

    const navigate = useNavigate();

    const {created_at, total_price} = orderInfo;

    const navigateToPendingOrderDetails = () => {
        if (accessToken !== "") {
            navigate(`/users/admin/pending-order/${orderInfo.id}`)
        }
    }

    return (
        <div onClick={navigateToPendingOrderDetails} className="pending-order-container">
            <div className="pending-order-section">
                <p className="pending-order-text"><strong>Total:</strong> ${total_price.toFixed(2)}</p>
            </div>
            <div className="pending-order-section">
                <p className="pending-order-text"><strong>Order Date:</strong> {created_at}</p>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        accessToken: state.admin.quickbooksAuth.accessToken
    }
}

export default connect(
    mapStateToProps,
    null
)(PendingOrder);