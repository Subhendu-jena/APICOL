import React from "react";
import CardComp from "./CardComp";
import agri1 from "../../assets/gallery/agriculture/DSC_7482.jpg";
import agri2 from "../../assets/gallery/agriculture/DSC_9026.jpeg";
import agri3 from "../../assets/gallery/agriculture/DSC_9066.jpeg";
import agri4 from "../../assets/gallery/agriculture/agriculture (1).jpeg";
import agri5 from "../../assets/gallery/agriculture/agriculture (2).jpeg";
import agri6 from "../../assets/gallery/agriculture/agriculture (3).jpeg";
import agri7 from "../../assets/gallery/agriculture/agriculture (4).jpeg";
import agri8 from "../../assets/gallery/agriculture/agriculture (5).jpeg";
import agri9 from "../../assets/gallery/agriculture/agriculture (6).jpeg";
import agri10 from "../../assets/gallery/agriculture/agriculture (7).jpeg";
import agri11 from "../../assets/gallery/agriculture/agriculture (8).jpeg";

const Agriculture: React.FC = () => {
  const imagess = [
    agri1,
    agri2,
    agri3,
    agri4,
    agri5,
    agri6,
    agri7,
    agri8,
    agri9,
    agri10,
    agri11,
    agri1,
    agri2,
    agri3,
    agri4,
    agri5,
    agri6,
    agri7,
    agri8,
    agri9,
    agri10,
    agri11,
    agri1,
    agri2,
    agri3,
    agri4,
    agri5,
    agri6,
    agri7,
    agri8,
    agri9,
    agri10,
    agri11,
    agri1,
    agri2,
    agri3,
    agri4,
    agri5,
    agri6,
    agri7,
    agri8,
    agri9,
    agri10,
    agri11,
  ];

  return <CardComp images={imagess}  />;
};

export default Agriculture;
