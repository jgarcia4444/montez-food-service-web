import React, {useState} from 'react';
import { connect } from 'react-redux';
import {FiDollarSign} from 'react-icon/fi';

import FormInput from '../../../FormInput';
import ItemFinder from '../../../OrderForm/ItemFinder';

import fetchSuggestions from '../../../../redux/actions/orderActions/fetchSuggestions';

const UpdateItemForm = ({removeSelectedItemToUpdate, fetchSuggesstions}) => {

    const [updateItemText, setUpdateItemText] = useState("");

    const [newUnitPrice, setNewUnitPrice] = useState("");
    const [newUnitPriceError, setNewUnitPriceError] = useState("");

    const newPriceInputInfo = {
        label: "New Price",
        value: newUnitPrice,
        changeFunction: e => setNewUnitPrice(e),
        error: newUnitPriceError,
        icon: <FiDollarSign color={"#a0262e"} size={20} />
    }

    const renderPrice = () => {
        itemToUpdate.price !== "" (
            <div className="unit-label-row">
                <div className="item-saved-value">\
                    <h5 className="unit-label">Price: $</h5>
                    <p className="unit-value">{itemToUpdate.price}</p>
                </div>
                <div className="update-item-value">
                    <FormInput inputInfo={newPriceInputInfo} />
                </div>
            </div>
        )
    }

    const handleItemFinderTextChange = (e) => {
        let {value} = e.target
        var inputText = value;
        if (itemToUpdate.description !== "") {
            removeSelectedItemToUpdate()
            inputText = getNewItemTextValue(value);
        }
        if (value === "") {
            clearSuggestions();
        } else {
            fetchSuggestions(inputText, email);
        }
        setItemText(inputText);
    }

    return (
        <div className="update-item-form">
            <div className="row row-1">
                <div className="half-column find-item-container">
                    <ItemFinder itemFinderTextChange={handleItemFinderTextChange} itemText={updateItemText} />
                </div>
                <div className="half-column item-price-container">
                    {renderPrice()}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSuggestions: () => dispatch(fetchSuggestions()),
    }
}

export default (
    mapStateToProps,
    mapDispatchToProps
)(UpdateItemForm);