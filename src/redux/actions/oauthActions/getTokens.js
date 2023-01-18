
import Urls from "../../../config/Urls"
const {tokenUrl, baseUrl} = Urls;

const getTokens = (authorizationInfo) => {
    console.log("Get tokens triggered.")
    // let redirectUri = "https://montez-food-service-web.vercel.app/users/admin"
    let {authorizationCode, realmID} = authorizationInfo;
    // let url = `${tokenUrl}?grant_type=authorization_code&code=${authorizationCode}&redirect_uri=${redirectUri}`;
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
                console.log("Data from get tokens action: ", data);
                let {refreshToken, accessToken} = data;
                return dispatch({type: "TOKENS_FETCH_SUCCESS", refreshToken, accessToken});
            })
    }
}

export default getTokens;