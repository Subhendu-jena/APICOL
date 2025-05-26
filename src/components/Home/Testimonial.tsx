import React from "react";
import Slider from "react-slick";
import TestimonialCard from "../testimonialCard/TestimonialCard";


const testimonials = [
  {
    heading: "Amazing Experience!",
    description:
      "The platform helped us improve our workflow drastically. Highly recommended!",
    name: "John Doe",
    designation: "@johnny_dev",
    image: "https://i.pravatar.cc/301",
  },
  {
    heading: "Great Support Team",
    description:
      "They were quick to respond and very helpful throughout. Loved it!",
    name: "Jane Smith",
    designation: "@janesmith",
    image: "https://i.pravatar.cc/302",
  },
  {
    heading: "Easy to Use",
    description:
      "I was able to set up everything within minutes. It's so intuitive!",
    name: "Robert King",
    designation: "@robertking",
    image: "https://i.pravatar.cc/303",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
};

const Testimonial: React.FC = () => {
  return (
    <div className="py-10 bg-black text-white text-center">
      <h2 className="text-sm uppercase tracking-widest text-gray-400">Testimonial</h2>
      <h1 className="text-3xl font-bold mb-8">What They Say About Us</h1>
      <Slider {...settings} className="max-w-4xl mx-auto ">
        {testimonials.map((item, index) => (
          <div key={index}>
            <TestimonialCard cardata={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
