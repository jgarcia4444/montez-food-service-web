import React from 'react';
import '../../styles/nav/NavHeader.css';
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi'

const NavHeader = () => {

    return (
        <div className="nav-header-row">
            <div className="nav-title-container">
                <h2 className="nav-title">Montez Food Service</h2>
            </div>
            <div className="nav-links-container">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/products">Products</Link>
                <Link className="nav-link" to="/order-online">Order Online</Link>
                <Link className="nav-link" to="/cost-optimization">Cost Optimization</Link>
                <span className="vertical-separator">|</span>
                <FiUser size={20} color={'black'} />
            </div>
        </div>
    )
}

export default NavHeader;