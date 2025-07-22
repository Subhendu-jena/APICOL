import React from 'react'
import ahAndVs1 from "../../assets/gallery/ahANDvs/DSC_3787.jpg";
import ahAndVs2 from "../../assets/gallery/ahANDvs/DSC_4349.jpg";
import ahAndVs3 from "../../assets/gallery/ahANDvs/DSC_5510.jpg";
import ahAndVs4 from "../../assets/gallery/ahANDvs/DSC_6120.jpg";
import ahAndVs5 from "../../assets/gallery/ahANDvs/ahAndVS (1).jpeg";
import ahAndVs6 from "../../assets/gallery/ahANDvs/ahAndVS (2).jpeg";
import ahAndVs7 from "../../assets/gallery/ahANDvs/ahAndVS (3).jpeg";
import ahAndVs8 from "../../assets/gallery/ahANDvs/ahAndVS (4).jpeg";
import ahAndVs9 from "../../assets/gallery/ahANDvs/ahAndVS (5).jpeg";
import ahAndVs10 from "../../assets/gallery/ahANDvs/ahAndVS (6).jpeg";
import ahAndVs11 from "../../assets/gallery/ahANDvs/ahAndVS (7).jpeg";
import ahAndVs12 from "../../assets/gallery/ahANDvs/ahAndVS (8).jpeg";
import CardComp from './CardComp';
const AhANDVs : React.FC = () => {

    const images = [ahAndVs1, ahAndVs2, ahAndVs3, ahAndVs4, ahAndVs5, ahAndVs6, ahAndVs7, ahAndVs8, ahAndVs9, ahAndVs10, ahAndVs11, ahAndVs12]
  return (
    <CardComp images={images} />
  )
}

export default AhANDVs
