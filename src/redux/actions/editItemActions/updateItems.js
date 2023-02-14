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
    }
}

export default updateItems;