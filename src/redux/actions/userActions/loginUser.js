import Urls from "../../../config/Urls";
const {baseUrl} = Urls;

const loginUser = (userInfo) => {
    const {email, password} = userInfo;
    let url = `${baseUrl}users/login`;
    let body = {
        user_info: {
            email: email,
            password: password,
        }
    }
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    }
    return async dispatch => {
        dispatch({type: "LOGGING_USER_IN"});
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                let {success} = data;
                if (success === true) {
                    let {userInfo} = data;
                    return dispatch({type: "USER_LOGIN_SUCCESS", userInfo});
                } else {
                    let {error} = data;
                    return dispatch({type: "USER_LOGIN_ERROR", error});
                }
            })
    }
}

export default loginUser