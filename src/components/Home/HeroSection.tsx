// import React from "react";
// import Slider from "react-slick";
// import a from "../../assets/images/1.png";
// import b from "../../assets/images/2.png";
// import c from "../../assets/images/3.png";
// import d from "../../assets/images/4.png";
// import arvind from "../../assets/images/arabinda-ku.-padhi.png";
// import prem from "../../assets/images/prem-chand-gfx.png";

// const HeroSection: React.FC = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 200,
//     slidesToShow: 1,
//     arrows: true,
//     slidesToScroll: 1,
//   };

//   const images = [a, b, c, d];
//   const heads = [
//     {
//       name: " Dr Arabinda kumar Padhee, IAS",
//       designation:
//         "Principal Secretary, Department of Agriculture and Farmers' Empowerment",
//       img: arvind,
//     },
//     {
//       name: "Prem Chandra Chaudhary, IAS",
//       designation:
//         "Director of Agriculture & Food Production, Odisha and Managing Director, APICOL",
//       img: prem,
//     },
//   ];
//   return (
//     <div className="w-full overflow-hidden">
//         <Slider {...settings}>
//           {images.map((image, index) => {
//             console.log(image);
//             return (
//                 <img src={image} alt={`Slide ${index + 1}`}  className="w-full"/>
//             );
//           })}
//         </Slider>
//       <div className="flex gap-3">
//         {heads.map((head, index) => (

//               <>
//               <div className="flex items-center justify-center gap-3 bg-gray-200 opacity-15">
//                 <div className="">
//                   <img src={head.img} alt="" className="rounded-4xl h-20 w-20" />
//                 </div>
//                 <div className="">
//                   <h2 className="text-[14px] font-bold text-orange-500">{head.name}</h2>
//                   <p className="text-[12px]">{head.designation}</p>
//                 </div>
//               </div>
//               </>

//         ))}
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import React from "react";
import { useState, useEffect } from "react";
import plant1 from "../../assets/all/plant1.png";
import farmer from "../../assets/all/farmer.jpg";
import modern from "../../assets/all/modern.jpg";
import sus from "../../assets/all/sus.jpg";
import arabinda from "../../assets/all/arabinda.png";
import prem from "../../assets/all/prem.png";
import SlideInFromBottom from "../animation/SlideInFromBottom";
const HeroSection: React.FC = () => {
  const slides = [
    {
      id: 1,
      image: plant1,
      alt: "Agricultural Development",
    },
    {
      id: 2,
      image: farmer,
      alt: "Farmers Empowerment Programs",
    },
    {
      id: 3,
      image: modern,
      alt: "Modern Agriculture Technology",
    },
    {
      id: 4,
      image: sus,
      alt: "Sustainable Farming Practices",
    },
  ];

  function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="relative w-full h-[570px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 transform scale-100"
                : "opacity-0 transform scale-105"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10"></div>
            <img
              src={slide.image || "/placeholder.svg"}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-20 left-8 z-20 text-white animate-slide-up">
              <h2 className="text-xl font-bold mb-4">{slide.alt}</h2>
              <p className="text-lg max-w-md">
                Promoting agricultural development and investment opportunities
                in Odisha
              </p>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <i className="fas fa-chevron-left text-lg"></i>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <i className="fas fa-chevron-right text-lg"></i>
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="relative w-full h-[570px]">
      {/* HeroSlider as background */}
      <div className="absolute inset-0 z-0">
        <HeroSlider />
      </div>

      {/* Overlay cards at bottom-right (slightly moved up) */}
      <div className="absolute bottom-20 right-6 z-10 flex flex-row gap-6">
        {/* Card 1 */}
        <SlideInFromBottom>
          <div className="flex items-center bg-white/20 backdrop-blur-md rounded-full shadow-lg p-5 pr-8 w-fit slide-in-right">
            <img
              src={arabinda}
              alt="Dr Arabinda Kumar Padhee"
              className="w-24 h-24 rounded-full object-cover mr-6"
            />
            <div>
              <p className="text-white font-bold text-lg">
                Dr Arabinda Kumar Padhee, IAS
              </p>
              <p className="text-white text-base">Hon’ble Secretary</p>
            </div>
          </div>
        </SlideInFromBottom>
        {/* Card 2 */}
        <SlideInFromBottom delay={1}>
          <div className="flex items-center bg-white/20 backdrop-blur-md rounded-full shadow-lg p-5 pr-8 w-fit slide-in-right">
            <img
              src={prem}
              alt="Prem Chandra Chaudhary"
              className="w-24 h-24 rounded-full object-cover mr-6"
            />
            <div>
              <p className="text-white font-bold text-lg">
                Prem Chandra Chaudhary, IAS
              </p>
              <p className="text-white text-base">Hon’ble Director</p>
            </div>
          </div>
        </SlideInFromBottom>
      </div>
    </div>
  );
};

export default HeroSection;
