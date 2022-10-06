
import Urls from '../../../config/Urls'
const { baseUrl } = Urls;

const verifyUser = (email) => {
    let url = `${baseUrl}users/verify/`;

    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_info: {
                email
            }
        })
    }

    return async dispatch => {
        dispatch({type: "VERIFYING_ACCOUNT"});

        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                let {success} = data;
                if (success === true) {
                    let {userInfo} = data;
                    return dispatch({type: "ACCOUNT_VERIFICATION_SUCCESS", userInfo});
                } else {
                    let {error} = data;
                    let {message} = error;
                    return dispatch({type: "ACCOUNT_VERIFICATION_ERROR", errorMessage: message});
                }
            })

    }

}

export default verifyUser;