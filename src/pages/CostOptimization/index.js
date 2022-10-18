import React from 'react';
import '../../styles/costOptimization/CostOptimization.css';
import Layout from '../../shared/Layout';

const CostOptimization = () => {

    const data = [
        {source: "Savings from invoices for 4 days of deliveries in October", weeklySavings: '975', yearlySavings: '50,000'},
        {source: "Extra days of invoice(s) not provided", weeklySavings: '150', yearlySavings: '7,500'},
        {source: "Spices and Grains", weeklySavings: '50', yearlySavings: '2500'},
        {source: "Potential for cleaning supplies/services", weeklySavings: '100', yearlySavings: '5,000'},
        {source: "Assistance in price negotiations for things such as produce", weeklySavings: '150', yearlySavings: '7,500'},
        {source: "Equipment and supplies for rest/catering", weeklySavings: '?', yearlySavings: '?'},
    ];

    const renderTableData = () => {
        return data.map(dataInfo => {
            const {source, weeklySavings, yearlySavings} = dataInfo
            return (
                <div className="table-data-row">
                    <div className="table-half-column">
                        {source}
                    </div>
                    <div className="table-quarter-column middle-column">
                        ~${weeklySavings}
                    </div>
                    <div className="table-quarter-column">
                        ${yearlySavings}
                    </div>
                </div>
            )
        })
    }

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
                        <h2 className="savings-title">Savings</h2>
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
                            {renderTableData()}
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