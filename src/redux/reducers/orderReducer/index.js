
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
    selectedLocationIndex: null,
    locationSelectionError: "",
}

const orderReducer = (state=initialState, action) => {
    switch(action.type) {
        case "NO_LOCATION_SELECTED":
            return {
                ...state,
                selectedLocationIndex: null,
                locationSelectionError: "A location must be selected to place an order."
            }
        case "LOCATION_SELECTED":
            return {
                ...state,
                selectedLocationIndex: action.selectedLocationIndex,
                locationSelectionError: "",
            }
        case "CLEAR_SUGGESTIONS":
            return {
                ...state,
                suggestions: [],
            }
        case "CLEAR_SELECTED_SUGGESTION":
            return {
                ...state,
                selectedSuggestion: {
                    ...initialState.selectedSuggestion
                }
            }
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