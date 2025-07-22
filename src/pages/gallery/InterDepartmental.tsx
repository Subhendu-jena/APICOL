import React from "react";
import inter1 from "../../assets/gallery/interDepartrmental/interDepartmental (1).jpeg";
import inter2 from "../../assets/gallery/interDepartrmental/interDepartmental (2).jpeg";
import inter3 from "../../assets/gallery/interDepartrmental/interDepartmental (3).jpeg";
import inter4 from "../../assets/gallery/interDepartrmental/interDepartmental (4).jpeg";
import inter5 from "../../assets/gallery/interDepartrmental/interDepartmental (5).jpeg";
import inter6 from "../../assets/gallery/interDepartrmental/interDepartmental (6).jpeg";
import inter7 from "../../assets/gallery/interDepartrmental/interDepartmental (7).jpeg";
import inter8 from "../../assets/gallery/interDepartrmental/interDepartmental (8).jpeg";
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
