

const selectSuggestion = (itemInfo) => {
    return {
        type: "SUGGESTION_SELECTED",
        orderItem: itemInfo,
    }
}

export default selectSuggestion;