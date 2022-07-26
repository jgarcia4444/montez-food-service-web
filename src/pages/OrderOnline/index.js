import React from 'react';
import '../../styles/orderOnline/OrderOnline.css';
import Layout from '../../shared/Layout';
import OrderForm from '../../components/OrderForm';

const OrderOnline = () => {

    return (
        <Layout>
            <h1 className="page-title">Order Online</h1>
            <OrderForm />
        </Layout>
    )
}

export default OrderOnline;