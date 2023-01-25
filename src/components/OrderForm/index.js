import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {FiCheck} from 'react-icons/fi';

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
    const [showActionAlert, setShowActionAlert] = useState(false);
    const [unitsSelected, setUnitsSelected] = useState(true);

    const {email, companyName} = userInfo;
    console.log("User info from the order form page.", userInfo)
    const {selectedSuggestion} = order;
    const {price, unitsPerCase} = selectedSuggestion;


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
            fetchSuggestions(inputText, email);
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
            {unitsPerCase !== 0 && unitsPerCase !== "" &&
                <div className="order-form-row">
                    <div className="units-or-case-selection-container">
                        <div className="units-selection-container">
                            <div onClick={() => setUnitsSelected(true)} className="units-selection-box">
                                {unitsSelected === true && <FiCheck size={20} color={'#a0262e'}/>}
                            </div> Units
                        </div>
                        <div className="or-descriptive-container">
                        </div>
                        <div className="case-selection-container">
                            <div onClick={() => setUnitsSelected(false)} className="case-selection-box">
                                {unitsSelected === false &&
                                    <FiCheck color={"#a0262e"} size={20} />
                                }
                            </div> Case
                        </div>
                    </div>
                    <div className="case-details-container">
                        Units Per Case {unitsPerCase}
                    </div>
                </div>
            }
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
        fetchSuggestions: (itemQuery, email) => dispatch(fetchSuggestions(itemQuery, email)),
        clearSelectedSuggestion: () => dispatch(clearSelectedSuggestion()),
        addItemOrderToCart: (cartItem) => dispatch(addItemOrderToCart(cartItem)),
        clearSuggestions: () => dispatch(clearSuggestions()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderForm);