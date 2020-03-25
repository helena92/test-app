import React from 'react';

const dFormErrors = ({ formErrors }) =>
    <div className='formErrors'>
        {Object.keys(formErrors).map((fieldName, i) => {
            return formErrors[fieldName].length > 0 ? <p key={i}>{fieldName} {formErrors[fieldName]}</p> : '';
        }
    )}
  </div>

export default dFormErrors;