import React from 'react';
import '../../../styles/components/ItemFinder.css';
import { FiChevronDown } from 'react-icons/fi';

const ItemFinder = ({setItemText, itemText, suggestions}) => {

    return (
        <div className="item-finder-container"> 
            <div className="item-finder-label-row">
                <h3 className="item-finder-label">Item Name</h3>
            </div>
            <div className="item-finder-input-container">
                <input onChange={(e) => setItemText(e.target.value)} type='text' className="item-finder-input" value={itemText} />
                <div className="suggestions-indicator-container">
                    {suggestions.length > 0 && <FiChevronDown className='suggestions-indicator' size={20} />}
                </div>
            </div>
        </div>
    )
}

export default ItemFinder;