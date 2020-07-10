import React from 'react';

const InputWithLabel = (
  {id,
    label,
    type="text",
    value, 
    onInputChange}) => (
  <div>
    <label htmlFor={id}>{label}: </label>
    <input id={id}
      type={type}
      value={value}
      onChange={(e) => {onInputChange(e)}}
    />
  </div>
)

export default InputWithLabel;