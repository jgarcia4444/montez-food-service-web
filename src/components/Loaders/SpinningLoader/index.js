import React from 'react';
import '../../../styles/loaders/spinningLoaders/SpinningLoader.css';

const SpinningLoader = ({color}) => {

    return (
        <div className="spinning-loader-row">
            <div className="spinning-loader" style={{borderColor: color}}></div>
        </div>
    )
};

export default SpinningLoader