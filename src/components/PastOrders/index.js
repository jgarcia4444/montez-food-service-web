

import React from 'react'
import { connect } from 'react-redux'
import '../../styles/components/PastOrders.css'
import '../../styles/Global.css'

const PastOrders = ({pastOrders}) => {

  return (
    <div className="past-orders-container">
        <h2 className="section-title">Past Orders</h2>
        {pastOrders.length > 0 ?
        pastOrders.map(pastOrder =>{
          return (
            <div className="past-order-component">
              {pastOrder.totalPrice}
            </div>
          )
        })
         :
        <h3>
          No Past orders
        </h3>
        }
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