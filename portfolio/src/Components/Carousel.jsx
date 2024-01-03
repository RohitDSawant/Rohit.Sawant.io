import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CarouselSlider = ({ slider }) => {
  return (
    <>
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        interval={1500}
        showThumbs={false}
        showArrows={false}
        showIndicators={false}
      >
        {slider &&
          slider.map((ele, id) => (
            <div className="" key={id + 1}>
              <img className="h-3/6 mb-4" src={ele} alt="proj_img" />
            </div>
          ))}
      </Carousel>
    </>
  );
};

export default CarouselSlider;
