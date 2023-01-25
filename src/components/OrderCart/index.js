import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import sendOrder from '../../redux/actions/cartActions/sendOrder';

import '../../styles/components/OrderCart.css';

import UserAuthAlert from '../Alerts/UserAuthAlert';
import OrderItem from './OrderItem';

const OrderCart = ({locations, cart, userInfo, sendOrder, selectedLocationIndex, noLocationSelected}) => {

    const {items, orderSendError} = cart;

    const [showUserAuthOptions, setShowUserAuthOptions] = useState(false);
    const {companyName, email, pastOrders} = userInfo;

    const navigate = useNavigate();

    const renderOrderItems = () => {
        if (items.length < 1) {
            return <p className="no-items-text">No items added to cart yet...</p>
        } else {
            return items.map((orderItem, i) => <OrderItem key={`${orderItem.description}${i}`} itemInfo={orderItem} />)
        }
    }

    const calculateSubTotal = () => {
        if (items.length === 0) {
            return "0.00";
        } else {
            var subTotal = 0.00;
            items.forEach(item => subTotal += parseFloat(item.totalPrice))
            return subTotal.toFixed(2);
        }
    }

    const calculateOrderTotal = () => {
        if (items.length === 0) {
            return "0.00";
        } else {
            return parseFloat(calculateSubTotal()).toFixed(2);
        }
    }
    
    const handleOrderCheckout = () => {
        if (items.length !== 0) {
            if (companyName === "") {
                setShowUserAuthOptions(true)
            } else {
                if (selectedLocationIndex !== null) {
                    let selectedLocation = locations[selectedLocationIndex];
                    let orderInfo = {
                        email,
                        items,
                        address_id: selectedLocation.id
                    }
                    sendOrder(orderInfo);
                    if (orderSendError === "") {
                        navigate('/order-online/confirmation')
                    }
                } else {
                    noLocationSelected()
                }
            }
        }
    }

    useEffect(() => {   
    })

    return (
        <div className="order-cart-container">
            {showUserAuthOptions === true &&
                <UserAuthAlert closeAuthAlert={() => setShowUserAuthOptions(false)} />
            }
            <h2 className="order-cart-title">Cart</h2>
            <div className="order-items-container">
                {renderOrderItems()}
            </div>
            <div className="calculated-total-container">
                <div className="total-row">
                    <h4 className="cost-calulation-label">Total:</h4>
                    <span className="calculated-values">${calculateOrderTotal()}</span>
                </div>
                <div className="delivery-message-row">
                    <p className="delivery-message">Delivery fee applies</p>
                </div>
            </div>
            <div className="order-checkout-button" onClick={handleOrderCheckout}>
                Order
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
        userInfo: state.userReducer.userInfo,
        selectedLocationIndex: state.order.selectedLocationIndex,
        locations: state.userReducer.userInfo.locations
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendOrder: (orderDetails) => dispatch(sendOrder(orderDetails)),
        noLocationSelected: () => dispatch({type: "NO_LOCATION_SELECTED"}),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderCart);