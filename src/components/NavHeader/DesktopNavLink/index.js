import React from 'react'

const DesktopNavLink = ({info}) => {
    console.log(info)
    const {icon, text, to} = info;

    return (
        <a href={to} className="">
            <div className="text-sm font-semibold flex flex-row text-crimson items-center ml-2 gap-1 transition-all duration-300 hover:scale-105 bg-gold bg-opacity-60 p-2 rounded hover:bg-opacity-100">
                {icon}
                {text}
            </div>
        </a>
    )
}

export default DesktopNavLink;