import React from "react";
import inter1 from "../../assets/gallery/interDepartrmental/interSector (1).jpg";
import inter2 from "../../assets/gallery/interDepartrmental/interSector (2).jpg";
import inter3 from "../../assets/gallery/interDepartrmental/interSector (3).jpg";
import inter4 from "../../assets/gallery/interDepartrmental/interSector (4).jpg";
import inter5 from "../../assets/gallery/interDepartrmental/interSector (5).jpg";
import inter6 from "../../assets/gallery/interDepartrmental/interSector (6).jpg";
import inter7 from "../../assets/gallery/interDepartrmental/interSector (7).jpg";
import inter8 from "../../assets/gallery/interDepartrmental/interSector (8).jpg";
import CardComp from "./CardComp";

const InterDepartmental: React.FC = () => {
  const images = [
    inter1,
    inter2,
    inter3,
    inter4,
    inter5,
    inter6,
    inter7,
    inter8,
  ];

  return <CardComp images={images} />;
};

export default InterDepartmental;
