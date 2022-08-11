import React, { useState } from 'react';
import { connect } from 'react-redux';

import '../../styles/components/OrderForm.css'
import ItemFinder from './ItemFinder';
import QuantitySelector from './QuantitySelector';

import fetchSuggestions from '../../redux/actions/orderActions/fetchSuggestions';
import clearSelectedSuggestion from '../../redux/actions/orderActions/clearSelectedSuggestion';
import addItemOrderToCart from '../../redux/actions/cartActions/addItemOrderToCart';
import clearSuggestions from '../../redux/actions/orderActions/clearSuggestions';

const OrderForm = ({clearSuggestions, userInfo, fetchSuggestions, selectedSuggestion, clearSelectedSuggestion, addItemOrderToCart}) => {

    const [itemText, setItemText] = useState('');
    const [quantity, setQuantity] = useState('1');

    const {email, companyName} = userInfo;
    const {price, } = selectedSuggestion;

    const configureTotalPrice = () => {
        if (price === "") {
            return "0.00"
        } else {
            let priceNum = parseFloat(price);
            let totalPrice = (parseInt(quantity) * priceNum).toFixed(2);
            return totalPrice;
        }
    }

    const addItemToOrder = () => {
        if (selectedSuggestion.description !== "") {
            let cartItem = {
                ...selectedSuggestion,
                quantity,
                totalPrice: configureTotalPrice()
            };
            addItemOrderToCart(cartItem)
        }
    }

    const getNewItemTextValue = textValue => {
        return textValue.slice(textValue.length - 1);
    }

    const itemFinderTextChange = (e) => {
        let {value} = e.target
        var inputText = value;
        if (selectedSuggestion.description !== "") {
            clearSelectedSuggestion()
            inputText = getNewItemTextValue(value);
        }
        if (value === "") {
            clearSuggestions();
        } else {
            fetchSuggestions(inputText);
        }
        setItemText(inputText);
    }


    const configureItemFinderText = selectedSuggestion.description === "" ? itemText : selectedSuggestion.description;

    return (
        <div className="order-form-container">
            <div className="order-form-row">
                <ItemFinder itemFinderTextChange={itemFinderTextChange} itemText={configureItemFinderText} suggestions={[]} />
                <div className="item-price-container">
                    <div className="item-price-details-container">
                        <h3 className="price-label">Price</h3>
                        <p className="price-details">{price === "" ? "$0.00" : `$${price}`}</p>
                    </div>
                </div>
            </div>
            <div className="order-form-row">
                <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
                <div className="total-price-container">
                    <div className="item-price-details-container">
                        <h3 className="price-label">Total Price</h3>
                        <p className="price-details">${configureTotalPrice()}</p>
                    </div>
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
        clearSelectedSuggestion: () => dispatch(clearSelectedSuggestion()),
        addItemOrderToCart: (cartItem) => dispatch(addItemOrderToCart(cartItem)),
        clearSuggestions: () => dispatch(clearSuggestions()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderForm);