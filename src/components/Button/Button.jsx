import React from 'react';

const Button = ({ handleSearch }) => {
  return (
    <div onClick={handleSearch} className="button">
      <p className={`button-text noselect`}>New Quote</p>
    </div>
  );
};

export default Button;
