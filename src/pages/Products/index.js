import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

import '../../styles/products/Products.css';
import Layout from '../../shared/Layout';
import Product from '../../components/products/Product';
import productsData from '../../data/productsData';

const Products = () => {

    const renderProducts = () => {
        return productsData.map(product => <Product key={product.id} info={product} />)
    }

    useEffect(() => {
        ReactGA.initialize('G-7380SQJ6M9');
        ReactGA.pageview('/products');
    })

    return (
        <Layout>
            <div className="page-title-row">
                <h1 className="page-title">Products</h1>
            </div>
                <div className="products-container">
                    {renderProducts()}
                </div>
        </Layout>
    )
}

export default Products;