
import Urls from "../../../config/Urls"
const {tokenUrl} = Urls;

const getTokens = (authorizationInfo) => {
    let redirectUri = "https://montez-food-service-web.vercel.app/users/admin"
    let {authorizationCode, realmID} = authorizationInfo
    let url = `${tokenUrl}?grant_type=authorization_code&code=${authorizationCode}&redirect_uri=${redirectUri}`;
    let options = {
        method: "POST",
    }
    return async dispatch => {
        dispatch({type: "FETCHING_TOKENS"});
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                let {refreshToken, accessToken} = data;
                return dispatch({type: "TOKENS_FETCH_SUCCESS", refreshToken, accessToken});
            })
    }
}

export default getTokens;