
import Urls from "../../../config/Urls"
const {tokenUrl, baseUrl} = Urls;

const getTokens = (authorizationInfo) => {
    let {authorizationCode, realmID} = authorizationInfo;
    let options = {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            code: authorizationCode,
            realm_id: realmID
        })
    }
    let url = `${baseUrl}oauth/callback/`;
    return async dispatch => {
        dispatch({type: "FETCHING_TOKENS"});
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                console.log("Data from get tokens", data);
                let {success} = data;
                if (success) {
                    let {refreshToken, accessToken} = data;
                    return dispatch({type: "TOKENS_FETCH_SUCCESS", refreshToken, accessToken});
                } else {
                    let {error} = data;
                    let {message} = error;
                    return dispatch({type: "TOKENS_FETCH_ERROR", message});
                }
            })
    }
}

export default getTokens;