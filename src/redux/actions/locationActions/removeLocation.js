
import Urls from "../../../config/Urls";
const {baseUrl} = Urls;

const removeLocation = (locationInfo) => {

    const {email, locationId} = locationInfo;

    const url = `${baseUrl}users/${email.slice(0, -4)}/addresses/${locationId}`;
    const options = {
        method: "DELETE"
    }

    return async dispatch => {
        dispatch({type: "DELETING_LOCATION"});
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                let {success} = data;
                if (success === true) {
                    let {addressId} = data;
                    console.log("Data from remove location", data);
                    return dispatch({type: "LOCATION_DELETE_SUCCESS", addressId});
                } else {
                    let {error} = data;
                    let message = error;
                    return dispatch({type: "LOCATION_DELETE_ERROR", message});
                }
            })
    }

}

export default removeLocation;