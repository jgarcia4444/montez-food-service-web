import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';

import addAddress from '../../redux/actions/userActions/addAddress';

import '../../styles/Global.css'


const Locations = ({userInfo, addAddress}) => {

    const [emphasizeLocation, setEmphasizeLocation] = useState(false);

    const {userId, usersAddress} = userInfo;

    const renderLocations = () => {
        if (usersAddress.city === "") {
            console.log("Address is empty")
            return <h3>No locations added yet...</h3>
        }
    }

    useEffect(() => {
        if (usersAddress.city === "") {
            setEmphasizeLocation(true);
        }
    }, [usersAddress.city]);

    return (
        <div className="locations-container">
            <div className="section-title-row">
                <h2 className="section-title">Locations</h2>
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