import React, {useState} from 'react';
import { connect } from 'react-redux';
import {FiMinus, FiCalendar} from 'react-icons/fi';

import FormInput from '../../../FormInput';

const ConfirmationForm = ({dismissForm}) => {

    const [deliveryDate, setDeliveryDate] = useState("");
    const [deliveryDateError, setDeliveryDateError] = useState("");
    const [invoicePayableDate, setInvoicePayableDate] = useState("")
    const [invoicePayableDateError, setInvoicePayableDateError] = useState("");

    let deliveryDateInput = {
        label: "Delivery Date",
        value: deliveryDate,
        changeFunction: val => setDeliveryDate(val),
        error: deliveryDateError,
        icon: <FiCalendar size={20} color={"#ffc72c"} />
    }

    let invoicePayableDateInput = {
        label: "Invoice Payable",
        value: invoicePayableDate,
        changeFunction: val => setInvoicePayableDate(val),
        error: invoicePayableDateError,
        icon: <FiCalendar size={20} color={"#ffc72c"} />
    }

    return (
        <div className="confirmation-form-container">
            <div onClick={dismissForm} className="dismiss-confirmation-form-button">
                <FiMinus size={24} color={'#a0262e'} />
            </div>
            <div className="confirmation-form">
                <div className="input-column">
                    <FormInput inputInfo={deliveryDateInput} />
                </div>
                <div className="input-column">
                    <FormInput inputInfo={invoicePayableDateInput} />
                </div>
            </div>
            <div className="confirmation-form-action-row"></div>
        </div>
    )
};

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ConfirmationForm)