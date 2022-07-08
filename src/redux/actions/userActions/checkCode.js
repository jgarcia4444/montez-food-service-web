import Urls from "../../../config/Urls";
const {baseUrl} = Urls;

const checkCode = (userInfo) => {
    let url = `${baseUrl}users/forgot-password/check-code`;
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_info: {
                ...userInfo
            }
        })
    }

    return async dispatch => {
        dispatch({type: "CHECKING_CODE"});

        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                let {success} = data;
                if (success === true) {
                    let {userInfo} = data;
                    return dispatch({type: "CODE_CHECK_SUCCESS", userInfo})
                } else {
                    let {error} = data;
                    let {message} = error;
                    return dispatch({type: "CODE_CHECK_ERROR", errorMessage: message});
                }
            })
    }
}

export default checkCode;