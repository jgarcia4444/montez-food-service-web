import React from 'react';
import '../../styles/components/FormInput.css';

const FormInput = ({inputInfo}) => {

    const configureInputType = (label) => {
        switch(label) {
            case "Password":
                return "password";
            case "Email":
                return "email";
            default:
                return "text";
        }
    }

    let inputType = configureInputType(inputInfo.label);

    return (
        <div key={inputInfo.label} className="input-row">
            <div className="input-label-row">
                {inputInfo.label}
                {inputInfo.error !== "" && <small className="input-error">{inputInfo.error}</small>}
            </div>
            <div className="input-outer">
                {inputInfo.icon}
                <input className="input" type={inputType} value={inputInfo.value} onChange={(val) => inputInfo.changeFunction(val.target.value)} />
            </div>
        </div>
    )
}

export default FormInput;