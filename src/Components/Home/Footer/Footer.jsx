import React from 'react';
import './Footer.scss';
import fbIcon from '../../../assets/facebook.png'

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerHolder"> 
      <div className="copyright">@Copyright- JustScore</div>
       <a href="https://www.facebook.com/SUN-Install-105339907936880">
        <img className="fbIcon" src={fbIcon} alt="SunInstallFacebook"/>
      </a>
      <div className="contactFooter">
        <p>+48 575 009 210</p>
        <a href="mailto:biuro@suninslall.pl">biuro@suninslall.pl</a>
      </div>
     </div>
    </div>
  );
};

export default Footer;
