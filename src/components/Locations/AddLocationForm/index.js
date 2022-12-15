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
    const [state, setState] = useState("");
    const [stateError, setStateError] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [zipCodeError, setZipCodeError] = useState("");

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

    let zipCodeInputObject = {
        label: "Zip Code",
        value: zipCode,
        changeFunction: val => setZipCode(val),
        icon: <FiHome size={24} color={"#ffc72c"}/>,
        error: zipCodeError,
    }

    return (
        <div className="add-location-container">
            <div className="add-location-form-container">
                <div className="close-container-row">
                    <div onClick={closeForm} className="close-button">
                        <FiMinus size={24} color={"#fff"} />
                    </div>
                </div>
                <div className="add-location-form-title-row">
                    <h2 className="section-title">Add Location</h2>
                </div>
                <div className="add-location-form">
                    <div className="add-location-form-input-row">
                        <FormInput inputInfo={streetAddressInputObject}/>
                    </div>
                    <div className="add-location-form-input-row two-input-row">
                        <FormInput inputInfo={cityInputObject}/>
                        <div className="state-select-container">
                            <label htmlFor="state" className="state-select-label">State</label>
                            <select className="state-select" onChange={(val) => setState(val.target.value)} name="state">
                                <option value="none" selected disabled hidden>Select an option...</option>
                                <option value="Ca">Ca</option>
                            </select>
                        </div>
                    </div>
                    <div className="add-location-form-input-row">
                        <FormInput inputInfo={zipCodeInputObject} />
                    </div>
                </div>
                <div className="save-location-button">
                    Add Location
                </div>
            </div>
        </div>
    )
}

export default AddLocationForm;