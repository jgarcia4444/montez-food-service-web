import React from 'react';
import { connect } from 'react-redux';

import '../../styles/components/OrderCart.css';
import OrderItem from './OrderItem';

const OrderCart = ({items}) => {

    const renderOrderItems = () => {
        if (items.length < 1) {
            return <p className="no-items-text">"No items added to cart yet..."</p>
        } else {
            return items.map((orderItem, i) => <OrderItem key={`${orderItem.description}${i}`} itemInfo={orderItem} />)
        }
    }

    return (
        <div className="order-cart-container">
            <h2 className="order-cart-title">Order</h2>
            <div className="order-items-container">
                {renderOrderItems()}
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