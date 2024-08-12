import React from "react";
import Slider from "react-slick";
// @ts-ignore
const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div className="h-screen w-full object-cover object-center">
        <img
          src="/hero-01.jpg"
          className="h-full w-full object-cover object-center"
          alt="Hero 1"
        />
      </div>
      <div className="h-screen w-full object-cover object-center">
        <img
          src="/hero-02.jpg"
          className="h-full w-full object-cover object-center"
          alt="Hero 2"
        />
      </div>
      <div className="h-screen w-full object-cover object-center">
        <img
          src="/hero-03.jpg"
          className="h-full w-full object-cover object-center"
          alt="Hero 3"
        />
      </div>
    </Slider>
  );
};

export default ImageSlider;
