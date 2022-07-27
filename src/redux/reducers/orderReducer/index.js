
const initialState = {
    suggestions: [],
    suggestionsLoading: false,
    fetchSuggestionsError: ""
}

const orderReducer = (state=initialState, action) => {
    switch(action.type) {
        case "FETCHING_SUGGESTIONS":
            return {
                ...state,
                suggestionsLoading: true,
                fetchSuggestionsError: ""
            };
        case "SUGGESTIONS_FETCH_ERROR":
            return {
                ...state,
                suggestionsLoading: false,
                fetchSuggestionsError: action.errorMessage
            }
        case "SUGGESTIONS_FETCH_SUCCESS":
            return {
                ...state,
                suggestionsLoading: false,
                fetchSuggestionsError: "",
                suggestions: action.suggestions
            }
        default:
            return {
                ...state,
            }
    }
}