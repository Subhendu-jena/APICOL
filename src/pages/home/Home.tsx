import React from "react";
import Navbar from "../../components/navbar/Navbar";
import HeroSection from "../../components/Home/HeroSection";
import LatestNews from "../../components/Home/LatestNews";
import Objective from "../../components/Home/Welcome";
import CmMessage from "../../components/Home/CmMessage";
import Advertise from "../../components/Home/Advertise";
import Testimonial from "../../components/Home/Testimonial";
import Footer from "../../components/footer/Footer";
import Gallery from "../../components/Home/Gallery";
const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LatestNews />
      <Objective />
      <CmMessage />
      <Advertise />
      <Gallery />
      <Testimonial />
      <Footer />
      {/* <Welcome/> */}
    </>
  );
};

export default Home;
