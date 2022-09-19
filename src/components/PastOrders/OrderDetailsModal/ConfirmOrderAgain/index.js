import React from 'react';
import '../../../../styles/components/PastOrders/ConfirmOrdersAgain.css'

import {FiCheck, FiXCircle} from 'react-icons/fi';

const ConfirmOrderAgain = ({dismissConfirm, handleSendOrder}) => {
  return (
    <div className="confirm-order-again-frame">
        <div className="confirm-order-again-container">
            <div className="confirm-order-title-row">
                <h4 className="confirm-order-title">Confirm?</h4>
            </div>
            <div className="confirm-order-question-row">
                <p className="confirm-order-question">
                    Are you sure you would like to reorder the selected order?
                </p>
            </div>
            <div className="confirm-order-again-action-row">
                <div className="confirm-order-again-action-button">
                    <FiXCircle onClick={dismissConfirm} color="#a0262e" size={32}/>
                </div>
                <div className="confirm-order-again-action-button">
                    <FiCheck onClick={handleSendOrder} className="check-button" color={"#4bb543"} size={20} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ConfirmOrderAgain