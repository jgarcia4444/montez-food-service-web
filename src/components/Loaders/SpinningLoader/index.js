import React from 'react';
import '../../../styles/loaders/spinningLoaders/SpinningLoader.css';
import {FiLoader} from 'react-icons/fi';


const SpinningLoader = ({color}) => {

    return (
        <div className="spinning-loader-row">
            <FiLoader color={color} size={24} className="spinning-loader" />
            {/* <div className="spinning-loader" style={{borderColor: color}}></div> */}
        </div>
    )
};

export default SpinningLoader