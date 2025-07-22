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
