import Urls from "../../../config/Urls";
const { baseUrl } = Urls;

const confirmOrder = (confirmationInformation) => {
    let url = `${baseUrl}users/admin/confirm-order`;
    let options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(confirmationInformation)
    }

    return async dispatch => {
        dispatch({type: "CONFIRMING_ORDER"});
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                let {success} = data;
                if (success === true) {
                    let {pendingOrderId} = data;
                    return dispatch({type: "ORDER_CONFIRMATION_SUCCESS", pendingOrderId});
                } else {
                    let {error} = data;
                    let {message} = error;
                    return dispatch({type: "ORDER_CONFIRMATION_ERROR", message});
                }
            })
    }

}

export default confirmOrder;