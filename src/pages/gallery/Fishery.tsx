import React from "react";
import fishery1 from "../../assets/gallery/fishery/fishery (1).jpeg";
import fishery2 from "../../assets/gallery/fishery/fishery (2).jpeg";
import fishery3 from "../../assets/gallery/fishery/fishery (3).jpeg";
import fishery4 from "../../assets/gallery/fishery/fishery (4).jpeg";
import fishery5 from "../../assets/gallery/fishery/fishery (5).jpeg";
import fishery6 from "../../assets/gallery/fishery/fishery (6).jpeg";
import fishery7 from "../../assets/gallery/fishery/fishery (7).jpeg";
import fishery8 from "../../assets/gallery/fishery/fishery (8).jpeg";
import fishery9 from "../../assets/gallery/fishery/fishery (9).jpeg";
import CardComp from "./CardComp";

const Fishery: React.FC = () => {
  const images = [
   fishery1,fishery2,fishery3,fishery4,fishery5,fishery6,fishery7,fishery8,fishery9
  ];

  return     <CardComp images={images} />
;
};

export default Fishery;
