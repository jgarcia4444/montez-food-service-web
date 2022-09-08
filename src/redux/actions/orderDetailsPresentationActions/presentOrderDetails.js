
const presentOrderDetails = (orderItems) => {
    return {
        type: "PRESENT_ORDER_DETAILS",
        orderItems,
    }
}

export default presentOrderDetails;