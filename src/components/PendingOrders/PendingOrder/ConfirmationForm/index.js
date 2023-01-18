import React, {useState} from 'react';
import { connect } from 'react-redux';
import {FiMinus, FiCalendar} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import FormInput from '../../../FormInput';
import SpinningLoader from '../../../Loaders/SpinningLoader';

import '../../../../styles/components/ConfirmationForm/index.css';

import confirmOrder from '../../../../redux/actions/pendingOrderActions/confirmOrder';

const ConfirmationForm = ({dismissForm, confirmOrder, pendingOrderDetails, quickbooksAuth}) => {
    const navigate = useNavigate();

    const [deliveryDate, setDeliveryDate] = useState("");
    const [deliveryDateError, setDeliveryDateError] = useState("");
    const [invoicePayableDate, setInvoicePayableDate] = useState("")
    const [invoicePayableDateError, setInvoicePayableDateError] = useState("");

    const {orderId, confirmingOrder, confirmOrderError} = pendingOrderDetails;
    const {realmID, accessToken, refreshToken} = quickbooksAuth;

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

    const navigateToAdminHome = () => {
        navigate('/users/admin');
    }

    const handleConfirmOrderClick = () => {
        setDeliveryDateError("");
        setInvoicePayableDateError("");
        if (deliveryDate === "") {
            setDeliveryDateError("A delivery date must be set.");
        }
        if (invoicePayableDate === "") {
            setInvoicePayableDateError("An invoice payable date must be set.")
        }
        if (deliveryDateError === "" && invoicePayableDateError === "") {
            let confirmationInformation = {
                confirmation_information: {
                    delivery_date: deliveryDate,
                    invoice_payable_date: invoicePayableDate,
                    order_id: orderId,
                },
                service_info: {
                    realm_id: realmID,
                    access_token: accessToken,
                    refresh_token: refreshToken,
                }
            }
            confirmOrder(confirmationInformation);
            if (confirmOrderError === "") {
                setTimeout(navigateToAdminHome, 1500);
            }
        }
    }

    return (
        <div className="confirmation-form-container">
            <div className="dismiss-form-button-row">
                <div onClick={dismissForm} className="dismiss-confirmation-form-button">
                    <FiMinus size={24} color={'#fff'} />
                </div>
            </div>
            <div className="confirmation-form">
                {confirmingOrder === true &&
                    <div className="confirmation-loader-container">
                        <SpinningLoader color={"#ffc72c"}/>
                    </div>
                }
                <div className="input-column">
                    <FormInput inputInfo={deliveryDateInput} />
                    <small className="date-format-text">Date Format: mm/dd/yyyy</small>
                </div>
                <div className="input-column">
                    <FormInput inputInfo={invoicePayableDateInput} />
                    <small className="date-format-text">Date Format: mm/dd/yyyy</small>
                </div>
            </div>
            <div className="confirmation-form-action-row">
                <div onClick={handleConfirmOrderClick} className="send-confirm-action-button">
                    Confirm Order
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        pendingOrderDetails: state.pendingOrderDetails,
        quickbooksAuth: state.admin.quickbooksAuth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        confirmOrder: (confirmationInfo) => dispatch(confirmOrder(confirmationInfo))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ConfirmationForm)