import React from 'react';
import '../../styles/orderOnline/OrderOnline.css';
import Layout from '../../shared/Layout';
import OrderForm from '../../components/OrderForm';
import OrderCart from '../../components/OrderCart';

const OrderOnline = () => {

    return (
        <Layout>
            <h1 className="page-title">Order Online</h1>
            <div className="order-online-container">
                <div className="seventy-width-container">
                    <OrderForm />
                </div>
                <div className="thirty-width-container">
                    <OrderCart />
                </div>
            </div>
        </Layout>
    )
}

export default OrderOnline;