
const initialState = {
    items: [],
}

const cartReducer = (state=initialState, action) => {
    switch(action.type) {
        case "ADD_ITEM_TO_CART":
            if (state.items.some(item => item.description === action.cartItem.description)) {
                let itemToBeUpdatedIndex = 0;
                for (let i = 0; i < state.items.length; i++) {
                    let iItem = state.items[i];
                    if (iItem.description === action.cartItem.description) {
                        itemToBeUpdatedIndex = i
                        break;
                    }
                }
                let itemToBeUpdated = state.items[itemToBeUpdatedIndex];
                let leftItems = itemToBeUpdatedIndex !== 0 ? state.items.slice(0, itemToBeUpdatedIndex) : [];
                let rightItems = itemToBeUpdatedIndex !== state.items.length - 1 ? state.items.slice(itemToBeUpdatedIndex + 1) : [];
                itemToBeUpdated.quantity = parseInt(itemToBeUpdated.quantity) + parseInt(action.cartItem.quantity);
                itemToBeUpdated.totalPrice = (parseFloat(itemToBeUpdated.price) * parseInt(itemToBeUpdated.quantity)).toFixed(2);
                let updatedItems = [...leftItems, ...rightItems, itemToBeUpdated];
                return {
                    ...state,
                    items: updatedItems,
                };
            } else {
                return {
                    ...state,
                    items: state.items.concat(action.cartItem),
                }
            }
        default:
            return {
                ...state,
            }
    }
}

export default cartReducer;