import Urls from "../../../config/Urls";
const {baseUrl} = Urls;

const loginAdmin = (adminInfo) => {
    let url = `${baseUrl}users/admin/login`;
    let options = {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            admin: {
                ...adminInfo,
            }
        })
    }

    return async dispatch => {
        dispatch({type: "ADMIN_LOGGING_IN"});
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                let {success} = data;
                if (success === true) {
                    let {username, pendingOrderIds} = data;
                    return dispatch({type: "LOGIN_ADMIN", username, pendingOrderIds})
                } else {
                    let {error} = data;
                    let {message} = error;
                    return dispatch({type: "ADMIN_LOGIN_ERROR", message});
                }
            })
    }

}

export default loginAdmin;