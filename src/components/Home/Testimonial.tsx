import React from "react";
import Slider from "react-slick";
import TestimonialCard from "../testimonialCard/TestimonialCard";
import bgCM from "../../assets/images/bg-testi.jpg";

const testimonials = [
  {
    heading: "Amazing Experience!",
    description:
      "The platform helped us improve our workflow drastically. Highly recommended!",
    name: "Neha Pattanik",
    designation: "@johnny_dev",
    image: "https://i.pravatar.cc/301",
  },
  {
    heading: "Great Support Team",
    description:
      "They were quick to respond and very helpful throughout. Loved it!",
    name: "Siddhartha Hati",
    designation: "@janesmith",
    image: "https://i.pravatar.cc/302",
  },
  {
    heading: "Easy to Use",
    description:
      "I was able to set up everything within minutes. It's so intuitive!",
    name: "Spandan Satapathy",
    designation: "@robertking",
    image: "https://i.pravatar.cc/303",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
};

const Testimonial: React.FC = () => {
  return (
    <div className="py-10  gap-3 bg-white text-white text-center  bg-cover bg-center"
        style={{ backgroundImage: `url(${bgCM})` }}>
          <div className="max-w-7xl mx-auto">

      <h2 className="text-sm uppercase tracking-widest text-gray-400">
        Testimonial
      </h2>
      <h1 className="text-3xl font-bold mb-4 text-black">
        What They Say About Us
      </h1>
      <Slider {...settings} className="h-[300px]  mb-20">
        {testimonials.map((item, index) => (
          <div key={index} className=" mt-20 p-2">
            <TestimonialCard
              image={item.image}
              name={item.name}
              title={item.designation}
              quote={item.description}
            />
          </div>
        ))}
      </Slider>
        </div>
    </div>
  );
};

export default Testimonial;
