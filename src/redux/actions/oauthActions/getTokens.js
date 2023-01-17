
import Urls from "../../../config/Urls"
const {tokenUrl, baseUrl} = Urls;

const getTokens = (authorizationInfo) => {
    // let redirectUri = "https://montez-food-service-web.vercel.app/users/admin"
    let {authorizationCode, realmID} = authorizationInfo;
    // let url = `${tokenUrl}?grant_type=authorization_code&code=${authorizationCode}&redirect_uri=${redirectUri}`;
    // let options = {
    //     method: "POST",
    //     mode: 'no-cors',
    //     headers: {
    //         'Accept': 'application/json'
    //     }
    // }
    let url = `${baseUrl}oauth/tokens/get/${authorizationCode}`;
    return async dispatch => {
        dispatch({type: "FETCHING_TOKENS"});
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log("Data from get tokens action: ", data);
                let {refreshToken, accessToken} = data;
                return dispatch({type: "TOKENS_FETCH_SUCCESS", refreshToken, accessToken});
            })
    }
}

export default getTokens;