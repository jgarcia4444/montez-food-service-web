import React from 'react';
import {FiCheck} from 'react-icons/fi';

import '../../../styles/components/Buttons/SelectBox.css';

const SelectBox = ({value, setValue}) => {

    console.log("Here is the select box value", value);

    return (
        <div className="select-box" onClick={setValue}>
            {value === true &&
                <FiCheck size={16} color={'#ffc73c'} />
            }
        </div>
    )
}

export default SelectBox