
import Urls from "../../../config/Urls";
const {baseUrl} = Urls;

const getClientDetails = (adminUsername) => {
    let url = `${baseUrl}admin/get-client-details/${adminUsername}`;
    return async dispatch => {
        dispatch({type: "FETCHING_CLIENT_DETAILS"});
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log("Data from get client details", data);
                let {success} = data;
                if (success === true) {
                    let {clientDetails} = data;
                    return dispatch({type: "FETCH_CLIENT_DETAILS_SUCCESS", clientDetails});
                } else {
                    let {error} = data;
                    let {message} = error;
                    return dispatch({type: "FETCH_CLIENT_DETAILS_ERROR", message});
                }
            })
    }
}

export default getClientDetails;