import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import '../../styles/Global.css';
import '../../styles/components/LocationSelection/index.css';

import SelectableLocation from './SelectableLocation';
import AddLocation from '../Locations/AddLocation';

import selectLocation from '../../redux/actions/orderActions/selectLocation';

const LocationSelection = ({locations, selectedLocationIndex, locationSelectionError}) => {

    const [emphasize, setEmphasize] = useState(false);

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

    useEffect(() => {
        if (locations.length === 0) {
            setEmphasize(true);
        } else {
            setEmphasize(false);
        }
    }, [locations.length]);

    return (
        <div className="location-selection-container">
            <div className="section-title-row">
                <h2 className="section-title">Select Location</h2>
                {locationSelectionError !== "" && <p className="error"><strong>{locationSelectionError}</strong></p>}
                <AddLocation emphasizeLocation={emphasize} />                
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
        locationSelectionError: state.order.locationSelectionError,
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