const initialState = {
    stagedItems: [],
    updatingItems: false,
    itemsUpdateError: "",
}

const editItemReducer = (state=initialState, action) => {
    switch(action.type) {
        case "ITEMS_UPDATE_SUCCESS":
            return {
                ...state,
                itemsUpdateError: "",
                updatingItems: false,
            }
        case "ITEMS_UPDATE_ERROR":
            return {
                ...state,
                updatingItems: false,
                itemsUpdateError: action.message,
            }
        case "UPDATING_ITEMS":
            return {
                ...state,
                updatingItems: true,
                itemsUpdateError: ""
            }
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