import React, { useState } from 'react';
import { connect } from 'react-redux'
import '../../../styles/components/ItemFinder.css';
import { FiChevronDown } from 'react-icons/fi';

import Suggestion from './Suggestion';

const ItemFinder = ({itemFinderTextChange, itemText, order}) => {

    const {suggestions} = order;

    const [showSuggestions, setShowSuggestions] = useState(false);

    const renderSuggestions = () => {
        return suggestions.map((item, i) => <Suggestion key={`${item.description}${i}`} item={item} />)
    }

    return (
        <div className="item-finder-container"> 
            <div className="item-finder-label-row">
                <h3 className="item-finder-label">Item Name</h3>
            </div>
            <div className="item-finder-input-container">
                <input onChange={(e) => itemFinderTextChange(e)} type='text' className="item-finder-input" value={itemText} />
                <div className="suggestions-indicator-container">
                    {suggestions.length > 0 && <FiChevronDown onClick={() => setShowSuggestions(!showSuggestions)} className={`suggestions-indicator ${showSuggestions === true ? 'flip-chevron' : ''}`} size={20} />}
                </div>
                {showSuggestions === true &&
                    renderSuggestions()
                }
            </div>
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