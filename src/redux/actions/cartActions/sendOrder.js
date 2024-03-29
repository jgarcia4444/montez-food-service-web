import Urls from '../../../config/Urls';
import ReactGA from 'react-ga';

const sendOrder = (orderDetails) => {
    const {baseUrl} = Urls;
    const {email, items, address_id} = orderDetails;
    const url = `${baseUrl}order-online/orders`;
    let configuredBody = {
        user_info: {
            email: email
        },
        order_info: {
            items: items
        },
        address_info: {
            address_id: address_id
        }
    }
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(configuredBody),
    };

    return async dispatch => {
        dispatch({type: "SENDING_ORDER"});
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                let {success} = data;
                if (success === true) {
                    console.log("Data sent back from persist order action", data);
                    let {pastOrder} = data;
                    ReactGA.initialize('G-7380SQJ6M9');
                    ReactGA.event({
                        category: "Order",
                        action: "User Placed An Order",
                        label: "Order Placed"
                    });
                    console.log("ORDER SUCCESS", pastOrder);
                    return dispatch({type: "ORDER_SEND_SUCCESS", pastOrder});
                } else {
                    let {error} = data;
                    let {message} = error;
                    return dispatch({type: "ORDER_SEND_ERROR", errorMessage: message});
                }
            })
    }
}

export default sendOrder;