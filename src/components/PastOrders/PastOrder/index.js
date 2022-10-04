import React, {useState} from 'react'
import { connect } from 'react-redux';
import {FiList} from 'react-icons/fi';

import '../../../styles/components/PastOrders/PastOrder/PastOrder.css';

import PastOrderDetails from './PastOrderDetails';

import presentOrderDetails from '../../../redux/actions/orderDetailsPresentationActions/presentOrderDetails';

const PastOrder = ({orderInfo, presentOrderDetails}) => {

    const {items, totalPrice, orderDate} = orderInfo;
    console.log(orderInfo);

    const [showDetails, setShowDetails] = useState(false);

    const totalQuantity = () => {
        let itemsQuantity = 0;
        items.forEach(item => {
            itemsQuantity += parseInt(item.quantity);
        })
        return itemsQuantity;
    }

    const renderDetails = () => {
        return showDetails === true && <PastOrderDetails orderItems={items} />
    }


    const configuredDate = () => {
        let pastOrderDate = new Date(orderDate);
        let day = getLetterDay(pastOrderDate);
        let month = getLetterMonth(pastOrderDate);
        let date = pastOrderDate.getDate();
        let year = pastOrderDate.getFullYear();
        return `${day}, ${month} ${date}, ${year}`;
    };

    const getLetterDay = (pastOrderDate) => {
        switch(pastOrderDate.getDay()) {
            case 0:
                return "Sun";
            case 1:
                return "Mon";
            case 2:
                return "Tues";
            case 3: 
                return "Wed";
            case 4:
                return "Thur";
            case 5:
                return "Fri";
            case 6: 
            return "Sat";
            default: 
                return "Mon"
        }
    }

    const getLetterMonth = (pastOrderDate) => {
        switch(pastOrderDate.getMonth()) {
            case 0: 
                return "Jan";
            case 1:
                return "Feb";
            case 2: 
                return "Mar";
            case 3: 
                return "Apr";
            case 4:
                return "May";
            case 5:
                return "Jun";
            case 6:
                return "Jul";
            case 7:
                return "Aug";
            case 8: 
                return "Sep";
            case 9: 
                return "Oct";
            case 10: 
                return "Nov";
            case 11:
                return "Dec";
            default:
                return "Jan";
        }
    }

    const handleOrderDetailsClick = () => {
        presentOrderDetails(orderInfo);
    }

    return (
        <div className="past-order-container">
            <div className="past-order-info-block">
                <div className="past-order-info-label">
                    Order Date
                </div>
                <div className="past-order-info-value">
                    {configuredDate()}
                </div>
            </div>
            <div className="past-order-info-block">
                <div className="past-order-info-label">
                    # Of Items
                </div>
                <div className="past-order-info-value">
                    {totalQuantity()}
                </div>
            </div>
            <div className="past-order-info-block">
                <div className="past-order-info-label">
                    Total Price
                </div>
                <div className="past-order-info-value">
                    ${totalPrice.toFixed(2)}
                </div>
            </div>
            <div onClick={handleOrderDetailsClick} className="past-order-details-action-block">
                <FiList className="past-order-details-button" color={'#ffc72c'} size={24} />
            </div>
            {renderDetails()}
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        presentOrderDetails: (orderItems) => dispatch(presentOrderDetails(orderItems)),
    }
}

export default connect(
    null,
    mapDispatchToProps
)(PastOrder);