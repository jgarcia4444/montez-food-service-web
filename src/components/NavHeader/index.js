import React, {useState, useEffect} from 'react';
import '../../styles/nav/NavHeader.css';
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi'
import { connect } from 'react-redux';

import { useNavigate } from 'react-router-dom';

const NavHeader = ({userInfo}) => {

    const {email} = userInfo

    const [activePage, setActivePage] = useState('');
    const navigate = useNavigate();

    const handleUserPress = () => {
        if (email === "") {
            navigate("/user-auth");
        } else {
            navigate('/users/account')
        }
    }

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
                <FiUser onClick={handleUserPress} className="user-icon" size={20} color={'black'} />
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