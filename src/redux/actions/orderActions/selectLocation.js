
const selectLocation = (selectedLocationIndex) => {
    return {
        type: "LOCATION_SELECTED",
        selectedLocationIndex,
    }
}

export default selectLocation;