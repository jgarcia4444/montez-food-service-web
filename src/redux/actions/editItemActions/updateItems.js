import Urls from '../../../config/Urls';
const {baseUrl} = Urls;

const updateItems = items => {
    let url = `${baseUrl}order-items/update-items`;
    let options = {
        method: "PUT",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({items: items})
    }
    return async dispatch => {
        dispatch({type: "UPDATING_ITEMS"});

        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                let {success} = data;
                if (success === true) {
                    let {itemsUpdated} = data;
                    return dispatch({type: "ITEMS_UPDATE_SUCCESS", itemsUpdated});
                } else {
                    let {error} = data;
                    let {message, itemsUpdated} = error;
                    return dispatch({type: "ITEMS_UPDATE_ERROR", message, itemsUpdated});
                }
            })
    }
}

export default updateItems;