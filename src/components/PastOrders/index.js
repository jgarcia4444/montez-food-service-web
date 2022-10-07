

import React from 'react'
import { connect } from 'react-redux'

import '../../styles/components/PastOrders/PastOrders.css'
import '../../styles/Global.css'

import PastOrder from './PastOrder'
import OrderDetailsModal from './OrderDetailsModal'


const PastOrders = ({pastOrders, showOrderDetails}) => {

  const renderPastOrders = () => {
    console.log("PAST ORDERS", pastOrders)
    if (pastOrders !== undefined) {
      return pastOrders.length > 0 && pastOrders !== undefined ?
      pastOrders.map((pastOrder, i) => <PastOrder key={i} orderInfo={pastOrder} />)
      :
      <h3>
        No Past orders
      </h3>
    } else {
      return (
        <h3>
          No Past orders
        </h3>    
      )
    }
  }

  return (
    <div className="past-orders-container">
      <div className="section-title-row">
        <h2 className="section-title">Past Orders</h2>
      </div>
        <div className="past-orders-box">
          {renderPastOrders()}
        </div>
        {showOrderDetails && <OrderDetailsModal />}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    pastOrders: state.userReducer.userInfo.pastOrders,
    showOrderDetails: state.orderDetails.showOrderDetails,
  }
}

export default connect(
  mapStateToProps,
  null
)(PastOrders);