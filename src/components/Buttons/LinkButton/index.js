
import React from 'react'

import '../../../styles/components/Buttons/LinkButton.css';

const LinkButton = ({to, text}) => {

    return (
        <div className="link-button">
            <a className="link-button-text" href={to} target="_blank">{text}</a>
        </div>
    )
}

export default LinkButton;