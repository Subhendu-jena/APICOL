import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
// agriculture
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
// ah and vs
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
// fishery
import fishery1 from "../../assets/gallery/fishery/fishery (1).jpeg";
import fishery2 from "../../assets/gallery/fishery/fishery (2).jpeg";
import fishery3 from "../../assets/gallery/fishery/fishery (3).jpeg";
import fishery4 from "../../assets/gallery/fishery/fishery (4).jpeg";
import fishery5 from "../../assets/gallery/fishery/fishery (5).jpeg";
import fishery6 from "../../assets/gallery/fishery/fishery (6).jpeg";
import fishery7 from "../../assets/gallery/fishery/fishery (7).jpeg";
import fishery8 from "../../assets/gallery/fishery/fishery (8).jpeg";
import fishery9 from "../../assets/gallery/fishery/fishery (9).jpeg";

// horticulture
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

// inter departmental
import inter1 from "../../assets/gallery/interDepartrmental/interDepartmental (1).jpeg";
import inter2 from "../../assets/gallery/interDepartrmental/interDepartmental (2).jpeg";
import inter3 from "../../assets/gallery/interDepartrmental/interDepartmental (3).jpeg";
import inter4 from "../../assets/gallery/interDepartrmental/interDepartmental (4).jpeg";
import inter5 from "../../assets/gallery/interDepartrmental/interDepartmental (5).jpeg";
import inter6 from "../../assets/gallery/interDepartrmental/interDepartmental (6).jpeg";
import inter7 from "../../assets/gallery/interDepartrmental/interDepartmental (7).jpeg";
import inter8 from "../../assets/gallery/interDepartrmental/interDepartmental (8).jpeg";

import noImage from "../../assets/27002.jpg";
type GalleryItem = {
  posterImage: any;
  heading: string;
  description: string;
  images: any[];
};
const GalleryCard: React.FC<GalleryItem> = ({
  posterImage,
  heading,
  //   description,
  images,
}) => {
  const [preview, setPreview] = useState(false);
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: true,
  };
  const modalRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPreview(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Close on outside click
  const handleOutsideClick = (e: any) => {
    if (e.target === e.currentTarget) {
      setPreview(false);
    }
  };
  return (
    <>
      <div
        className="relative  max-w-98   bg-white rounded-tl-[2rem] rounded-br-[2rem] shadow-lg   border border-red-200"
        onClick={handleOutsideClick}
      >
        {/* Green shadow corner effect */}
        <div className="absolute bottom-0 right-0 w-full h-full rounded-tl-[9rem] rounded-br-[2rem] bg-red-300 -z-10 translate-x-2 translate-y-2"></div>
        <div onClick={() => setPreview(true)}>
          <img
            src={posterImage ?? noImage}
            alt="Gallery"
            className="w-full h-60 object-cover rounded-tl-[2rem]"
          />
        </div>
        {/* Main content */}

        <div className="p-4 text-center">
          <h2 className="text-[16px] font-semibold"> {heading} </h2>
          {/* <p className="text-gray-600 text-[12px] line-clamp-3 text-justify">
            {" "}
            {description}{" "}
          </p> */}
        </div>
      </div>
      {preview && (
        <div
          className="fixed inset-0 z-100  bg-black/75 bg-opacity-80 flex items-center justify-center"
          onClick={() => event?.preventDefault() || setPreview(false)}
        >
          <div
            ref={modalRef}
            className="relative w-full max-w-4xl mx-auto "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setPreview(false)}
              className="absolute top-20 right-4    text-white bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-700 z-100"
            >
              ✕
            </button>

            {/* Image Slider */}
            <Slider {...settings}>
              {images && images.length > 0 ? (
                images.map((image, index) => (
                  <div key={index} className="w-full">
                    <img
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-[80vh] object-contain rounded-lg"
                    />
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-500 py-8">
                  No images available to show.
                </div>
              )}
            </Slider>
          </div>
        </div>
      )}
    </>
  );
};
const ArchivalGallery: React.FC = () => {
  const data = [
    {
      heading: "Agriculture",
      description: "Agriculture",
      posterImage: agri1,
      images: [agri1, agri2, agri3, agri4, agri5, agri6, agri7, agri8, agri9, agri10, agri11],
    },
    {
      heading: "Horticulture",
      posterImage: horti1,
      description: "Horticulture",
      images: [horti1, horti2, horti3, horti4,horti4,horti5,horti6,horti7,horti8,horti9,horti10,horti11],
    },
    {
      heading: "AH&VS",
      description: "AH&VS",
      posterImage: ahAndVs1,
      images: [ahAndVs1, ahAndVs2, ahAndVs3, ahAndVs4, ahAndVs5, ahAndVs6, ahAndVs7, ahAndVs8, ahAndVs9, ahAndVs10, ahAndVs11,ahAndVs12],
    },
    {
      heading: "Fishery",
      description: "Fishery",
      posterImage: fishery1,
      images: [fishery1,fishery2,fishery3,fishery4,fishery5,fishery6,fishery7,fishery8,fishery9],
    },
    {
      heading: "Inter Departmental",
      description: "Inter Departmental",
      posterImage: inter1,
      images: [inter1,inter2,inter3,inter4,inter5,inter6,inter7,inter8],
    },
  ];
  return (
    <>
      {/* <ComingSoon/> */}

      <div className=" bg-white ">
        <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  ">
          {data.map((item, idx) => (
            <GalleryCard
              key={idx}
              posterImage={item.posterImage}
              heading={item.heading}
              description={item.description}
              images={item.images}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ArchivalGallery;
