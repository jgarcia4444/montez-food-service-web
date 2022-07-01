
import Urls from "../../../config/Urls";
const { baseUrl } = Urls;

const createUser = (userInfo) => {
    let url = `${baseUrl}users`;
    console.log("User info sent to create user action", userInfo);
    const {email, password, company_name} = userInfo;
    let body = {
        user_info: {
            email: email,
            password: password,
            company_name: company_name
        }
    }
    let options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    };

    console.log(options);

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