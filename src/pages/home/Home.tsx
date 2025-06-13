import React from "react";
import HeroSection from "../../components/Home/HeroSection";
import LatestNews from "../../components/Home/LatestNews";
import Objective from "../../components/Home/Welcome";
import CmMessage from "../../components/Home/CmMessage";
import Advertise from "../../components/Home/Advertise";
import Testimonial from "../../components/Home/Testimonial";
import Gallery from "../../components/Home/Gallery";
const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <LatestNews />
      <Objective />
      <CmMessage />
      <Advertise />
      <Gallery />
      <Testimonial />
    </>
  );
};

export default Home;
