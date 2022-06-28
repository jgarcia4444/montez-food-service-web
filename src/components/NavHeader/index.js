import React, {useState, useEffect} from 'react';
import '../../styles/nav/NavHeader.css';
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi'

const NavHeader = (props) => {


    const [activePage, setActivePage] = useState('');

    return (
        <div className="nav-header-row">
            <div className="nav-title-container">
                <h2 className="nav-title"><Link onClick={() => setActivePage("Home")} to="/" className="nav-title-link">Montez Food Service</Link></h2>
            </div>
            <div className="nav-links-container">
                <Link onClick={() => setActivePage("Home")} className={`nav-link ${activePage === "Home" ? "active-link" : ""}`}to="/">Home</Link>
                <Link onClick={() => setActivePage("Products")} className={`nav-link ${activePage === "Products" ? "active-link" : ""}`} to="/products">Products</Link>
                <Link onClick={() => setActivePage("Order Online")} className={`nav-link ${activePage === "Order Online" ? "active-link" : ""}`} to="/order-online">Order Online</Link>
                <Link onClick={() => setActivePage("Cost Optimization")} className={`nav-link ${activePage === 'Cost Optimization' ? "active-link" : ""}`} to="/cost-optimization">Cost Optimization</Link>
                <span className="vertical-separator">|</span>
                <FiUser size={20} color={'black'} />
            </div>
        </div>
    )
}

export default NavHeader;