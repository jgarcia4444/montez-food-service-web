import React from 'react';
import { connect } from 'react-redux';

import '../../../styles/Global.css';
import '../../../styles/components/UpdateItems/StagedItems/index.css';

import StagedItem from './StagedItem';

const StagedItems = ({stagedItems}) => {

    const renderStagedItems = () => {
        return stagedItems.map((item, i) => <StagedItem key={`${item.description} ${i}`} itemInfo={item} />)
    }

    return (
        <div className="staged-items-container">
            <div className="staged-items">
                <div className="section-title-row">
                    <h3 className="section-title">Staged Items</h3>
                </div>
                <div className="staged-items-holding-container">
                    {renderStagedItems()}
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

export default connect(
    mapStateToProps,
    null
)(StagedItems);