import React from 'react'


const MobileNavLink = ({info}) => {

    const {text, icon, to} = info;

    return (
        <a href={to} className="transition-all duration-300 hover:scale-105">
            <div className=" bg-opacity-50 hover:bg-opacity-100 flex w-40 py-2 px-1 bg-gold text-crimson font-bold">
            {text}
            </div>
        </a>
    )
}

export default MobileNavLink;