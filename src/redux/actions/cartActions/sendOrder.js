import { baseUrl } from '../../../config/Urls'

const sendOrder = (orderDetails) => {
    const {email, items} = orderDetails;
    const url = `${baseUrl}order-online/orders`;
    let configuredBody = {
        user_info: {
            email: email
        },
        order_info: {
            items: items
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
                    let {pastOrders} = data;
                    return dispatch({type: "ORDER_SEND_SUCCESS", pastOrders});
                } else {
                    let {error} = data;
                    let {message} = error;
                    return dispatch({type: "ORDER_SEND_ERROR", errorMessage: message});
                }
            })
    }
}

export default sendOrder;