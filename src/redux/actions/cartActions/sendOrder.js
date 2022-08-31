import Urls from '../../../config/Urls';

const sendOrder = (orderDetails) => {

    const {baseUrl} = Urls;
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
                    let {pastOrder} = data;
                    console.log("Past Order",pastOrder)
                    return dispatch({type: "ORDER_SEND_SUCCESS", pastOrder});
                } else {
                    let {error} = data;
                    console.log("Order Error", error);
                    let {message} = error;
                    return dispatch({type: "ORDER_SEND_ERROR", errorMessage: message});
                }
            })
    }
}

export default sendOrder;