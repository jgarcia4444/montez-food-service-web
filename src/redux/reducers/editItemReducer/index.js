const initialState = {
    stagedItems: [1, 3, 4],
}

const editItemReducer = (state=initialState, action) => {
    switch(action.type) {
        case "ADD_ITEM_TO_STAGING":
            action.itemToAdd["index"] = state.stagedItems.length;
            return {
                ...state,
                stagedItems: state.stagedItems.concat(action.itemToAdd),
            }
        default: 
            return {
                ...state,
            }
    }
}

export default editItemReducer;