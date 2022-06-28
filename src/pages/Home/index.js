import React from 'react';
import '../../styles/home/Home.css';
import Layout from '../../shared/Layout';

const Home = () => {

    console.log("HELLO FROM HOME PAGE COMPONENT!!!!");

    return (
        <Layout>
            <div className='flex-container'>
                <div className='half-flex-container'>

                </div>
                <div className='half-flex-container'>
                    <div className="content-container">
                        <h3>YOUR LOCAL FOOD AND RESTAURANT SUPPLIES PROVIDER</h3>
                        <p>Family Owned, Family Operated, Family Service</p>
                        <div className="contact-us-button">
                            <a className="contac-us-anchor" href="tel:9514037288">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home;