import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiHome, FiList, FiShoppingCart, FiDollarSign } from 'react-icons/fi'
import { connect } from 'react-redux';
import useWindowDimensions from '../../customHooks/useWindowDimensions';

import { useNavigate } from 'react-router-dom';
import MobileNavButton from './MobileNavButton';
import DesktopNavLink from './DesktopNavLink';

import montezLogo from '../../pages/Home/imgs/montez-logo.png';

import '../../styles/nav/NavHeader.css';

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

    const iconSize = 20;
    const iconColor = "#a0262e";

    const navLinkObjects = [
        {
            text: "Products",
            icon: <FiList size={iconSize} color={iconColor}/>,
            to: "/products"
        },
        {
            text: "Order Online",
            icon: <FiShoppingCart size={iconSize} color={iconColor}/>,
            to: "/order-online"
        },
        {
            text: "Cost Optimization",
            icon: <FiDollarSign size={iconSize} color={iconColor}/>,
            to: "/cost-optimization"
        },
        {
            text: "Account",
            icon: <FiUser size={iconSize} color={iconColor}/>,
            to: "/user-auth"
        }
    ];

    const navLinks = (
        <div className="nav-links-container">
            <Link onClick={() => setActivePage("Home")} className={`nav-link ${activePage === "Home" ? "active-link" : ""}`}to="/">Home</Link>
            <Link onClick={() => setActivePage("Products")} className={`nav-link ${activePage === "Products" ? "active-link" : ""}`} to="/products">Products</Link>
            <Link onClick={() => setActivePage("Order Online")} className={`nav-link ${activePage === "Order Online" ? "active-link" : ""}`} to="/order-online">Order Online</Link>
            <Link onClick={() => setActivePage("Cost Optimization")} className={`nav-link ${activePage === 'Cost Optimization' ? "active-link" : ""}`} to="/cost-optimization">Cost Optimization</Link>
            <span className="vertical-separator">|</span>
            <FiUser onClick={handleUserPress} className={`user-icon ${activePage === 'User Auth' ? "active-link" : ""}`} size={20} />
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

    const renderDesktopNavLinks = () => {
        return navLinkObjects.map((linkInfo, i) => <DesktopNavLink info={linkInfo} key={`${linkInfo.text}-${i}`}/>);
    }

    const renderNavLinks = () => {
        if (width > 788) {
            return renderDesktopNavLinks();
        } else {
            return mobileNavLinks;
        }
    }

    const renderNavTitle = () => {
        return (
            <div className="">
                <div className="flex md:hidden">
                    <img src={montezLogo} alt="Company logo" className="w-12 h-12 rounded duration-300 transition-all hover:scale-110 cursor-pointer" />
                </div>
                <div className="hidden md:flex">
                    <a href="/" className="">
                        <h2 className="text-white font-serif font-bold text-xl">Montez Food Service</h2>
                    </a>
                </div>
            </div>  
        )
    }

    return (
        <div className="flex flex-row bg-crimson p-2 justify-between items-center">
            {renderNavTitle()}
            <div className="flex flex-row pr-2">
                {renderNavLinks()}
            </div>
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