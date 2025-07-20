import React from 'react';

export const Input = ({ name, labelText, placeholder }) => {
  return (
    <>
      <label htmlFor={name}>{labelText}</label>
      <input id={name} name={name} required aria-required='true' placeholder={placeholder} />
    </>
  );
};
