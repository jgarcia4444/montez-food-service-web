import React from 'react';
import '../../styles/layout/Layout.css';

const Layout = ({children}) => {

    return (
        <div className="layou-container">
            {children}
        </div>
    )
};

export default Layout;