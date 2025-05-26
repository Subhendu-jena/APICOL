import React from "react";
import Slider from "react-slick";
import a from "../../assets/images/1.png";
import b from "../../assets/images/2.png";
import c from "../../assets/images/3.png";
import d from "../../assets/images/4.png";
import arvind from "../../assets/images/arabinda-ku.-padhi.png";
import prem from "../../assets/images/prem-chand-gfx.png";

const HeroSection: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
  };

  // Fix: just use an array of image imports
  const images = [a, b, c, d];
  const heads = [
    {
      name: " Dr Arabinda kumar Padhee, IAS",
      designation:
        "Principal Secretary, Department of Agriculture and Farmers' Empowerment",
      img: arvind,
    },
    {
      name: "Prem Chandra Chaudhary, IAS",
      designation:
        "Director of Agriculture & Food Production, Odisha and Managing Director, APICOL",
      img: prem,
    },
  ];
  return (
    <div className="grid grid-cols-7">
      <div className="col-span-5">
        <Slider {...settings}>
          {images.map((image, index) => {
            console.log(image);
            return (
              <div key={index} className="flex">
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="col-span-2">
        {heads.map((head, index) => (
          <div key={index} className="grid grid-cols-5 items-center flex justify-center my-10  ">
            {index % 2 === 0 ? (
              <>
                <div className="col-span-2 ">
                  <img src={head.img} alt="" className="rounded-xl h-30 w-30" />
                </div>
                <div className="col-span-3">
                  <h2 className="text-[14px] font-bold text-orange-500">{head.name}</h2>
                  <p className="text-[12px]">{head.designation}</p>
                </div>
              </>
            ) : (
              <>
                <div className="col-span-3 mx-4 my-4">
                  <h2 className="text-[14px] font-bold text-orange-500">{head.name}</h2>
                  <p className="text-[12px]">{head.designation}</p>
                </div>
                <div className="col-span-2 justify-end items-center flex">
                  <img src={head.img} alt="" className="rounded-xl h-30 w-30" />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
