import Urls from "../../../config/Urls";
const {baseUrl} = Urls;

const formatAddress = address => {
    return {
        number: address.number,
        street_name: address.streetName,
        city: address.city,
        state: address.state,
        zip_code: address.zipCode,
    }
}

const addAddress = (addressInfo, userId) => {

    const url = `${baseUrl}addresses/${userId}`;

    const formattedAddress = formatAddress(addressInfo)

    const options = {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(formattedAddress)
    }

    return async dispatch => {
        dispatch({type: "SAVING_ADDRESS"});
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                let {success} = data;
                if (success === true) {
                    let {usersAddress} = data;
                    return dispatch({type: "ADDRESS_SAVE_SUCCESS", usersAddress});
                } else {
                    let {error} = data;
                    let {message} = error;
                    return dispatch({type: "ADDRESS_SAVE_ERROR", message});
                }
            })
    }

}

export default addAddress;