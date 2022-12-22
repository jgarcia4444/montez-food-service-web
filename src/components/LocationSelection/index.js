import React from 'react';
import { connect } from 'react-redux';

import '../../styles/Global.css';
import '../../styles/components/LocationSelection/index.css';

import SelectableLocation from './SelectableLocation';

import selectLocation from '../../redux/actions/orderActions/selectLocation';

const LocationSelection = ({locations, selectedLocationIndex}) => {

    const renderSelectableLocations = () => {
        if (locations.length === 0) {
            return (
                <h3 className="info-alert">Add a location...</h3>
            )
        } else {
            return locations.map((location, i)=> {
                var locationSelected = false;
                if (i === selectedLocationIndex) {
                    locationSelected = true;
                }
                return <SelectableLocation locationIndex={i} key={`${i}${location.city}`} locationInfo={location} selected={locationSelected} />
            })
        }
    }

    return (
        <div className="location-selection-container">
            <div className="section-title-row">
                <h2 className="section-title">Select Location</h2>
            </div>
            <div className="locations-selector-container">
                {renderSelectableLocations()}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        locations: state.userReducer.userInfo.locations,
        selectedLocationIndex: state.order.selectedLocationIndex,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectLocation: (locationId) => dispatch(selectLocation(locationId)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LocationSelection);