import React, { useState } from 'react';
import { connect } from 'react-redux';
import fetchSuggestions from '../../redux/actions/orderActions/fetchSuggestions';
import '../../styles/components/OrderForm.css'
import ItemFinder from './ItemFinder';
import QuantitySelector from './QuantitySelector';



const OrderForm = ({userInfo, fetchSuggestions, selectedSuggestion}) => {

    const [itemText, setItemText] = useState('');
    const [quantity, setQuantity] = useState('1');

    const {email, companyName} = userInfo;
    const {price, } = selectedSuggestion;

    const configureTotalPrice = () => {
        if (price === "") {
            return "$0.00"
        } else {
            let priceNum = parseFloat(price);
            let totalPrice = (parseInt(quantity) * priceNum).toFixed(2);
            return totalPrice;
        }
    }

    const addItemToOrder = () => {

    }

    const itemFinderTextChange = (e) => {
        let {value} = e.target
        fetchSuggestions(value);
        setItemText(value);
    }

    return (
        <div className="order-form-container">
            <div className="order-form-row">
                <ItemFinder itemFinderTextChange={itemFinderTextChange} itemText={itemText} suggestions={[]} />
                <div className="item-price-container">
                    <h3>Price</h3>
                    <p>{price === "" ? "$0.00" : `$${price}`}</p>
                </div>
            </div>
            <div className="order-form-row">
                <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
                <div className="total-price-container">
                    <h3>Total Price</h3>
                    <p>{configureTotalPrice()}</p>
                </div>
            </div>
            <div className="order-form-row">
                <div onClick={addItemToOrder} className="add-to-order-button">
                    Add To Order
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userInfo: state.userReducer.userInfo,
        selectedSuggestion: state.order.selectedSuggestion
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSuggestions: (itemQuery) => dispatch(fetchSuggestions(itemQuery)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderForm);