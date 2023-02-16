const initialState = {
    stagedItems: [],
    updatingItems: false,
    itemsUpdateError: "",
}

const configureItemsUpdated = (items, itemsToRemove) => {
    if (itemsToRemove.length <= items.length) {
        if (items.length === itemsToRemove.length) {
            return [];
        } else {
            let remainingItems = [];
            items.forEach(item => {
                if (itemsToRemove.some(itemToRemoveItem => itemToRemoveItem.description === item.description) === false) {
                    remainingItems.push(item);
                }
            })
            return remainingItems;
        }
    } else {
        return items;
    }
}

const addToStagedItems = (items, itemToAdd) => {
    return items.some(item => item.description === itemToAdd.description) === true ? items : items.concat(itemToAdd);
}

const editItemReducer = (state=initialState, action) => {
    switch(action.type) {
        case "ITEMS_UPDATE_SUCCESS":
            return {
                ...state,
                itemsUpdateError: "",
                updatingItems: false,
                stagedItems: configureItemsUpdated(state.stagedItems, action.itemsUpdated),
            }
        case "ITEMS_UPDATE_ERROR":
            return {
                ...state,
                updatingItems: false,
                itemsUpdateError: action.message,
                stagedItems: configureItemsUpdated(state.stagedItems, action.itemsUpdated)
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
            let newStagedItems = addToStagedItems(state.stagedItems, action.itemToAdd);
            return {
                ...state,
                stagedItems: newStagedItems,
            }
        default: 
            return {
                ...state,
            }
    }
}

export default editItemReducer;