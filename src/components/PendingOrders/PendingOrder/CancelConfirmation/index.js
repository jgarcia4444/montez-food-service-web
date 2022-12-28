
import React from 'react'
import {FiMinus, FiPlus} from 'react-icons/fi'

import '../../../../styles/Global.css';
import '../../../../styles/components/PendingOrders/CancelConfirmation/index.css';

const CancelConfirmation = ({reasonTextError, dismiss, handleConfirmCancel, reasonText, setReasonText}) => {

    return (
        <div className="cancel-confirmation-container">
            <div className="section-title-row">
                <h2 className="section-title">Cancel Order</h2>
            </div>
            <div className="cancel-order-container">
                <h3 className="title">Are you certain?</h3>
                <p>That you want to cancel this order.</p>
                <div className="reason-container">
                    <h3>State a reason:</h3>
                    {reasonTextError !== "" &&
                    (
                        <div className="reason-text-error-row">
                            <p><small className="reason-text-error">{reasonTextError}</small></p>
                        </div>
                    )
                    }
                    <textarea placeholder="Specify a reason..." className="reason-input" value={reasonText} onChange={val => setReasonText(val.target.value)} />
                    <div className="action-button-row">
                        <div onClick={dismiss} className="dismiss-button">
                            <FiMinus size={24} color={"#fff"} />
                        </div>
                        <div onClick={handleConfirmCancel} className="confirm-button">
                            <FiPlus size={24} color={"#fff"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CancelConfirmation;