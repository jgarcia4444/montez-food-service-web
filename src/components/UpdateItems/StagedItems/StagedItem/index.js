import React from 'react';
import { connect } from 'react-redux';

import {FiTrash2} from 'react-icons/fi';

import '../../../../styles/components/UpdateItems/StagedItems/StagedItem/index.css';

import removeStagedItem from '../../../../redux/actions/editItemActions/removeStagedItem';

const StagedItem = ({itemInfo, removeStagedItem}) => {

    let {description, price, case_cost, units_per_case, id} = itemInfo;


    const handleDeleteStagedItemClick = () => {
        removeStagedItem(id);
    }

    const configureCaseCost = () => {
        return case_cost !== "" ? `$${case_cost}` : "N/A";
    }

    const configureUnitsPerCase = () => {
        return units_per_case !== "" ? units_per_case : "N/A";
    }

    return (
        <div className="staged-item-cell">
            <div className="staged-item-info-container">
                <div className="staged-item-info-row">
                    <div className="staged-item-info-block">
                        <div className="label-row">
                            <h6 className="staged-item-label">Description</h6>
                        </div>
                        <div className="value-row">
                            <p className="staged-item-value">{description}</p>
                        </div>
                    </div>
                </div>
                <div className="staged-item-info-row">
                    <div className="staged-item-info-block">
                        <div className="label-row">
                            <h6 className="staged-item-label">Price</h6>
                        </div>
                        <div className="value-row">
                            <p className="staged-item-value">${price}</p>
                        </div>
                    </div>
                    <div className="staged-item-info-block">
                        <div className="label-row">
                            <h6 className="staged-item-label">Case Price</h6>
                        </div>
                        <div className="value-row">
                            <p className="staged-item-value">{configureCaseCost()}</p>
                        </div>
                    </div>
                    <div className="staged-item-info-block">
                        <div className="label-row">
                            <h6 className="staged-item-label">Units/Case</h6>
                        </div>
                        <div className="value-row">
                            <p className="staged-item-value">{configureUnitsPerCase()}</p>
                        </div>
                    </div>
                    <div className="staged-item-info-block">
                        <div className="staged-item-action-block">
                            <div onClick={handleDeleteStagedItemClick} className="staged-item-action-button">
                                <FiTrash2 className="delete-staged-item-icon" color={'#fff'} size={18} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        removeStagedItem: id => dispatch(removeStagedItem(id)),
    }
}

export default connect(
    null,
    mapDispatchToProps
)(StagedItem);