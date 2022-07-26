import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../../styles/components/OrderForm.css'
import ItemFinder from './ItemFinder';
import QuantitySelector from './QuantitySelector';



const OrderForm = ({userInfo}) => {

    const [itemText, setItemText] = useState('');
    const [itemPrice, setItemPrice] = useState('')
    const [quantity, setQuantity] = useState('1');
    const [selectedItem, setSelectedItem] = useState({});

    const {email, companyName} = userInfo;

    const configureTotalPrice = () => {
        if (itemPrice === "") {
            return ""
        } else {
            let priceNum = parseFloat(itemPrice);
            let totalPrice = (parseInt(quantity) * priceNum).toFixed(2);
            return totalPrice;
        }
    }

    const handleItemSelection = (itemInfo) => {
        setSelectedItem(itemInfo);
        setItemPrice(itemInfo.price);
    }

    const addItemToOrder = () => {

    }

    return (
        <div className="order-form-container">
            <div className="order-form-row">
                <ItemFinder selectedItem={selectedItem} setSelectedItem={handleItemSelection} setItemText={setItemText} itemText={itemText} suggestions={[]} />
                <div className="item-price-container">
                    <h3>Price</h3>
                    {itemPrice === "" ? "" : `$${itemPrice}`}
                </div>
            </div>
            <div className="order-form-row">
                <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
                <div className="total-price-container">
                    <h3>Total Price</h3>
                    <p><strong>{configureTotalPrice()}</strong></p>
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
    }
}

export default connect(
    mapStateToProps,
    null
)(OrderForm);