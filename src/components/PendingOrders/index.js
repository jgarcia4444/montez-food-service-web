import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';

import '../../styles/Global.css';

import getPendingOrders from '../../redux/actions/adminActions/getPendingOrders';

import PendingOrder from './PendingOrder';

const PendingOrders = ({admin, getPendingOrders}) => {

    const dispatch = useDispatch()

    const {username, pendingOrderIds, pendingOrders} = admin;

    const renderPendingOrders = () => {
        if (pendingOrders.length !== 0) {
            return pendingOrders.map(pendingOrder => <PendingOrder orderInfo={pendingOrder} />)
        } else {
            return <h3 className="no-pending-orders">No pending Orders...</h3>
        }
    }

    const fetchPendingOrders = () => {
        dispatch({type: "FETCHING_PENDING_ORDERS"});
        setTimeout(() => {
            let fetchInfo = {
                username,
                pending_order_ids: pendingOrderIds,
            }
            getPendingOrders(fetchInfo);
        }, 1000);
    }

    useEffect(() => {
        if (pendingOrders === null) {
            fetchPendingOrders()
        }
    })

    return (
        <div className="pending-orders-container">
            <div className="section-title-row">
                <h2 className="section-title">Pending Orders</h2>
            </div>
            <div className="pending-orders">
                {renderPendingOrders()}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        admin: state.admin,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPendingOrders: (fetchInfo) => dispatch(getPendingOrders(fetchInfo)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PendingOrders);