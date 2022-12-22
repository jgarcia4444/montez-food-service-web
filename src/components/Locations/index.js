import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import {FiPlus} from 'react-icons/fi';

import '../../styles/components/Locations/Locations.css';
import '../../styles/Global.css'

import AddLocationForm from './AddLocationForm';
import Location from './Location';



const Locations = ({userInfo}) => {

    const [emphasizeLocation, setEmphasizeLocation] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const {usersAddress, locations} = userInfo;

    const renderLocations = () => {
        console.log("Locations",typeof locations)
        if (typeof locations !== 'number') {
            if (locations.length === 0) {
                return <h3 className="no-locations-text">No locations added yet...</h3>
            } else {
                return locations.map(location => <Location locationInfo={location} />)
            }
        } else {
            return <h3 className="no-locations-text">No locations added yet...</h3>
        }
    }

    useEffect(() => {
        if (locations.length === 0) {
            setEmphasizeLocation(true);
        }
    }, [locations]);

    const addLocationButtonClass = () => {
        let buttonClassName = "add-location-button ";
        if (emphasizeLocation === true) {
            buttonClassName += "emphasize-button";
        }
        return buttonClassName;
    }
    return (
        <div className="locations-container">
            <div className="section-title-row locations-title-row">
                <h2 className="section-title">Locations</h2>
                <div onClick={() => setShowForm(true)} className={addLocationButtonClass()}>
                    <FiPlus size={24} color={"#fff"} />
                </div>
            </div>
            <div className="locations-box">
                {renderLocations()}
            </div>
            {showForm === true &&
                <AddLocationForm closeForm={() => setShowForm(false)} />
            }
        </div>
    )

}


const mapStateToProps = state => {
    return {
        userInfo: state.userReducer.userInfo,
    }
}

// const mapDispatchToProps = dispatch => {
//     return {

//     }
// }

export default connect(
    mapStateToProps,
    null
)(Locations);