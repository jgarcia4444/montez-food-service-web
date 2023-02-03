import Urls from "../../../config/Urls";

const {baseUrl} = Urls;

const updatePendingOrderItem = (updateOrderItemInfo) => {
    let url = `${baseUrl}pending-order/update`;
    let options = {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateOrderItemInfo)
    }
    return async dispatch => {
        dispatch({type: "UPDATING_ORDER_ITEM"});
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                let {success} = data;
                if (success === true) {
                    let {orderItemInfo} = data;
                    return dispatch({type: 'ORDER_ITEM_UPDATE_SUCCESS', orderItemInfo});
                } else {
                    let {error} = data;
                    let {message} = error;
                    return dispatch({type: "ORDER_ITEM_UPDATE_ERROR", message});
                }
            })
    }
};

export default updatePendingOrderItem;