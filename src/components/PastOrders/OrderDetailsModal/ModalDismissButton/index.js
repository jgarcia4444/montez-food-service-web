import React from 'react'
import {FiMinusCircle} from 'react-icons/fi';

import '../../../../styles/components/PastOrders/ModalDismissButton.css'

const ModalDismissButton = () => {
  return (
    <div className="modal-dismiss-button-row">
        <FiMinusCircle className="modal-dismiss-button" color={'#a0262e'} size={32} />
    </div>
  )
}

export default ModalDismissButton