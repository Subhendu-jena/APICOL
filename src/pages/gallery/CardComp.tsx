// import React, { useState, useEffect, useRef } from "react";
// import Slider from "react-slick";

// type GalleryCardProps = {
//   images: string[];
//   heading: string;
// };

// const GalleryCard: React.FC<GalleryCardProps> = ({ images, heading }) => {
//   const [preview, setPreview] = useState(false);
//   const [startIndex, setStartIndex] = useState(0);
//   const modalRef = useRef(null);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 800,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     fade: true,
//     arrows: true,
//     initialSlide: startIndex,
//   };

//   // Escape key to close
//   useEffect(() => {
//     const handleEsc = (e: KeyboardEvent) => {
//       if (e.key === "Escape") setPreview(false);
//     };
//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, []);

//   const handleOutsideClick = (e: any) => {
//     if (e.target === e.currentTarget) {
//       setPreview(false);
//     }
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">{heading}</h2>
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {images.map((img, idx) => (
//           <div
//             key={idx}
//             className="relative cursor-pointer"
//             onClick={() => {
//               setStartIndex(idx);
//               setPreview(true);
//             }}
//           >
//             <img
//               src={img}
//               alt={`Thumbnail ${idx}`}
//               className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
//             />
//           </div>
//         ))}
//       </div>

//       {preview && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
//           onClick={handleOutsideClick}
//         >
//           <div
//             ref={modalRef}
//             className="relative w-full max-w-5xl"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               onClick={() => setPreview(false)}
//               className="absolute top-2 right-2 text-white bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-700 z-50"
//             >
//               ✕
//             </button>

//             <Slider {...settings}>
//               {images.map((image, index) => (
//                 <div key={index}>
//                   <img
//                     src={image}
//                     alt={`Slide ${index}`}
//                     className="w-full h-[80vh] object-contain rounded-lg"
//                   />
//                 </div>
//               ))}
//             </Slider>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GalleryCard;


import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';

interface CardCompProps {
  images: string[];
}

const CardComp: React.FC<CardCompProps> = ({ images }) => {
  const [preview, setPreview] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const sliderRef = useRef<Slider>(null);
  const modalRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    fade: true,
    arrows: true,
    initialSlide: currentIndex,
    beforeChange: (_: number, next: number) => setCurrentIndex(next),
  };

  useEffect(() => {
    if (!preview) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        sliderRef.current?.slickNext();
      } else if (e.key === 'ArrowLeft') {
        sliderRef.current?.slickPrev();
      } else if (e.key === 'Escape') {
        setPreview(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [preview]);

  const rows = Math.ceil(images.length / 4);
  const rowsToRender = showAll ? rows : Math.min(2, rows);

  return (
    <div className="">
      {Array.from({ length: rowsToRender }, (_, rowIndex) => (
        <div key={rowIndex} className="flex group h-60">
          {images.slice(rowIndex * 4, rowIndex * 4 + 4).map((img, idx) => {
            const absoluteIndex = rowIndex * 4 + idx;
            return (
              <div
                key={absoluteIndex}
                className="flex-1 group-hover:flex-[0.5] hover:flex-[2] transition-all duration-1200 overflow-hidden cursor-pointer"
                onClick={() => {
                  setCurrentIndex(absoluteIndex);
                  setPreview(true);
                }}
              >
                <img
                  src={img}
                  alt={`gallery-${absoluteIndex}`}
                  className="w-full h-full object-cover p-[1px]"
                />
              </div>
            );
          })}
        </div>
      ))}

      {!showAll && rows > 2 && (
        <div className="text-center">
          <button
            onClick={() => setShowAll(true)}
            className="mt-4 px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
          >
            View More
          </button>
        </div>
      )}

      {preview && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center"
          onClick={() => setPreview(false)}
        >
          <div
            ref={modalRef}
            className="relative w-full max-w-4xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreview(false)}
              className="absolute top-4 right-4 text-white bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-700 z-[110]"
            >
              ✕
            </button>

            <Slider {...settings} ref={sliderRef}>
              {images.map((image, index) => (
                <div key={index} className="w-full">
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-[80vh] object-contain rounded-lg"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardComp;
