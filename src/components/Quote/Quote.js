import React from 'react';
import './Quote.scss';
import anime from 'animejs';

const Quote = ({ quote }) => {
  return (
    <div className="quote">
      <p>{quote}</p>
    </div>
  );
};

export default Quote;
