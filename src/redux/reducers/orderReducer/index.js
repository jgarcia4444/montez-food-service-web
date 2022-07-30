
const initialState = {
    suggestions: [],
    suggestionsLoading: false,
    fetchSuggestionsError: "",
    selectedSuggestion: {
        price: "",
        description: "",
        upc: "",
        item: "",
        costPerUnit: "",
        caseCost: "",
        fiveCaseCost: "",
    },
}

const orderReducer = (state=initialState, action) => {
    switch(action.type) {
        case "SUGGESTION_SELECTED":
            return {
                ...state,
                selectedSuggestion: action.orderItem,
            }
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

export default orderReducer;