import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import '../../styles/components/OrderForm.css'
import ItemFinder from './ItemFinder';
import QuantitySelector from './QuantitySelector';
import CartActionAlert from '../Alerts/CartActionAlert';

import fetchSuggestions from '../../redux/actions/orderActions/fetchSuggestions';
import clearSelectedSuggestion from '../../redux/actions/orderActions/clearSelectedSuggestion';
import addItemOrderToCart from '../../redux/actions/cartActions/addItemOrderToCart';
import clearSuggestions from '../../redux/actions/orderActions/clearSuggestions';

const OrderForm = ({clearSuggestions, userInfo, fetchSuggestions, clearSelectedSuggestion, addItemOrderToCart, order}) => {

    const [itemText, setItemText] = useState('');
    const [quantity, setQuantity] = useState('1');
    const [showActionAlert, setShowActionAlert] = useState(false)

    const {email, companyName} = userInfo;
    const {selectedSuggestion} = order;
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
            addItemOrderToCart(cartItem);
            setQuantity('1');
            presentActionAlert();
        }
    }

    const presentActionAlert = () => {
        setShowActionAlert(true);
        setTimeout(() => setShowActionAlert(false), 2000);
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

    useEffect(() => {
        if (selectedSuggestion.description !== "") {
            clearSuggestions();
        }
    }, [selectedSuggestion.description])

    return (
        <div className="order-form-container">
            {showActionAlert === true && <CartActionAlert destructive={false} title={"Added To Cart"} message={`${selectedSuggestion.description} was added to your cart.`} />}
            <div className="order-form-row">
                <ItemFinder itemFinderTextChange={itemFinderTextChange} itemText={configureItemFinderText} suggestions={[]} />
                <div className="item-price-container">
                    <div className="item-price-details-container">
                        <h3 className="price-label">Price</h3>
                        <p className="price-details">{price === "" ? "$0.00" : `$${price.toFixed(2)}`}</p>
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
        order: state.order,
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