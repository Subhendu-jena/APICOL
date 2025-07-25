import React, { useState } from "react";
import SlideInFromBottom from "../animation/SlideInFromBottom";
import SlideInFromLeft from "../animation/SlideInFromLeft";
import ImageGallery from "./ImageGallery";
import VideoGallery from "./VideoGallery";
import SocialMedia from "./SocialMedia";
import { paths } from "../../route/path";
import { useNavigate } from "react-router-dom";

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState("photo");
const navigate = useNavigate();
  // const gradientBackground = "bg-gradient-to-r from-[#000000] to-[#F47216]";
  // const gradientBackgroundHover =
  //   "bg-gradient-to-r from-[#000000] to-[#00A650]";

  const tabClasses = (tab: string) =>
    `w-full py-4 px-15 font-medium rounded-2xl transition-all duration-300 ${
      activeTab === tab
        ? `bg-gradient-to-r from-[#000000] to-[#00A650] text-white shadow-lg transform scale-105`
        : `bg-emerald-700  text-white shadow-lg transform scale-105 `
    }`;
  const tabs = [
    { key: "photo", label: "Photo Gallery" },
    { key: "video", label: "Video Gallery" },
    { key: "social", label: "Social Media" },
  ];

  return (
    <div className="py-5  bg-white">
      <div className="max-w-7xl mx-auto ">
        {/* Tabs */}
        <div className="flex">
          {tabs.map(({ key, label }) => (
            <SlideInFromBottom key={key}>
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
          {activeTab === "photo" && (
            <>
              <SlideInFromLeft>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <SlideInFromBottom>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl font-bold text-gray-800">
                        Photo Gallery
                      </h2>
                      <button className="text-sm font-medium text-orange-600 hover:underline" onClick={() => navigate(paths.galleryPhotos)}>
                        View All
                      </button>
                    </div>
                  </SlideInFromBottom>
                  <ImageGallery />
                </div>
              </SlideInFromLeft>
            </>
          )}
          {activeTab === "video" && (
            <>
              {/* <SlideInFromLeft> */}
                {/* Video Gallery Section */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <SlideInFromBottom>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl font-bold text-gray-800">
                        Video Gallery
                      </h2>
                      <button className="text-sm font-medium text-orange-600 hover:underline">
                        View All
                      </button>
                    </div>
                  </SlideInFromBottom>
                  <VideoGallery />
                </div>
              {/* </SlideInFromLeft> */}
            </>
          )}
          {activeTab === "social" && (<><SocialMedia/>
          </>)}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
