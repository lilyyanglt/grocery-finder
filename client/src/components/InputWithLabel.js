import React from 'react';

const InputWithLabel = (
  {id,
    type="text",
    value, 
    onInputChange,
  children}) => (
  <div>
    <label htmlFor={id}>{children}: </label>
    <input id={id}
      type={type}
      value={value}
      onChange={(e) => {onInputChange(e)}}
    />
  </div>
)

export default InputWithLabel;