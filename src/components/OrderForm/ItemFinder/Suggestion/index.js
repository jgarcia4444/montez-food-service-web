import React from 'react';
import '../../../../styles/components/Suggestion.css';

const Suggestion = ({item, selectSuggestion}) => {
    const {description} = item;

    return (
        <div className="suggestion-row" onClick={selectSuggestion}>
            {description}
        </div>
    )
}

export default Suggestion;