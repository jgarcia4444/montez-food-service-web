import Urls from "../../../config/Urls";
const {baseUrl} = Urls;

const changePassword = (userInfo) => {
    let url = `${baseUrl}users/forgot-password/change-password`;
    let bodyInfo = {
        user_info: {
            ...userInfo
        }
    }
    let options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyInfo)
    };
    return async dispatch => {
        dispatch({type: "CHANGING_PASSWORD"});
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                let {success} = data;
                if (success === true) {
                    let {userInfo} = data;
                    return dispatch({type: "PASSWORD_CHANGE_SUCCESS", userInfo});
                } else {
                    let {error} = data;
                    let {message} = error;
                    return dispatch({type: "PASSWORD_CHANGE_ERROR", errorMessage: message});
                }
            })
    }
}

export default changePassword;