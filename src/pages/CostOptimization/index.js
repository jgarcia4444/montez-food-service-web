import React from 'react';
import '../../styles/costOptimization/CostOptimization.css';
import Layout from '../../shared/Layout';

const CostOptimization = () => {

    return (
        <Layout>
            <div className="top-container">
                <div className="half-column">
                    <div className="optimization-details">
                        <div className="optimization-title-row">
                            <h2 className="optimization-title">Cost Optimization Analysis</h2>
                        </div>
                        <div className="smaller-container">
                            <div className="optimization-details-container">
                                <h4 className="optimization-details-title">Are You Currently Paying Too Much?</h4>
                                <p>We will identify if you are being charged more than you should be, and recommend what we can do to help lower those hefty expenses.</p>
                            </div>
                            <div className="optimization-details-container">
                                <h4 className="optimization-details-title">How Much Can You Save?</h4>
                                <p>On average, we tend to save customers 12%-15% on food costs and sometimes even more than 20%! This may equate to $1,000 (or more) a week, or $52,000 a year, or a couple of new cars, or even a down payment for a house!!!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="half-column">
                    <div className="optimization-details">
                        <h2 className="savings-title">Food and Supply Savings</h2>
                        <div className="savings-table-container">
                            <div className="table-headers-row">
                                <div className="table-half-column">
                                    <strong className="table-headers">Source</strong>
                                </div>
                                <div className="table-quarter-column middle-column">
                                    <strong className="table-headers">Savings/Week (adjusted for seasonality)</strong>
                                </div>
                                <div className="table-quarter-column">
                                    <strong className="table-headers">Over 1 year</strong>
                                </div>
                            </div>
                            <div className="table-data-row even-row">
                                <div className="table-half-column">
                                    Savings from invoices for 4 days of deliveries in October
                                </div>
                                <div className="table-quarter-column middle-column">
                                    ~$975
                                </div>
                                <div className="table-quarter-column">
                                    $50,000
                                </div>
                            </div>
                            <div className="table-data-row">
                                <div className="table-half-column">
                                    Extra days of invoice(s) not provided
                                </div>
                                <div className="table-quarter-column middle-column">
                                    ~$150
                                </div>
                                <div className="table-quarter-column">
                                    $7,500
                                </div>
                            </div>
                            <div className="table-data-row even-row">
                                <div className="table-half-column">
                                    Spices and Grains
                                </div>
                                <div className="table-quarter-column middle-column">
                                    ~$50
                                </div>
                                <div className="table-quarter-column">
                                    $2,500
                                </div>
                            </div>
                            <div className="table-data-row">
                                <div className="table-half-column">
                                    Potential for cleaning supplies/services
                                </div>
                                <div className="table-quarter-column middle-column">
                                    ~$100
                                </div>
                                <div className="table-quarter-column">
                                    $5,000
                                </div>
                            </div>
                            <div className="table-data-row even-row">
                                <div className="table-half-column">
                                    Assistance in price negotiations for things such as produce
                                </div>
                                <div className="table-quarter-column middle-column">
                                    ~$150
                                </div>
                                <div className="table-quarter-column">
                                    $7,500
                                </div>
                            </div>
                            <div className="table-data-row">
                                <div className="table-half-column">
                                    Equipment and supplies for rest/catering
                                </div>
                                <div className="table-quarter-column middle-column">
                                    ?
                                </div>
                                <div className="table-quarter-column">
                                    ?
                                </div>
                            </div>
                            <div className="table-data-row even-row">
                                <div className="table-half-column">
                                    <strong>Total</strong>
                                </div>
                                <div className="table-quarter-column middle-column">
                                    <strong>$1,425</strong>
                                </div>
                                <div className="table-quarter-column">
                                    <strong>$72,500</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CostOptimization;