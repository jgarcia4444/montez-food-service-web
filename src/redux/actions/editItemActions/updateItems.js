import Urls from '../../../config/Urls';
const {baseUrl} = Urls;

const updateItems = items => {
    let url = `${baseUrl}order-items/update-items`;
    let options = {
        method: "PUT",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(items)
    }
    return async dispatch => {
        dispatch({type: "UPDATING_ITEMS"});

        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                let {success} = data;
                if (success === true) {
                    return dispatch({type: "ITEMS_UPDATE_SUCCESS"});
                } else {
                    let {error} = data;
                    let {message} = error;
                    return dispatch({type: "ITEMS_UPDATE_ERROR"});
                }
            })
    }
}

export default updateItems;