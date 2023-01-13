import React from 'react';
import { connect } from 'react-redux';
import selectLocation from '../../../redux/actions/orderActions/selectLocation';

import '../../../styles/components/LocationSelection/SelectableLocation.css'

const SelectableLocation = ({locationIndex, locationInfo, selected, selectLocation}) => {

    const handleSelectClick = () => {
        console.log("Location Selected", locationIndex);
        selectLocation(locationIndex)
    }

    return (
        <div onClick={handleSelectClick} className={`selectable-location-container ${selected === true ? 'selectable-location-container-selected' : ''}`}>
            <div className="selectable-location-info-container">
                <h4 className={`selectable-location-info ${selected === true ? "selectable-location-info-selected" : ""}`}>
                    Street
                </h4>
                <p className={`selectable-location-value ${selected === true ? "selectable-location-value-selected" : ""}`}>
                    {locationInfo.street}
                </p>
            </div>
            <div className="selectable-location-info-container">
                <h4 className={`selectable-location-info ${selected === true ? "selectable-location-info-selected" : ""}`}>
                    City
                </h4>
                <p className={`selectable-location-value ${selected === true ? "selectable-location-value-selected" : ""}`}>
                    {locationInfo.city}
                </p>
            </div>
            <div className="selectable-location-info-container">
                <h4 className={`selectable-location-info ${selected === true ? "selectable-location-info-selected" : ""}`}>
                    State
                </h4>
                <p className={`selectable-location-value ${selected === true ? "selectable-location-value-selected" : ""}`}>
                    {locationInfo.state}
                </p>
            </div>
            <div className="selectable-location-info-container">
                <h4 className={`selectable-location-info ${selected === true ? "selectable-location-info-selected" : ""}`}>
                    Zip Code
                </h4>
                <p className={`selectable-location-value ${selected === true ? "selectable-location-value-selected" : ""}`}>
                    {locationInfo.zipCode}
                </p>
            </div>
        </div>
    )
}

const mapDispacthToProps = dispatch => {
    return {
        selectLocation: (locationIndex) => dispatch(selectLocation(locationIndex)),
    }
}

export default connect(
    null,
    mapDispacthToProps
)(SelectableLocation);