import React from "react";
import fishery1 from "../../assets/gallery/fishery/fishery (1).jpg";
import fishery2 from "../../assets/gallery/fishery/fishery (2).jpg";
import fishery3 from "../../assets/gallery/fishery/fishery (3).jpg";
import fishery4 from "../../assets/gallery/fishery/fishery (4).jpg";
import fishery5 from "../../assets/gallery/fishery/fishery (5).jpg";
import fishery6 from "../../assets/gallery/fishery/fishery (6).jpg";
import fishery7 from "../../assets/gallery/fishery/fishery (7).jpg";
import fishery8 from "../../assets/gallery/fishery/fishery (8).jpg";
import fishery9 from "../../assets/gallery/fishery/fishery (9).jpg";
import fishery10 from "../../assets/gallery/fishery/fishery (10).jpg";
import fishery11 from "../../assets/gallery/fishery/fishery (11).jpg";
import fishery12 from "../../assets/gallery/fishery/fishery (12).jpg";
import fishery13 from "../../assets/gallery/fishery/fishery (13).jpg";
import fishery14 from "../../assets/gallery/fishery/fishery (14).jpg";
import fishery15 from "../../assets/gallery/fishery/fishery (15).jpg";
import fishery16 from "../../assets/gallery/fishery/fishery (16).jpg";
import fishery17 from "../../assets/gallery/fishery/fishery (17).jpg";
import fishery18 from "../../assets/gallery/fishery/fishery (18).jpg";
import fishery19 from "../../assets/gallery/fishery/fishery (19).jpg";
import CardComp from "./CardComp";

const Fishery: React.FC = () => {
  const images = [
    fishery1, fishery2, fishery3, fishery4, fishery5, fishery6,
  fishery7, fishery8, fishery9, fishery10, fishery11, fishery12,
  fishery13, fishery14, fishery15, fishery16, fishery17, fishery18,
  fishery19,
  ];

  return     <CardComp images={images} />
;
};

export default Fishery;
