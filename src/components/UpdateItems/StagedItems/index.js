import React from 'react';
import { connect } from 'react-redux';

import '../../../styles/Global.css';
import '../../../styles/components/UpdateItems/StagedItems/index.css';

import StagedItem from './StagedItem';
import updateItems from '../../../redux/actions/editItemActions/updateItems';

const StagedItems = ({stagedItems, updateItems}) => {

    const renderStagedItems = () => {
        return stagedItems.map((item, i) => <StagedItem key={`${item.description} ${i}`} itemInfo={item} />)
    }

    const handleUpdateItemsClick = () => {
        if (stagedItems.length > 0) {
            updateItems(stagedItems)
        }
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
                    Update Item{stagedItems.length > 1 ? "s" : ""}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        stagedItems: state.editItemReducer.stagedItems,
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