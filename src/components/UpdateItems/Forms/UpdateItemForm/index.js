import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {FiDollarSign} from 'react-icons/fi';

import FormInput from '../../../FormInput';
import ItemFinder from '../../../OrderForm/ItemFinder';

import fetchSuggestions from '../../../../redux/actions/orderActions/fetchSuggestions';
import clearSuggestions from '../../../../redux/actions/orderActions/clearSuggestions';
import clearSelectedSuggestion from '../../../../redux/actions/orderActions/clearSelectedSuggestion';

const UpdateItemForm = ({clearSelectedSuggestion, removeSelectedItemToUpdate, fetchSuggestions, clearSuggestions, order}) => {

    const [updateItemText, setUpdateItemText] = useState("");

    const [newUnitPrice, setNewUnitPrice] = useState("");
    const [newUnitPriceError, setNewUnitPriceError] = useState("");

    const {selectedSuggestion} = order;

    const newPriceInputInfo = {
        label: "New Price",
        value: newUnitPrice,
        changeFunction: e => setNewUnitPrice(e),
        error: newUnitPriceError,
        icon: <FiDollarSign color={"#a0262e"} size={20} />
    }

    const renderPrice = () => {
        selectedSuggestion.price !== "" && (
            <div className="unit-label-row">
                <div className="item-saved-value">\
                    <h5 className="unit-label">Price: $</h5>
                    <p className="unit-value">{selectedSuggestion.price}</p>
                </div>
                <div className="update-item-value">
                    <FormInput inputInfo={newPriceInputInfo} />
                </div>
            </div>
        )
    }

    const getNewItemTextValue = textValue => {
        return textValue.slice(textValue.length - 1);
    }

    const handleItemFinderTextChange = (e) => {
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
        setUpdateItemText(inputText);
    }

    useEffect(() => {
        return () => {
            clearSelectedSuggestion()
        }
    })

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
        order: state.order,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSuggestions: (itemQuery) => dispatch(fetchSuggestions(itemQuery)),
        clearSuggestions: () => dispatch(clearSuggestions()),
        clearSelectedSuggestion: () => dispatch(clearSelectedSuggestion()),
    }
}

export default (
    mapStateToProps,
    mapDispatchToProps
)(UpdateItemForm);