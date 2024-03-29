import React, {useState} from 'react'
import { connect } from 'react-redux';

import '../../../styles/components/PastOrders/OrderDetailsModal.css';

import dismissOrderDetails from '../../../redux/actions/orderDetailsPresentationActions/dismissOrderDetails';

import PastOrderDetails from '../PastOrder/PastOrderDetails';
import ModalDismissButton from './ModalDismissButton';
import OrderAgainButton from './OrderAgainButton';

const OrderDetailsModal = ({dismissOrderDetails}) => {

  const [modalDismissing, setModalDismissing] = useState(false);

  const handleDismissClick = () => {
    setModalDismissing(true);
    setTimeout(() => {
      dismissOrderDetails()
    }, 300);
  }

  return (
    <div className={`order-details-modal ${modalDismissing === true ? "dismiss-modal" : ""}`}>
      <ModalDismissButton dismissClick={handleDismissClick} />
      <PastOrderDetails />
      <OrderAgainButton />
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    dismissOrderDetails: () => dispatch(dismissOrderDetails()),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(OrderDetailsModal);