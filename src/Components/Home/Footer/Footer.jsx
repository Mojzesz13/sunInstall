import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="copyright">@Copyright- JustScore</div>
      <div className="contactFooter">
        <p>+48 575 009 210</p>
        <a href="mailto:biuro@suninslall.pl">biuro@suninslall.pl</a>
      </div>
      <a href="https://www.facebook.com/SUN-Install-105339907936880">
        <i className="fab fa-facebook-square" />
      </a>
    </div>
  );
};

export default Footer;
