import React from 'react';
import petImg1 from '../assets/images/pets/pet1.jpg'
import petImg2 from '../assets/images/pets/pet2.jpg'
import petImg3 from '../assets/images/pets/pet3.jpg'
import petImg4 from '../assets/images/pets/pet4.jpg'
import petImg5 from '../assets/images/pets/pet5.jpg'
import petImg6 from '../assets/images/pets/pet6.jpg'

const HeroSliderCarousel = () => {
  return (
    <div className='mt-10 max-w-7xl mx-auto px-4'>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src={petImg1} className="w-full h-auto rounded-xl" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={petImg2} className="w-full h-auto rounded-xl" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={petImg3} className="w-full h-auto rounded-xl" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src={petImg4} className="w-full h-auto rounded-xl" />
        </div>
        <div id="item5" className="carousel-item w-full">
          <img src={petImg5} className="w-full h-auto rounded-xl" />
        </div>
        <div id="item6" className="carousel-item w-full">
          <img src={petImg6} className="w-full h-auto rounded-xl" />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
        <a href="#item4" className="btn btn-xs">4</a>
        <a href="#item5" className="btn btn-xs">5</a>
        <a href="#item6" className="btn btn-xs">6</a>
      </div>
    </div>
  );
};

export default HeroSliderCarousel;