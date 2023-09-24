import React from 'react'

const DesktopNavLink = ({info}) => {
    console.log(info)
    const {icon, text} = info;

    return (
        <a href="" className="">
            <div className="text-sm flex flex-row text-white items-center ml-4 gap-1 transition-all duration-300 hover:scale-105">
                {icon}
                {text}
            </div>
        </a>
    )
}

export default DesktopNavLink;