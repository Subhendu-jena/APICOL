import cm from "../../assets/all/cm.jpeg";
import md from "../../assets/all/arabinda.png";
import chairman from "../../assets/all/prem.png";
import bgCM from "../../assets/all/bgf.png";
import SlideInFromBottom from "../animation/SlideInFromBottom";
import SlideInFromRight from "../animation/SlideInFromRight";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MessageSection() {
  const data = [
    {
      designation: "Chief Minister",
      image: cm,
      name: "Shri Mohan Charan Majhi",
      message:
        "Agriculture is the backbone of Odisha's economy. Through APICOL, we are committed to empowering our farmers with modern technology, financial support, and sustainable practices. Our vision is to make Odisha a leading state in agricultural innovation and food security, ensuring prosperity for our farming communities.",
    },
    {
      designation: "Chairman",
      image: chairman,
      name: "Prem Chandra Chaudhary, IAS",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    },

    {
      designation: "Managing Director",
      image: md,
      name: "Dr Arabinda Kumar Padhee, IAS",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    },
  ];
const CustomPrevArrow = ({ className, onClick }: any) => (
  <div className={`${className} z-10 left-2`} onClick={onClick}>
    <ChevronLeft size={24} className="text-orange-600 bg-gray-300 h-10 w-10 rounded-full" />
  </div>
);

const CustomNextArrow = ({ className, onClick }: any) => (
  <div className={`${className} z-10 right-2`} onClick={onClick}>
    <ChevronRight size={24} className="text-orange-600 bg-gray-300 h-10 w-10 rounded-full" />
  </div>
);
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: true,
     nextArrow: <CustomNextArrow/>,
    prevArrow: <CustomPrevArrow />
  };

  const Card = ({
    designation,
    image,
    name,
    message,
  }: {
    designation: string;
    image: string;
    name: string;
    message: string;
  }) => (
    <div className="container bg-transparent mx-auto px-4">
      <SlideInFromBottom className="text-3xl md:text-4xl font-bold text-center mb-6 animate-fade-in">
        Message From Hon'ble {designation} of Odisha
      </SlideInFromBottom>

      <div className="mx-auto max-w-6xl px-2">
        <div className="animate-slide-in-left">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/5">
              <div className="relative group">
                {/* <SlideInFromLeft className="w-90 md:w-full"> */}
                <img
                  src={image}
                  alt={name}
                  className="rounded-full shadow-lg w-full aspect-square object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                {/* </SlideInFromLeft> */}
              </div>
            </div>
            <div className="w-full md:w-4/5">
              <SlideInFromRight className="w-full ">
                <div className="mb-6">
                  <i className="fas fa-quote-left text-3xl text-orange-600 mb-4"></i>
                </div>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed italic">
                  "{message}"
                </p>
                <div className="border-l-4 border-orange-600 pl-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">
                    {name}
                  </h2>
                  <h3 className="text-lg text-orange-600 font-semibold">
                    Hon'ble {designation} of Odisha
                  </h3>
                </div>
              </SlideInFromRight>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ backgroundImage: `url(${bgCM})` }} className="bg-cover bg-center">
      <div className="h-1 bg-orange-500"></div>
      <section className="bg-cover bg-center  py-8 max-w-7xl mx-auto">
        <Slider {...settings}>
          {data.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </Slider>
      </section>
      <div className="h-1 bg-orange-500"></div>
    </div>
  );
}
