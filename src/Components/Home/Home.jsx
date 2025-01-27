import React from 'react';
import Header from './Header/HeaderMain';
import Investition from './Investition/Investition';
import Need from './Need/Need';
import Hardware from './Hardware/Hardware';
import Installation from './Installation/Installation';
import Contact from './Contact/Contact';
import Summary from './Summary/Summary';
import Footer from './Footer/Footer';
import './Home.scss';
import ScrollArrow from '../common/scrollUpButton';

const Home = () => {
  return (
    <div className="homeContainer" id="main">
      <Header />
      <ScrollArrow />
      <Investition />
      <Need />
      <Hardware />
      <Installation />
      <Contact />
      <Summary />
      <Footer />
    </div>
  );
};

export default Home;
