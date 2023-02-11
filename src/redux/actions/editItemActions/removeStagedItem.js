
const removeStagedItem = (id) => {
    return {
        type: "REMOVE_STAGED_ITEM",
        id
    }
}

export default removeStagedItem;