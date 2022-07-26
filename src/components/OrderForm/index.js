import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../../styles/components/OrderForm.css'
import ItemFinder from './ItemFinder';
import QuantitySelector from './QuantitySelector';



const OrderForm = ({userInfo}) => {

    const [itemText, setItemText] = useState('');
    const [itemPrice, setItemPrice] = useState('')

    const {email, companyName} = userInfo;

    return (
        <div className="order-form-container">
            <div className="order-form-row">
                <ItemFinder setItemText={setItemText} itemText={itemText} suggestions={[]} />
                <div className="item-price-container">
                    <h3>Price</h3>
                    {itemPrice === "" ? "" : `$${itemPrice}`}
                </div>
            </div>
            <div className="order-form-row">
                <QuantitySelector />
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
)(OrderForm);