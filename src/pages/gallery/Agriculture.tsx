import React from "react";
import CardComp from "./CardComp";

import agri1 from "../../assets/gallery/agriculture/agriculture (1).jpeg";
import agri2 from "../../assets/gallery/agriculture/agriculture (2).jpeg";
import agri3 from "../../assets/gallery/agriculture/agriculture (3).jpeg";
import agri4 from "../../assets/gallery/agriculture/agriculture (4).jpeg";
import agri5 from "../../assets/gallery/agriculture/agriculture (5).jpeg";
import agri6 from "../../assets/gallery/agriculture/agriculture (6).jpeg";
import agri7 from "../../assets/gallery/agriculture/agriculture (7).jpeg";
import agri8 from "../../assets/gallery/agriculture/agriculture (8).jpeg";
import agri9 from "../../assets/gallery/agriculture/agriculture (9).jpeg";
import agri10 from "../../assets/gallery/agriculture/agriculture (10).jpeg";
import agri11 from "../../assets/gallery/agriculture/agriculture (11).jpeg";
import agri12 from "../../assets/gallery/agriculture/agriculture (12).jpeg";
import agri13 from "../../assets/gallery/agriculture/agriculture (13).jpeg";
import agri14 from "../../assets/gallery/agriculture/agriculture (14).jpeg";
import agri15 from "../../assets/gallery/agriculture/agriculture (15).jpeg";
import agri16 from "../../assets/gallery/agriculture/agriculture (16).jpeg";
import agri17 from "../../assets/gallery/agriculture/agriculture (17).jpeg";
import agri18 from "../../assets/gallery/agriculture/agriculture (18).jpeg";
import agri19 from "../../assets/gallery/agriculture/agriculture (19).jpeg";
import agri20 from "../../assets/gallery/agriculture/agriculture (20).jpeg";
import agri21 from "../../assets/gallery/agriculture/agriculture (21).jpeg";
import agri22 from "../../assets/gallery/agriculture/agriculture (22).jpeg";

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
    agri12,
    agri13,
    agri14,
    agri15,
    agri16,
    agri17,
    agri18,
    agri19,
    agri20,
    agri21,
    agri22,
  ];

  return <CardComp images={imagess} />;
};

export default Agriculture;
