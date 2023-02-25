import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {FiMinus, FiCalendar, FiDollarSign} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import FormInput from '../../../FormInput';
import SpinningLoader from '../../../Loaders/SpinningLoader';
import SelectBox from '../../../Buttons/SelectBox';

import '../../../../styles/components/ConfirmationForm/index.css';

import confirmOrder from '../../../../redux/actions/pendingOrderActions/confirmOrder';

const ConfirmationForm = ({dismissForm, confirmOrder, pendingOrderDetails, quickbooksAuth}) => {
    const navigate = useNavigate();

    const [deliveryDate, setDeliveryDate] = useState("");
    const [deliveryDateError, setDeliveryDateError] = useState("");
    const [invoicePayableDateError, setInvoicePayableDateError] = useState("");
    const [deliveryFee, setDeliveryFee] = useState('');
    const [deliveryFeeError, setDeliveryFeeError] = useState('');
    const [previousSelected, setPreviousSelected] = useState(false);

    const {orderId, confirmingOrder, confirmOrderError, previousDeliveryFee, deliveryAddress} = pendingOrderDetails;
    const {realmID, accessToken, refreshToken} = quickbooksAuth;

    let deliveryDateInput = {
        label: "Delivery Date",
        value: deliveryDate,
        changeFunction: val => setDeliveryDate(val),
        error: deliveryDateError,
        icon: <FiCalendar size={20} color={"#ffc72c"} />
    }

    const handleDeliveryFeeChange = (feeValue) => {
        if (previousSelected === true && feeValue !== deliveryFee) {
            setPreviousSelected(false);
            setDeliveryFee(feeValue);
        } else {
            setDeliveryFee(feeValue)
        }
    }

    let deliveryFeeInfo = {
        label: "Delivery Fee",
        value: deliveryFee,
        changeFunction: handleDeliveryFeeChange,
        error: deliveryFeeError,
        icon: <FiDollarSign size={20} color={'#ffc72c'} />
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
        if (deliveryFee === "") {
            setDeliveryFeeError("A delivery fee must be set.");
        }
        if (deliveryDateError === "" && invoicePayableDateError === "") {
            const {street, city, state, zipCode} = deliveryAddress;
            let deliveryItem = {
                itemInfo: {
                    description: `Deliver To: ${street} ${city}, ${state}, ${zipCode}`,
                    price: parseFloat(deliveryFee),
                },
                case_bought: false,
                quantity: 1,
            }
            let confirmationInformation = {
                confirmation_information: {
                    delivery_date: deliveryDate,
                    order_id: orderId,
                    delivery_item: deliveryItem,
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

    useEffect(() => {
        if (previousSelected === true) {
            setDeliveryFee(previousDeliveryFee);
        }
    },[previousSelected])

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
                    <div className = "delivery-fee-row">
                        <div className="delivery-fee-column">
                            <FormInput inputInfo={deliveryFeeInfo} />
                        </div>
                        {previousDeliveryFee !== "" && (
                            <div className="delivery-fee-column">
                                <div className = "delivery-fee-row">
                                    <p className="delivery-fee-use-last-description">
                                        Use Previous
                                    </p>
                                </div>
                                <div className = "delivery-fee-row">
                                    <div className="delivery-fee-column">
                                        <SelectBox value={previousSelected} setValue={() => setPreviousSelected(!previousSelected)} />
                                    </div>
                                    <div className="delivery-fee-column">
                                        <p className="past-delivery-fee">${parseFloat(previousDeliveryFee).toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    </div>
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