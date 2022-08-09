
const updateOrderItemQuantity = (orderItemInfo) => {
    return {
        type: "EDIT_ORDER_ITEM_QUANTITY",
        orderItemInfo
    }
}

export default updateOrderItemQuantity;