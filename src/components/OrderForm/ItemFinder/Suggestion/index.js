import React from 'react';
import { connect } from 'react-redux';
import '../../../../styles/components/Suggestion.css';
import selectSuggestion from '../../../../redux/actions/orderActions/selectSuggestion';

const Suggestion = ({item, selectSuggestion}) => {
    const {description} = item;

    return (
        <div className="suggestion-row" onClick={() => selectSuggestion(item)}>
            {description}
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        selectSuggestion: (itemInfo) => dispatch(selectSuggestion(itemInfo))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Suggestion);