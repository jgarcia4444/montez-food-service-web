
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
        dispatch({type: "VERIFYING_USER"});
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                let {success} = data;
                if (success === true) {
                    let {userInfo, lastCartInfo} = data;
                    if (userInfo.isOrdering) {
                        return dispatch({type: "ACCOUNT_VERIFICATION_SUCCESS", userInfo, lastCartInfo});    
                    }
                    return dispatch({type: "ACCOUNT_VERIFICATION_SUCCESS", userInfo});
                } else {
                    let {error} = data;
                    let {message} = error;
                    return dispatch({type: "ACCOUNT_VERIFICATION_ERROR", message});
                }
            })

    }

}

export default verifyUser;