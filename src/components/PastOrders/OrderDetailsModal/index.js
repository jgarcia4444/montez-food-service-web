import React from 'react'
import PastOrderDetails from '../PastOrder/PastOrderDetails';

import '../../../styles/components/PastOrders/OrderDetailsModal.css';

const OrderDetailsModal = () => {


  return (
    <div className="order-details-modal">
        <PastOrderDetails />
    </div>
  )
}

export default OrderDetailsModal;