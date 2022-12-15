import React, {useState} from 'react';
import {FiHome, FiMinus} from 'react-icons/fi';

import '../../../styles/Global.css';
import '../../../styles/components/AddLocationForm.css';

import FormInput from '../../FormInput';

const AddLocationForm = ({closeForm}) => {

    const [street, setStreet] = useState("");
    const [streetError, setStreetError] = useState("");
    const [city, setCity] = useState("");
    const [cityError, setCityError] = useState("");

    let streetAddressInputObject = {
        label: "Street",
        value: street,
        icon: <FiHome size={24} color={"#ffc72c"}/>,
        changeFunction: val => setStreet(val),
        error: streetError,
    }

    let cityInputObject = {
        label: "City",
        value: city,
        icon: <FiHome size={24} color={"#ffc72c"}/>,
        changeFunction: val => setCity(val),
        error: cityError,
    }

    return (
        <div className="add-location-container">
            <div className="add-location-form-container">
                <div className="close-container-row">
                    <div onClick={closeForm} className="close-container-button">
                        <FiMinus size={24} color={"#a0262e"} />
                    </div>
                </div>
                <div className="add-location-form-title-row">
                    <h2 className="section-title">Add Location</h2>
                </div>
                <div className="add-location-form">
                    <div className="add-location-form-input-row">
                        <FormInput inputInfo={streetAddressInputObject}/>
                    </div>
                    <div className="add-location-form-input-row">
                        <FormInput inputInfo={cityInputObject}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddLocationForm;