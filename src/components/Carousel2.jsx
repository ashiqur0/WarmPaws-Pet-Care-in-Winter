import React, { useState } from "react";

const Carousel2 = ({data}) => {
  const [slide, setSlide] = useState(1);
  // console.log(data.length);

  const totalSlides = data.length;

  const goToSlide = (num) => {
    if (num < 1) num = totalSlides;
    if (num > totalSlides) num = 1;
    setSlide(num);
  };

  return (
    <div className="carousel w-full my-10 relative overflow-hidden">
      {data.map((pet) => (
        <div
          key={pet.serviceId}
          className={`carousel-item absolute w-full transition-opacity duration-700 ease-in-out ${
            slide == pet.serviceId ? "opacity-100 relative" : "opacity-0"
          } flex justify-center items-center bg-white`}
        >
          <img
            src={pet.image}
            className="md:w-1/2"
            alt={`Slide ${pet.serviceId}`}
          />

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button
              onClick={() => goToSlide(slide - 1)}
              className="btn btn-circle opacity-50"
            >
              ❮
            </button>
            
            <button
              onClick={() => goToSlide(slide + 1)}
              className="btn btn-circle opacity-50"
            >
              ❯
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel2;
