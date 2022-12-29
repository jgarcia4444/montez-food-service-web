import Urls from '../../../config/Urls.js';
const {baseUrl} = Urls;

const cancelOrder = (orderInfo) => {
    let url = `${baseUrl}pending-orders/delete`;
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            order_info: orderInfo,
        })
    }

    return async dispatch => {
        dispatch({type: "CANCELLING_ORDER"});
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                let {success} = data;
                if (success === true) {
                    let {orderId} = data;
                    return dispatch({type: "ORDER_CANCEL_SUCCESS", orderId});
                } else {
                    let {error} = data;
                    let {message} = error;
                    return dispatch({type: "ORDER_CANCEL_ERROR", message});
                }
            })
    }

}

export default cancelOrder;