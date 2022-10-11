import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import sendOrder from '../../redux/actions/cartActions/sendOrder';

import '../../styles/components/OrderCart.css';

import UserAuthAlert from '../Alerts/UserAuthAlert';
import OrderItem from './OrderItem';

const OrderCart = ({cart, userInfo, sendOrder}) => {

    const {items, orderSendError} = cart;

    const [showUserAuthOptions, setShowUserAuthOptions] = useState(false);
    const {companyName, email, pastOrders} = userInfo;

    const navigate = useNavigate();

    const renderOrderItems = () => {
        if (items.length < 1) {
            return <p className="no-items-text">"No items added to cart yet..."</p>
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

    const calculateSalesTax = () => {
        if (items.length === 0) {
            return "0.00";
        } else {
            var taxesTotal = 0.00;
            items.forEach(item => taxesTotal += (parseFloat(item.price) * 0.0725))
            return taxesTotal.toFixed(2);
        }
    }

    const calculateOrderTotal = () => {
        if (items.length === 0) {
            return "0.00";
        } else {
            return (parseFloat(calculateSubTotal()) + parseFloat(calculateSalesTax())).toFixed(2);
        }
    }
    
    const handleOrderCheckout = () => {
        if (items.length !== 0) {
            if (companyName === "") {
                setShowUserAuthOptions(true)
            } else {
                sendOrder({email, items})
                if (orderSendError === "") {
                    navigate('/order-online/confirmation')
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
            <h2 className="order-cart-title">Order</h2>
            <div className="order-items-container">
                {renderOrderItems()}
            </div>
            <div className="calculated-total-container">
                <div className="sub-total-row">
                    <h4 className="cost-calulation-label">Subtotal:</h4>
                    <span className="calculated-values">${calculateSubTotal()}</span>
                </div>
                <div className="calculated-taxes-row">
                    <h4 className="cost-calulation-label">Taxes:</h4>
                    <span className="calculated-values">${calculateSalesTax()}</span>
                </div>
                <div className="total-row">
                    <h4 className="cost-calulation-label">Total:</h4>
                    <span className="calculated-values">${calculateOrderTotal()}</span>
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
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendOrder: (orderDetails) => dispatch(sendOrder(orderDetails)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderCart);