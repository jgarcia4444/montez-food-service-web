import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import {FiPlus} from 'react-icons/fi';

import '../../styles/components/Locations.css';

import addAddress from '../../redux/actions/userActions/addAddress';

import '../../styles/Global.css'


const Locations = ({userInfo, addAddress}) => {

    const [emphasizeLocation, setEmphasizeLocation] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const {userId, usersAddress} = userInfo;

    const renderLocations = () => {
        if (usersAddress.city === "") {
            console.log("Address is empty")
            return <h3 className="no-locations-text">No locations added yet...</h3>
        }
    }

    useEffect(() => {
        if (usersAddress.city === "") {
            setEmphasizeLocation(true);
        }
    }, [usersAddress.city]);

    const setAddLocationButtonClass = () => {
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
                <div className={setAddLocationButtonClass()}>
                    <FiPlus size={24} color={"#fff"} />
                </div>
            </div>
            <div className="locations-box">
                {renderLocations()}
            </div>
        </div>
    )

}


const mapStateToProps = state => {
    return {
        userInfo: state.userReducer.userInfo,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addAddress: (addressInfo, userId) => dispatch(addAddress(addressInfo, userId)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Locations);