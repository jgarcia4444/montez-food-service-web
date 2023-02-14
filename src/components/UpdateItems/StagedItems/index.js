import React from 'react';
import { connect } from 'react-redux';

import '../../../styles/Global.css';
import '../../../styles/components/UpdateItems/StagedItems/index.css';

import StagedItem from './StagedItem';
import updateItems from '../../../redux/actions/editItemActions/updateItems';
import SpinningLoader from '../../Loaders/SpinningLoader';

const StagedItems = ({updateItems, editItemReducer}) => {

    const {updatingItems, stagedItems} = editItemReducer;

    const renderStagedItems = () => {
        return stagedItems.map((item, i) => <StagedItem key={`${item.description} ${i}`} itemInfo={item} />)
    }

    const handleUpdateItemsClick = () => {
        if (updatingItems !== true) {
            if (stagedItems.length > 0) {
                updateItems(stagedItems)
            }
        }
    }

    const configureButtonDisplay = () => {
        return updatingItems === true ? <SpinningLoader color={"#fff"} /> : `Update Item${stagedItems.length > 1 ? "s" : ""}`
    }

    return (
        <div className="staged-items-container">
            <div className="staged-items">
                <h3 className="section-title">Staged Items</h3>
                <div className="staged-items-holding-container">
                    {renderStagedItems()}
                </div>
            </div>
            <div className="update-items-button-row">
                <div onClick={handleUpdateItemsClick} className="update-items-button">
                    {configureButtonDisplay()}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        editItemReducer: state.editItemReducer,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateItems: items => dispatch(updateItems(items)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StagedItems);