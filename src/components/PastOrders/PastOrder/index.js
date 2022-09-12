import React, {useState} from 'react'
import {FiChevronDown} from 'react-icons/fi';

import '../../../styles/components/PastOrders/PastOrder/PastOrder.css';

import PastOrderDetails from './PastOrderDetails';

const PastOrder = ({orderInfo}) => {

    const {items, totalPrice, orderDate} = orderInfo;

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

    console.log(totalPrice)

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
            <div onClick={() => setShowDetails(!showDetails)} className="past-order-details-action-block">
                <FiChevronDown className={`past-order-details-chevron ${showDetails === true ? 'show-details' : ''}`} color={'#ffc72c'} size={24} />
            </div>
            {renderDetails()}
        </div>
    )
}


export default PastOrder