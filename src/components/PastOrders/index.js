

import React from 'react'
import { connect } from 'react-redux'

import '../../styles/components/PastOrders/PastOrders.css'
import '../../styles/Global.css'

import PastOrder from './PastOrder'


const PastOrders = ({pastOrders}) => {

  const renderPastOrders = () => {
    return pastOrders.length > 0 ?
    pastOrders.map((pastOrder, i) => <PastOrder key={i} orderInfo={pastOrder} />)
    :
    <h3>
      No Past orders
    </h3>
  }

  return (
    <div className="past-orders-container">
        <h2 className="section-title">Past Orders</h2>
        {renderPastOrders()}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    pastOrders: state.userReducer.userInfo.pastOrders
  }
}

export default connect(
  mapStateToProps,
  null
)(PastOrders);