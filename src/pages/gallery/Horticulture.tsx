import React from "react";
import horti1 from "../../assets/gallery/horticulture/horticulture (1).jpeg";
import horti2 from "../../assets/gallery/horticulture/horticulture (2).jpeg";
import horti3 from "../../assets/gallery/horticulture/horticulture (3).jpeg";
import horti4 from "../../assets/gallery/horticulture/horticulture (4).jpeg";
import horti5 from "../../assets/gallery/horticulture/horticulture (5).jpeg";
import horti6 from "../../assets/gallery/horticulture/horticulture (6).jpeg";
import horti7 from "../../assets/gallery/horticulture/horticulture (7).jpeg";
import horti8 from "../../assets/gallery/horticulture/horticulture (8).jpeg";
import horti9 from "../../assets/gallery/horticulture/horticulture (9).jpeg";
import horti10 from "../../assets/gallery/horticulture/horticulture (10).jpeg";
import horti11 from "../../assets/gallery/horticulture/horticulture (11).jpeg";
import CardComp from "./CardComp";

const Horticulture: React.FC = () => {
  const images = [
    horti1,
    horti2,
    horti3,
    horti4,
    horti5,
    horti6,
    horti7,
    horti8,
    horti9,
    horti10,
    horti11,
  ];

  return     <CardComp images={images} />
;
};

export default Horticulture;
