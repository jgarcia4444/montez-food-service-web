import React from 'react';
import { connect } from 'react-redux';

import '../../../../styles/components/PastOrders/ConfirmOrdersAgain.css'

import {FiCheck, FiXCircle, FiLoader} from 'react-icons/fi';

const ConfirmOrderAgain = ({dismissConfirm, handleSendOrder, sendingOrder}) => {
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
                    <FiXCircle className="order-again-action-icon" onClick={dismissConfirm} color="#a0262e" size={32}/>
                </div>
                <div className="confirm-order-again-action-button">
                    <FiCheck onClick={handleSendOrder} className="check-button order-again-action-icon" color={"#4bb543"} size={20} />
                </div>
            </div>
        {sendingOrder === true &&
        (
            <div className="loading-container">
                <FiLoader color={'#000000'} size={42} className="loading-indicator" />
            </div>
        )
        }
        </div>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        sendingOrder: state.cart.sendingOrder
    }
}

export default connect(
    mapStateToProps,
    null
)(ConfirmOrderAgain)