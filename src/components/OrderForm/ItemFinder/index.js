import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import '../../../styles/components/ItemFinder.css';
import { FiChevronDown } from 'react-icons/fi';

import Suggestion from './Suggestion';

const ItemFinder = ({itemFinderTextChange, itemText, order, customStyle }) => {

    const {suggestions, fetchSuggestionsError, selectedSuggestion} = order;

    const [showSuggestions, setShowSuggestions] = useState(false);

    const renderSuggestions = () => {
        return suggestions.map((item, i) => <Suggestion key={`${item.description}${i}`} item={item} />)
    }

    useEffect(() => {
        if (suggestions.length > 0) {
            setShowSuggestions(true);
        } else {
            setShowSuggestions(false);
        }
        if (selectedSuggestion.description !== "") {
            setShowSuggestions(false)
        }
    },[suggestions, selectedSuggestion.description])

    return (
        <div className={`item-finder-container ${customStyle}`}> 
            {fetchSuggestionsError !== "" &&
                <p className="error">{fetchSuggestionsError}</p>
            }
            <div className="item-finder-label-row">
                <h3 className="item-finder-label">Item Name</h3>
            </div>
            <div className="item-finder-input-container">
                <input placeholder="Search for an item..." onChange={(e) => itemFinderTextChange(e)} type='text' className="item-finder-input" value={itemText} />
                <div className="suggestions-indicator-container">
                    {suggestions.length > 0 && <FiChevronDown onClick={() => setShowSuggestions(!showSuggestions)} className={`suggestions-indicator ${showSuggestions === true ? 'flip-chevron' : ''}`} size={20} />}
                </div>
            </div>
            {showSuggestions === true &&
                <div className="suggestions-container">
                    {renderSuggestions()}
                </div>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        order: state.order,
    }
}

export default connect(
    mapStateToProps,
    null
    )(ItemFinder);