import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import agri1 from "../../assets/gallery/agriculture/DSC_7482.jpg";
import agri2 from "../../assets/gallery/agriculture/DSC_9026.jpeg";
import agri3 from "../../assets/gallery/agriculture/DSC_9066.jpeg";
import horti1 from "../../assets/gallery/ahANDvs/DSC_3787.jpg";
import horti2 from "../../assets/gallery/ahANDvs/DSC_4349.jpg";
import horti3 from "../../assets/gallery/ahANDvs/DSC_5510.jpg";
import horti4 from "../../assets/gallery/ahANDvs/DSC_6120.jpg";
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
      images: [agri1, agri2, agri3],
    },
    {
      heading: "Horticulture",
      description: "Horticulture",
      posterImage: horti1,
      images: [horti1, horti2, horti3, horti4],
    },
    {
      heading: "AH&VS",
      description: "AH&VS",
      posterImage: noImage,
      images: [],
    },
    {
      heading: "Fishery",
      description: "Fishery",
      posterImage: noImage,
      images: [],
    },
    {
      heading: "Inter Departmental",
      description: "Inter Departmental",
      posterImage: noImage,
      images: [],
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
