
import Urls from "../../../config/Urls";
const { baseUrl } = Urls;

const createUser = (userInfo, cartInfo) => {
    console.log("Create User cart info", cartInfo);
    let url = `${baseUrl}users`;
    let body = {
        user_info: userInfo,
        cart_info: cartInfo,
    }
    let options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
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
                    return dispatch({type: "USER_CREATION_ERROR", error});
                }
            })
    }
}

export default createUser;