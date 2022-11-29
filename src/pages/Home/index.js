import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ReactGA from 'react-ga';

import '../../styles/home/Home.css';
import Layout from '../../shared/Layout';
import montezLogo from './imgs/montez-logo.png';
import coverageMap from './imgs/coverage-map.png';
import packaging from './imgs/packaging.png'
import teamwork from './imgs/teamwork.png';
import ContactModal from '../../components/home/ContactModal';

const Home = ({userInfo}) => {

    const navigate = useNavigate();

    const {email, companyName} = userInfo;

    const [showContactModal, setShowContactModal] = useState(false);

    useEffect(() => {
        ReactGA.initialize('G-7380SQJ6M9');
        ReactGA.pageview('/');
    })

    return (
        <Layout>
            <div className='flex-container'>
                <div className='half-flex-container'>
                    <img className="logo-img" src={montezLogo} alt="Montez Food Service Logo" />
                </div>
                <div className='half-flex-container red-container'>
                    <div className="content-container">
                        <h3 className="headline">YOUR LOCAL FOOD AND RESTAURANT SUPPLIES PROVIDER</h3>
                        <p className="family-text">Family Owned, Family Operated, Family Service</p>
                        <div className="contact-row">
                            <div onClick={() => setShowContactModal(!showContactModal)} className="contact-us-button">Contact Us</div>
                            { showContactModal === true &&
                                <div className="modal-row">
                                    <ContactModal closeModal={() => setShowContactModal(false)} />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-title-row">
                <h2 className="section-title">About Us</h2>
            </div>
            <div className="flex-container">
                <div className="about-us-section-container">
                    <div className="half-flex-container">
                        <img className="about-us-image" src={teamwork} alt="Teamwork example" />
                    </div>
                    <div className="half-flex-container column-flex">
                        <div className="about-us-info-container">
                            <h4 className="about-us-section-title">Products and Services</h4>
                            <p>Some of the different types of products we sell are:</p>
                            <ul className="left-aligned-list">
                                <li>Meat</li>
                                <li>Produce</li>
                                <li>Dry-Goods</li>
                                <li>Canned-Goods</li>
                                <li>Paper Products</li>
                                <li>Equipment</li>
                                <li>Smallwares</li>
                                <li>And more...</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-container">
                <div className="about-us-section-container">
                    <div className="half-flex-container column-flex">
                        <div className="about-us-info-container">    
                            <h4 className="about-us-section-title">Service Locations</h4>
                            <p>We provide delivery services to the following areas</p>
                            <ul className="left-aligned-list">
                                <li>Big Bear Mountain Area</li>
                                <li>Coachella Valley</li>
                                <li>Riverside</li>
                                <li>Ontario</li>
                                <li>Oak Glen</li>
                                <li>Ridgecrest</li>
                                <li>Victorville</li>
                                <li>Everywhere in Between!</li>
                            </ul>
                        </div>
                    </div>
                    <div className="half-flex-container">
                        <img className="about-us-image about-us-second-image" src={coverageMap} alt="Coverage Map" />
                    </div>
                </div>
            </div>
            <div className="flex-container">
                <div className="about-us-section-container">
                    <div className="half-flex-container">
                        <img className="about-us-image" src={packaging} alt="Packaging" />
                    </div>
                    <div className="half-flex-container column-flex">
                        <div className="about-us-info-container">    
                            <h4 className="about-us-section-title">Why Montez?</h4>
                            <ul className="left-aligned-list">
                                <li>Guaranteed to save you money on food costs without sacrificing quality</li>
                                <li>Diverse and large variety of products</li>
                                <li>Inclusive cost optimization analysis service</li>
                                <li>No minimums for delivery</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

const mapStateToProps = state => {
    return {
        userInfo: state.userReducer.userInfo
    }
}

export default connect(
    mapStateToProps,
    null
)(Home);