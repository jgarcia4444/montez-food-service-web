import Urls from "../../../config/Urls"; 
const {baseUrl} = Urls;

const fetchSuggestions = (itemQuery) => {
    let url = `${baseUrl}order-online/fetch-suggestions/${itemQuery}`;

    return async dispatch => {
        dispatch({type: "FETCHING_SUGGESTIONS"})
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let {success} = data;
                if (success === true) {
                    let {suggestions} = data;
                    console.log("Here are the suggestions from the fetch suggestions action", suggestions);
                    return dispatch({type: "SUGGESTIONS_FETCH_SUCCESS", suggestions})
                } else {
                    let {error} = data;
                    let {message} = error;
                    return dispatch({type: "SUGGESTIONS_FETCH_ERROR", errorMessage: message});
                }
            })
    }
}

export default fetchSuggestions;