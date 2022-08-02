import React from 'react';
import { connect } from 'react-redux';

import '../../styles/components/OrderCart.css';
import OrderItem from './OrderItem';

const OrderCart = ({items}) => {
    console.log("Here are the items",items)

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
            items.forEach(item => subTotal += parseFloat(item.price))
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

    return (
        <div className="order-cart-container">
            <h2 className="order-cart-title">Order</h2>
            <div className="order-items-container">
                {renderOrderItems()}
            </div>
            <div className="calculated-total-container">
                <div className="sub-total-row">
                    <h4>Subtotal</h4>
                    ${calculateSubTotal()}
                </div>
                <div className="calculated-taxes-row">
                    <h4>Taxes</h4>
                    ${calculateSalesTax()}
                </div>
                <div className="total-row">
                    <h4>Total</h4>
                    ${calculateOrderTotal()}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        items: state.cart.items
    }
}

export default connect(
    mapStateToProps,
    null
)(OrderCart);