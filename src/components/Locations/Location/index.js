import React from 'react';
import {FiTrash} from 'react-icons/fi';
import { connect } from 'react-redux';
import removeLocation from '../../../redux/actions/locationActions/removeLocation';

import '../../../styles/components/Locations/Location.css';

const Location = ({locationInfo, email, removeLocation}) => {

    const {street, city, state, zipCode, id} = locationInfo;

    const handleDeleteLocation = () => {
        if (email !== "") {
            removeLocation({email, locationId: id});
        }
    }
    
    return (
        <div className="location-container">
            <div className="location-info-row">
                <div className="location-info-container">
                    <div className="location-info-label-container">
                        <p className="location-info-label">Street</p>
                    </div>
                    <div className="location-info-value-container">
                        <p className="location-info-value">{street}</p>
                    </div>
                </div>
                <div className="location-info-container">
                    <div className="location-info-label-container">
                        <p className="location-info-label">City</p>
                    </div>
                    <div className="location-info-value-container">
                        <p className="location-info-value">{city}</p>
                    </div>
                </div>
                <div className="location-info-container">
                    <div className="location-info-label-container">
                        <p className="location-info-label">State</p>
                    </div>
                    <div className="location-info-value-container">
                        <p className="location-info-value">{state}</p>
                    </div>
                </div>
                <div className="location-info-container">
                    <div className="location-info-label-container">
                        <p className="location-info-label">Zip Code</p>
                    </div>
                    <div className="location-info-value-container">
                        <p className="location-info-value">{zipCode}</p>
                    </div>
                </div>
            </div>
            <div onClick={handleDeleteLocation} className="location-action-row">
                <div className="remove-location-button">
                    <FiTrash size={24} color={"#a0262e"} />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        email: state.userReducer.userInfo.email,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeLocation: (deletionInfo) => dispatch(removeLocation(deletionInfo)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Location);