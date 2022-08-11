import React, {useState, useEffect} from 'react';
import '../../styles/nav/NavHeader.css';
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi'
import { connect } from 'react-redux';
import useWindowDimensions from '../../customHooks/useWindowDimensions';

import { useNavigate } from 'react-router-dom';
import MobileNavButton from './MobileNavButton';

const NavHeader = ({userInfo}) => {

    const {email} = userInfo;

    const {width} = useWindowDimensions();

    const [activePage, setActivePage] = useState('');
    const [showMobileNavLinks, setShowMobileNavLinks] = useState(false);
    const navigate = useNavigate();

    const handleUserPress = () => {
        setShowMobileNavLinks(false);
        setActivePage('User Auth');
        if (email === "") {
            navigate("/user-auth");
        } else {
            navigate('/users/account')
        }
    }

    const navLinks = (
        <div className="nav-links-container">
            <Link onClick={() => setActivePage("Home")} className={`nav-link ${activePage === "Home" ? "active-link" : ""}`}to="/">Home</Link>
            <Link onClick={() => setActivePage("Products")} className={`nav-link ${activePage === "Products" ? "active-link" : ""}`} to="/products">Products</Link>
            <Link onClick={() => setActivePage("Order Online")} className={`nav-link ${activePage === "Order Online" ? "active-link" : ""}`} to="/order-online">Order Online</Link>
            <Link onClick={() => setActivePage("Cost Optimization")} className={`nav-link ${activePage === 'Cost Optimization' ? "active-link" : ""}`} to="/cost-optimization">Cost Optimization</Link>
            <span className="vertical-separator">|</span>
            <FiUser onClick={handleUserPress} className={`user-icon ${activePage === 'User Auth' ? "active-link" : ""}`} size={20} color={'black'} />
        </div>
    )

    const handleMobileLinkClick = (pageName) => {
        setShowMobileNavLinks(false);
        setActivePage(pageName);
    }

    const mobileNavLinks = (
        <div className="mobile-nav-links-container">
            <MobileNavButton handleMobileNavClick={() => setShowMobileNavLinks(!showMobileNavLinks)} />
            {showMobileNavLinks === true &&
                <div className="mobile-nav-links">
                    <Link onClick={() => handleMobileLinkClick("Home")} className={`mobile-nav-link ${activePage === "Home" ? "active-link" : ""}`}to="/">Home</Link>
                    <Link onClick={() => handleMobileLinkClick("Products")} className={`mobile-nav-link ${activePage === "Products" ? "active-link" : ""}`} to="/products">Products</Link>
                    <Link onClick={() => handleMobileLinkClick("Order Online")} className={`mobile-nav-link ${activePage === "Order Online" ? "active-link" : ""}`} to="/order-online">Order Online</Link>
                    <Link onClick={() => handleMobileLinkClick("Cost Optimization")} className={`mobile-nav-link ${activePage === 'Cost Optimization' ? "active-link" : ""}`} to="/cost-optimization">Cost Optimization</Link>
                    <div onClick={handleUserPress} className="icon-color-change mobile-nav-link">
                        <FiUser className="user-icon" size={20} />
                    </div>
                </div>
            }
        </div>
    )

    const renderNavLinks = () => {
        if (width > 800) {
            return navLinks;
        } else {
            return mobileNavLinks;
        }
    }

    return (
        <div className="nav-header-row">
            <div className="nav-title-container">
                <h2 className="nav-title"><Link onClick={() => setActivePage("Home")} to="/" className="nav-title-link">Montez Food Service</Link></h2>
            </div>
            {renderNavLinks()}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userInfo: state.userReducer.userInfo,
    }
}

export default connect(
    mapStateToProps,
    null
)(NavHeader);