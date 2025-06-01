import React from 'react'


const FormInput = (props) => {
    const {label, errorMessage, handleOnChange, ...otrasProps} = props;

    return (
        <div className='formInput'>
            <label> {label} </label>
            <input {...otrasProps} onChange={handleOnChange} />
            <span> {errorMessage} </span>
        </div>
    )
}

export default FormInput