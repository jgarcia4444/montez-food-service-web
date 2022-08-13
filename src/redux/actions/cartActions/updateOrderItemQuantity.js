
const updateOrderItemQuantity = (orderItemInfo) => {
    return {
        type: "UPDATE_ORDER_ITEM_QUANTITY",
        cartItem: {
            description: orderItemInfo.description,
            quantity: orderItemInfo.newQuantityValue
        }
    }
}

export default updateOrderItemQuantity;