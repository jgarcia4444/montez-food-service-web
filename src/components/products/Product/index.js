import React from 'react';
import '../../../styles/products/Product.css';

const Product = ({info}) => {

    const {title, description, img} = info;

    return (
        <div className='product-container'>
            <div className='product-img-row'>
                <img className="product-img" src={img} alt='Example of the product' />
            </div>
            <div className="priduct-info-container">
                <div className="product-title-row">
                    <h4 className='product-title'>{title}</h4>
                </div>
                <div className='product-description-row'>
                    <p className='product-description'>{description}</p>
                </div>
            </div>
        </div>
    )
};

export default Product