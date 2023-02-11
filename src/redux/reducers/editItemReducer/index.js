const initialState = {
    stagedItems: [],
}

const editItemReducer = (state=initialState, action) => {
    switch(action.type) {
        case "REMOVE_STAGED_ITEM":
            return {
                ...state,
                stagedItems: state.stagedItems.filter(item => item.id !== action.id),
            }
        case "ADD_ITEM_TO_STAGING":
            action.itemToAdd["id"] = state.stagedItems.length;
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