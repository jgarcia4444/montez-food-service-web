import React from 'react';
import { connect } from 'react-redux';
import '../../styles/orderOnline/OrderOnline.css';
import Layout from '../../shared/Layout';
import OrderForm from '../../components/OrderForm';
import OrderCart from '../../components/OrderCart';

const OrderOnline = ({companyName}) => {

    console.log("COMPANY NAME: ", companyName);

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
        companyName: state.userReducer.userInfo.companyName
    }
}

export default connect(
    mapStateToProps,
    null
)(OrderOnline);