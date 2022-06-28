import React, {useState} from 'react';
import '../../styles/home/Home.css';
import Layout from '../../shared/Layout';
import montezLogo from './imgs/montez-logo.png';
import ContactModal from '../../components/home/ContactModal';

const Home = () => {

    const [showContactModal, setShowContactModal] = useState(false);

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
        </Layout>
    )
}

export default Home;