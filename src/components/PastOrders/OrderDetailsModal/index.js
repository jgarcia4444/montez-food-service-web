import React from 'react'
import { connect } from 'react-redux';

import '../../../styles/components/PastOrders/OrderDetailsModal.css';

import dismissOrderDetails from '../../../redux/actions/orderDetailsPresentationActions/dismissOrderDetails';

import PastOrderDetails from '../PastOrder/PastOrderDetails';
import ModalDismissButton from './ModalDismissButton';

const OrderDetailsModal = ({dismissOrderDetails}) => {


  return (
    <div onClick={() => dismissOrderDetails()} className="order-details-modal">
      <ModalDismissButton />
      <PastOrderDetails />
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