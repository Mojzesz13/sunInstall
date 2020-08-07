import React from 'react';
import HomeHeader from './HomeHeader/homeHeader';
import HomeInvestition from './HomeInvestition/homeInvestition';
import HomeNeed from './HomeNeed/homeNeed';
import HomeHardware from './HomeHardware/homeHardware';
import HomeInstallation from './HomeInstallation/homeInstallation';
import HomeContact from './HomeContact/HomeContact';
import HomeSummary from './HomeSummary/homeSummary';
import './Home.scss';

const Home = () => {
  return (
    <div className="homeContainer" id="main">
      <HomeHeader />
      <HomeInvestition />
      <HomeNeed />
      <HomeHardware />
      <HomeInstallation />
      <HomeContact />
      <HomeSummary />
    </div>
  );
};

export default Home;
