import React, { useEffect, useState } from "react";
import SlideInFromBottom from "../../components/animation/SlideInFromBottom";
import SlideInFromLeft from "../../components/animation/SlideInFromLeft";
import ArchivalGallery from "../../components/galleryCard/GalleryCard";
import ComingSoon from "../../components/comingSoon/ComingSoon";
import { useSearchParams } from "react-router-dom";

const PhotosGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState("photo");
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get("tab");
console.log(tabParam,'tabParam')
  useEffect(() => {
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);
  const gradientBackground = "bg-gradient-to-r from-[#000000] to-[#F47216]";
  const gradientBackgroundHover =
    "bg-gradient-to-r from-[#000000] to-[#00A650]";
  const tabClasses = (tab: string) =>
    `w-full py-4 px-15 font-medium rounded-2xl transition-all duration-300 ${
      activeTab === tab
        ? `${gradientBackgroundHover} text-white shadow-lg transform scale-105`
        : `${gradientBackground}  text-white shadow-lg transform scale-105 `
    }`;
  const tabs = [
    { key: "mkuy", label: "Mukhyamantri Krushi Udyog Yojana (MKUY)" },
    { key: "facs", label: "Financial Assistance to Cold Storages (FACS)" },
    { key: "aeps", label: "Agri entrepreneurship Promotion Scheme (AEPS)" },
  ];

  return (
    <div className="py-5  bg-white">
      <div className="max-w-7xl mx-auto ">
        {/* Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {tabs.map(({ key, label }) => (
            <SlideInFromBottom>
              <div className="justify-center mr-10">
                <button
                  key={key}
                  className={tabClasses(key)}
                  onClick={() => setActiveTab(key)}
                >
                  {label}
                </button>
                {activeTab === key && (
                  <div className="">
                    <div
                      className={`w-0 h-0  border-l-20 border-r-20 border-t-20 border-l-transparent border-r-transparent  mx-auto`}
                    ></div>
                  </div>
                )}
              </div>
            </SlideInFromBottom>
          ))}
        </div>
        {/* Tab Content */}
        <div className="w-full">
          {activeTab === "mkuy" && (
            <>
              <SlideInFromLeft>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <ArchivalGallery />
                </div>
              </SlideInFromLeft>
            </>
          )}
          {activeTab === "facs" && (
            <>
              {/* <SlideInFromLeft> */}
              {/* Video Gallery Section */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <ComingSoon />
              </div>
              {/* </SlideInFromLeft> */}
            </>
          )}
          {activeTab === "aeps" && (
            <>
              <ComingSoon />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotosGallery;








// import React, { useRef, useState } from 'react'
// import Slider from 'react-slick';
// interface CardCompProps {
//   images: string[];
// }

// const CardComp: React.FC<CardCompProps> = ({ images }) => {
//   const [preview, setPreview] = useState(false);
//     const settings = {
//       dots: false,
//       infinite: true,
//       speed: 800,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 5000,
//       fade: true,
//       arrows: true,
//     };
//     const modalRef = useRef(null);
//   return (
//     <div className=" ">
//       {Array.from({ length: Math.ceil(images.length / 4) }, (_, rowIndex) => (
//       <div key={rowIndex} className="flex group  h-60">
//         {images.slice(rowIndex * 4, rowIndex * 4 + 4).map((img:any, idx:number) => (
//           <div
//             key={idx}
//             className="flex-1 group-hover:flex-[0.5] hover:flex-[2] transition-all duration-1200 overflow-hidden"
//           onClick={() => setPreview(true)}
//           >
//             <img
//               src={img}
//               alt={`gallery-${idx}`}
//               className="w-full h-full object-cover p-[1px]"
//             />
//           </div>
//         ))}
//       </div>
//         ))}

//          {preview && (
//         <div
//           className="fixed inset-0 z-100  bg-black/75 bg-opacity-80 flex items-center justify-center"
//           onClick={() => event?.preventDefault() || setPreview(false)}
//         >
//           <div
//             ref={modalRef}
//             className="relative w-full max-w-4xl mx-auto "
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close Button */}
//             <button
//               onClick={() => setPreview(false)}
//               className="absolute top-20 right-4    text-white bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-700 z-100"
//             >
//               ✕
//             </button>

//             {/* Image Slider */}
//             <Slider {...settings}>
//               {images && images.length > 0 ? (
//                 images.map((image, index) => (
//                   <div key={index} className="w-full">
//                     <img
//                       src={image}
//                       alt={`Gallery image ${index + 1}`}
//                       className="w-full h-[80vh] object-contain rounded-lg"
//                     />
//                   </div>
//                 ))
//               ) : (
//                 <div className="text-center text-gray-500 py-8">
//                   No images available to show.
//                 </div>
//               )}
//             </Slider>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default CardComp
