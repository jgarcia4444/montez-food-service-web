import Urls from "../../../config/Urls";
const {baseUrl} = Urls;

const fetchOrderDetails = (orderId) => {

    let url = `${baseUrl}users/admin/pending-order/${orderId}`;

    return async dispatch => {
        dispatch({type: "FETCHING_PENDING_DETAILS"});
        fetch(url)
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
