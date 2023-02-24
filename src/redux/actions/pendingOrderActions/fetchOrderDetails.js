import Urls from "../../../config/Urls";
const {baseUrl} = Urls;

const fetchOrderDetails = (orderId, serviceInfo) => {

    let url = `${baseUrl}users/admin/pending-order/${orderId}`;
    let options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({service_info: serviceInfo})
    }

    return async dispatch => {
        dispatch({type: "FETCHING_PENDING_DETAILS"});
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                let {success} = data;
                if (success === true) {
                    let {pendingOrderDetails} = data;
                    return dispatch({type: "PENDING_DETAILS_SUCCESS", pendingOrderDetails});
                } else {
                    let {error} = data;
                    let {message} = error;
                    return dispatch({type: "PENDING_DETAILS_ERROR", message});
                }
            })
    }
    
}

export default fetchOrderDetails;
