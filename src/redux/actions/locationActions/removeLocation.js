
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
                    let {locations} = data;
                    return({type: "LOCATION_DELETE_SUCCESS", locations});
                } else {
                    let {error} = data;
                    let message = error;
                    return dispatch({type: "LOCATION_DELETE_ERROR", message});
                }
            })
    }

}

export default removeLocation;