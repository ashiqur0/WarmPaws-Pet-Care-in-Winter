import React from 'react';
import HeroSliderCarousel from '../components/HeroSliderCarousel';
import { useLoaderData } from 'react-router';
import Services from './Services';
import WinterCareTips from '../components/WinterCareTips';
import MeetOutExpert from '../components/MeetOutExpert';
import Banner from '../components/Banner';
import Marquee from 'react-fast-marquee';


const Home = () => {
  const data = useLoaderData();
  
  return (
    <div>
      <Banner data={data}></Banner>
      <Services></Services>
      <WinterCareTips></WinterCareTips>      
      <MeetOutExpert></MeetOutExpert>
    </div>
  );
};

export default Home;