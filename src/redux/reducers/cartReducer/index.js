
const initialState = {
    items: [],
}

const cartReducer = (state=initialState, action) => {
    switch(action.type) {
        case "EDIT_ORDER_ITEM_QUANTITY":
            let itemToEditQuantity = state.items.filter(item => item.description === action.orderItemInfo.description)[0];
            let indexToReplace;
            for (let i = 0; i < state.items.length; i++) {
                let orderItem = state.items[i]
                if (orderItem.description === action.orderItemInfo.description) {
                    indexToReplace = i;
                    break;
                }
            }
            itemToEditQuantity.quantity = action.orderItemInfo.newQuantityValue;
            let itemsWithUpdatedQuantity = [itemToEditQuantity,...state.items.filter(orderItem => orderItem.description !== action.orderItemInfo.description)];
            return {
                ...state,
                items: itemsWithUpdatedQuantity
            }
        case "UPDATE_ORDER_ITEM_QUANTITY":
            state.items.forEach(item => {
                if (item.description === action.cartItem.description) {
                    item.quantity = action.cartItem.quantity
                }
            })
            let quantityUpdatedItems = state.items
            return {
                ...state,
                items: quantityUpdatedItems,
            }
        case "REMOVE_ORDER_ITEM":
            let itemsWithRemovedItem = state.items.filter(item => item.description !== action.itemName);
            return {
                ...state,
                items: itemsWithRemovedItem,
            }
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
                itemToBeUpdated.quantity = parseInt(itemToBeUpdated.quantity) + parseInt(action.cartItem.quantity);
                itemToBeUpdated.totalPrice = (parseFloat(itemToBeUpdated.price) * parseInt(itemToBeUpdated.quantity)).toFixed(2);
                let updatedItems = state.items.filter(stateItem => stateItem.description !== action.cartItem.description);
                updatedItems.push(itemToBeUpdated);
                console.log("Item to be updated after update:", itemToBeUpdated);
                console.log("Updated Items:", updatedItems);
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