import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../../styles/components/OrderForm.css'
import ItemFinder from './ItemFinder'


const OrderForm = ({userInfo}) => {

    const [itemText, setItemText] = useState('');

    return (
        <div className="order-form-container">
            <div className="order-form-row">
                <ItemFinder setItemText={setItemText} itemText={itemText} suggestions={[]} />
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