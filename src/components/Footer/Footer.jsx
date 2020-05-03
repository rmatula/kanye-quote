import React from 'react';
import Twitter from '../../assets/twitter.svg';
import Github from '../../assets/github1.svg';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="my-github">
        <a target="_blank" href="https://github.com/rmatula/kanye-quote">
          <img
            className="github-icon"
            height="20"
            width="20"
            src={Github}
            alt=""
          ></img>
        </a>
      </div>
      <div className="api-author">
        <a
          target="_blank"
          className="api-author-clickable"
          href="https://twitter.com/ajzbc"
        >
          <img
            className="twitter-icon"
            height="15"
            width="15"
            src={Twitter}
            alt=""
          ></img>
          <p className="footer-text">Thanks to Andrew Jazbec</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
