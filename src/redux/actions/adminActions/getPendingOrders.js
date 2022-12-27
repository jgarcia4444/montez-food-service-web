import Urls from "../../../config/Urls";
const {baseUrl} = Urls;


const getPendingOrders = () => {
    let url = `${baseUrl}pending-orders`;
    return async dispatch => {
        setTimeout(() => {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    let {success} = data;
                    if (success === true) {
                        let {pendingOrders} = data;
                        return dispatch({type: "PENDING_ORDERS_FETCH_SUCCESS", pendingOrders});
                    } else {
                        let {error} = data;
                        let {message} = error;
                        return dispatch({type: "PENDING_ORDERS_FETCH_ERROR", message});
                    }
                })
        }, 1000)
    }
}

export default getPendingOrders;