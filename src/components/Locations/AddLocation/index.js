import React, {useState} from 'react';
import { FiPlus } from 'react-icons/fi';

import AddLocationForm from '../AddLocationForm';
import '../../../styles/components/Locations/AddLocation.css';

const AddLocation = ({emphasizeLocation}) => {

    const [showForm, setShowForm] = useState("");

    const addLocationButtonClass = () => {
        let buttonClassName = "add-location-button ";
        if (emphasizeLocation === true) {
            buttonClassName += "emphasize-button";
        }
        return buttonClassName;
    }

    return (
        <>
            <div onClick={() => setShowForm(true)} className={addLocationButtonClass()}>
                <FiPlus size={24} color={"#fff"} />
            </div>
            {showForm === true &&
                <AddLocationForm closeForm={() => setShowForm(false)} />
            }
        </>
    )
}

export default AddLocation;