import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';

import '../../styles/Global.css';

import getPendingOrders from '../../redux/actions/adminActions/getPendingOrders';

import PendingOrder from './PendingOrder';
import SpinningLoader from '../Loaders/SpinningLoader';

const PendingOrders = ({admin, getPendingOrders}) => {

    const {username, pendingOrderIds, pendingOrders, fetchingPendingOrders} = admin;

    console.log("fetching pending orders", fetchingPendingOrders);

    const renderPendingOrders = () => {
        if (pendingOrders !== null) {
            if (pendingOrders.length > 0) {
                return pendingOrders.map(pendingOrder => <PendingOrder orderInfo={pendingOrder} />)
            } else {
                return <h3 className="no-pending-orders">No pending Orders...</h3>    
            }
        } else {
            return <h3 className="no-pending-orders">No pending Orders...</h3>
        }
    }

    useEffect(() => {
        if (pendingOrders === null) {
            let fetchInfo = {
                username,
                pending_order_ids: pendingOrderIds,
            }
            getPendingOrders(fetchInfo);
        }
    }, [pendingOrders])

    return (
        <div className="pending-orders-container">
            <div className="section-title-row">
                <h2 className="section-title">Pending Orders</h2>
            </div>
            <div className="pending-orders">
                {fetchingPendingOrders === true ?
                <SpinningLoader color={"#ffc72c"} />
                :
                renderPendingOrders()
                }
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