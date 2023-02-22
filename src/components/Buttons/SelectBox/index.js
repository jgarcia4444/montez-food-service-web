import React from 'react';
import {FiCheck} from 'react-icons/fi';

import '../../../styles/components/Buttons/SelectBox.css';

const SelectBox = ({value, setValue}) => {

    return (
        <div className="select-box" onClick={setValue}>
            {value === true &&
                <FiCheck size={12} color={'#a0262e'} />
            }
        </div>
    )
}

export default SelectBox