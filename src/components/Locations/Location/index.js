import React from 'react';

import '../../../styles/components/Locations/Location.css';

const Location = ({locationInfo}) => {

    const {street, city, state, zipCode} = locationInfo;
//
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
            <div className="location-action-row">

            </div>
        </div>
    )
}

export default Location;