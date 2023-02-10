import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {FiDollarSign, FiLayers} from 'react-icons/fi';


import FormInput from '../../../FormInput';
import ItemFinder from '../../../OrderForm/ItemFinder';
import '../../../../styles/components/UpdateItems/Forms/UpdateItemForm/index.css';

import fetchSuggestions from '../../../../redux/actions/orderActions/fetchSuggestions';
import clearSuggestions from '../../../../redux/actions/orderActions/clearSuggestions';
import clearSelectedSuggestion from '../../../../redux/actions/orderActions/clearSelectedSuggestion';

const UpdateItemForm = ({clearSelectedSuggestion, fetchSuggestions, clearSuggestions, order}) => {

    const [updateItemText, setUpdateItemText] = useState("");

    const [newUnitPrice, setNewUnitPrice] = useState("");
    const [newUnitPriceError, setNewUnitPriceError] = useState("");
    const [newCasePrice, setNewCasePrice] = useState("");
    const [newCasePriceError, setNewCasePriceError] = useState("");
    const [newUnitsPerCase, setNewUnitsPerCase] = useState("");
    const [newUnitsPerCaseError, setNewUnitsPerCaseError] = useState("");

    const {selectedSuggestion} = order;

    const {unitsPerCase, } = selectedSuggestion;

    const newPriceInputInfo = {
        label: "New Price",
        value: newUnitPrice,
        changeFunction: e => setNewUnitPrice(e),
        error: newUnitPriceError,
        icon: <FiDollarSign color={"#a0262e"} size={24} />
    }

    const renderPrice = () => {
        return (
            <div className="edit-item-price-container">
                <div className="item-saved-value">
                    <h3 className="unit-label">Price:</h3>
                    <p className="unit-value">${selectedSuggestion.price}</p>
                </div>
                <div className="update-item-value">
                    <FormInput inputInfo={newPriceInputInfo} />
                </div>
            </div>
        )
    }

    const casePriceInputInfo = {
        label: "New Case Price",
        value: newCasePrice,
        changeFunction: e => setNewCasePrice(e),
        error: newCasePriceError,
        icon: <FiDollarSign color={"#a0262e"} size={24} />,
    }

    const renderCasePrice = () => {
        return (
            <div className="edit-item-case-price-container">
                <div className="item-saved-value">
                    <h3 className="unit-label">Case Price:</h3>
                    <p className="unit-value">${selectedSuggestion.caseCost}</p>
                </div>
                <div className="update-item-value">
                    <FormInput inputInfo={casePriceInputInfo} />
                </div>
            </div>
        )
    }

    const unitsPerCaseInputInfo = {
        label: "New Units/Case",
        value: newUnitsPerCase,
        changeFunction: e => setNewUnitsPerCase(e),
        error: newUnitsPerCaseError,
        icon: <FiLayers color={"#a0262e"} size={24} />,
    }

    const renderUnitsPerCase = () => {
        return (
            <div className="edit-item-units-per-container">
                <div className="item-saved-value">
                    <h3 className="unit-label">Units/Case:</h3>
                    <p className="unit-value">{selectedSuggestion.unitsPerCase}</p>
                </div>
                <div className="update-item-value">
                    <FormInput inputInfo={unitsPerCaseInputInfo} />
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

    const handleAddToStagingClick = () => {
        
    }

    useEffect(() => {
        if (selectedSuggestion.description !== "") {
            setUpdateItemText(selectedSuggestion.description);
        }
    },[selectedSuggestion])

    return (
        <div className="update-item-form">
            <div className="row row-1">
                <div className="half-column find-item-container">
                    <ItemFinder customStyle={"update-item-item-finder"} itemFinderTextChange={handleItemFinderTextChange} itemText={updateItemText} />
                </div>
                <div className="half-column item-price-container">
                    {selectedSuggestion.price !== "" && 
                        renderPrice()
                    }
                </div>
            </div>
            {unitsPerCase !== 0 && unitsPerCase !== "" &&
                <div className="row row-2">
                    <div className="half-column">
                        {renderCasePrice()}
                    </div>
                    <div className="half-column">
                        {renderUnitsPerCase()}
                    </div>
                </div>
            }
            <div className="row row-3">
                <div className="add-to-staging-row">
                    <div onClick={handleAddToStagingClick} className="add-to-staging-button">
                        Add To Staging
                    </div>
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateItemForm);