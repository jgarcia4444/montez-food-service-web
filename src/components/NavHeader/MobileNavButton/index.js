import React from 'react';
import '../../../styles/nav/MobileNavButton.css'
import { FiMenu } from 'react-icons/fi';

const MobileNavButton = ({handleMobileNavClick}) => {

    return (
        <div onClick={handleMobileNavClick} className="mobile-nav-button">
            <FiMenu size={24} color={'#fff'} />
        </div>
    )
}

export default MobileNavButton;
