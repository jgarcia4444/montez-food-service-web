import React from 'react';
import '../../../styles/home/ContactModal.css';

const ContactModal = ({closeModal}) => {

    return (
        <div className="contact-modal-container">
            <div onClick={closeModal} className="modal-row">
                <a href="mailto:montezfoodservice@gmail.com" className="modal-link">Email</a>
            </div>
            <div onClick={closeModal} className="modal-row">
                <a href="tel:9514037288" className="modal-link">Call</a>
            </div>
        </div>
    )
}

export default ContactModal;