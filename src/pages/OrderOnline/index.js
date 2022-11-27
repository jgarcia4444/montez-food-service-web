import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';

import '../../styles/orderOnline/OrderOnline.css';
import Layout from '../../shared/Layout';
import OrderForm from '../../components/OrderForm';
import OrderCart from '../../components/OrderCart';


const OrderOnline = ({companyName, items}) => {

    useEffect(() => {
        ReactGA.initialize('G-7380SQJ6M9');
        ReactGA.pageview('/order-online');
    })

    useEffect(() => {
        return () => {
            if (companyName !== "") {
                if (items.length > 0) {
                    ReactGA.initialize('G-7380SQJ6M9');
                    ReactGA.event({
                        category: "Order",
                        action: "User Left An Order In The Cart",
                        label: "Cart Left"
                    });
                }
            }
        }
    })

    return (
        <Layout>
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

const mapStateToProps = state => {
    return {
        companyName: state.userReducer.userInfo.companyName,
        items: state.cart.items,
    }
}

export default connect(
    mapStateToProps,
    null
)(OrderOnline);