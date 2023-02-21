import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import '../../../styles/components/PendingOrders/PendingOrder/index.css';

const PendingOrder = ({orderInfo, accessToken}) => {

    const navigate = useNavigate();

    const {created_at, total_price} = orderInfo;

    const navigateToPendingOrderDetails = () => {
        navigate(`/users/admin/pending-order/${orderInfo.id}`)
    }

    const dayOfTheWeek = (dayIndex) => {
        let dayCipher = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        return dayCipher[dayIndex];
    } 

    const month = (monthIndex) => {
        let monthCipher = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        return monthCipher[monthIndex];
    }

    const formatDate = () => {
        let date = new Date(Date.parse(created_at));
        return `${dayOfTheWeek(date.getDay())}, ${month(date.getMonth())} ${date.getDate()}, ${date.getFullYear()}`
    }

    return (
        <div onClick={navigateToPendingOrderDetails} className="pending-order-container">
            <div className="pending-order-section">
                <p className="pending-order-text"><strong>Total:</strong> ${total_price.toFixed(2)}</p>
            </div>
            <div className="pending-order-section">
                <p className="pending-order-text"><strong>Order Date:</strong> {formatDate()}</p>
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