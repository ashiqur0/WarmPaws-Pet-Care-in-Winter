import React from 'react';
import HeroSliderCarousel from '../components/HeroSliderCarousel';
import Carousel2 from '../components/Carousel2';
import { useLoaderData } from 'react-router';
import Services from './Services';


const Home = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div>
      <Carousel2 data={data}></Carousel2>
      <Services></Services>
    </div>
  );
};

export default Home;