import Urls from "../../../config/Urls";
const {baseUrl} = Urls;

const sendResetCode = (userInfo) => {

    let url = `${baseUrl}users/forgot-password`;
    let options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_info: {
                ...userInfo,
            }
        })
    };

    return async dispatch => {
        dispatch({type: "SENDING_CODE"});
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                let {success} = data;
                if (success === true) {
                    let {userInfo} = data;
                    let {email} = userInfo;
                    return dispatch({type: "CODE_SEND_SUCCESS", email});
                } else {
                    let {error} = data;
                    let {message} = error;
                    return dispatch({type: "CODE_SEND_ERROR", errorMessage: message})
                }
            })
    }
}

export default sendResetCode;