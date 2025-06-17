import React, { useState } from "react";
import Tender from "../Tender/Tender";
import Events from "../events/Events";
import Recruitment from "../recruitment/Recruitment";
import Notification from "../notification/Notification";
import SlideInFromBottom from "../animation/SlideInFromBottom";

const Advertise: React.FC = () => {
  const [activeTab, setActiveTab] = useState("tenders");

  const gradientBackground = "bg-gradient-to-r from-[#000000] to-[#F47216]";
  const gradientBackgroundHover = "bg-gradient-to-r from-[#000000] to-[#00A650]";

  
  const tabClasses = (tab: string) =>
    `w-full py-4 px-24 font-medium rounded-4xl transition-all duration-300 ${
      activeTab === tab
        ? `${gradientBackgroundHover} text-white shadow-lg transform scale-105`
        : `${gradientBackground}  text-white shadow-lg transform scale-105 `
    }`;
  const tabs = [
    { key: "tenders", label: "Tenders" },
    { key: "events", label: "Events" },
    { key: "recruitment", label: "Recruitment" },
    { key: "notification", label: "Notification" },
  ];

  return (
    <div className="py-5  bg-white hidden md:block">
      
      <div className="max-w-7xl mx-auto ">
        {/* Tabs */}
        <div className="flex flex-wrap justify-between px-auto">
          {tabs.map(({ key, label }) => (
            <SlideInFromBottom>
              <div className="justify-center">
                <button
                  key={key}
                  className={tabClasses(key)}
                  onClick={() => setActiveTab(key)}
                >
                  {label}
                </button>
                {activeTab === key && (
                  <div className="">
                    <div className={`w-0 h-0  border-l-20 border-r-20 border-t-20 border-l-transparent border-r-transparent ${gradientBackground} mx-auto`}></div>
                  </div>
                )}
              </div>
            </SlideInFromBottom>
          ))}
        </div>
        {/* Tab Content */}
        <div className="w-full">
          {activeTab === "tenders" && <Tender />}
          {activeTab === "events" && <Events />}
          {activeTab === "recruitment" && <Recruitment />}
          {activeTab === "notification" && <Notification />}
        </div>
      </div>
    </div>
  );
};

export default Advertise;
