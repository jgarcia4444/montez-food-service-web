
import Urls from "../../../config/Urls";
const { baseUrl } = Urls;

const createUser = (userInfo) => {
    let url = `${baseUrl}users`;
    const {email, password, companyName} = userInfo;
    let options= {
        method: "POST",
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_info: {
                email: email,
                password: password,
                company_name: companyName
            }
        })
    };

    return async dispatch => {
        dispatch({type: 'CREATING_USER'});
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                let {success} = data;
                if (success === true) {
                    let {userInfo} = data;
                    return dispatch({type: "USER_CREATION_SUCCESS", userInfo});
                } else {
                    let {error} = data;
                    return dispatch({type: "USER_CREATION_ERROR", errorMessage: error.message});
                }
            })
    }
}

export default createUser;