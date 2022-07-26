import React from 'react';
import '../../../styles/components/QuantitySelector.css'


const QuantitySelector = ({quantity, setQuantity}) => {

    return (
        <div className="quantity-selector-container">
            <div className="quantity-selector-label-row">
                <h3 className="quantity-selector-label">Quantity</h3>
            </div>
            <div className="quantity-selector-input-container">
                <div className="icon-container">
                    
                </div>
                <input className="quantity-selector-input" type='number' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            </div>
        </div>
    )
}

export default QuantitySelector;