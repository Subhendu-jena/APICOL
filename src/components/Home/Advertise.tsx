import React, { useState } from "react";
import Tender from "../Tender/Tender";
import Events from "../events/Events";
import Recruitment from "../recruitment/Recruitment";
import Notification from "../notification/Notification";
import SlideInFromBottom from "../animation/SlideInFromBottom";

const Advertise: React.FC = () => {
  const [activeTab, setActiveTab] = useState("");

  // const gradientBackground = "bg-gradient-to-r from-orange-600 to-yellow-400";
  // const gradientBackgroundHover = "hover:from-orange-500 hover:to-yellow-300";

  const tabClasses = (tab: string) =>
    `w-full py-4 px-24 font-medium rounded-4xl transition-all duration-300 ${
      activeTab === tab
        ? `bg-myRed  text-white shadow-lg transform scale-105`
        : `bg-custom hover:bg-gradient-to-r from-[#004aad] to-[#ffb347] bg-transparent`
    }`;

  // className={`w-full py-4 px-4 font-medium rounded-xl transition-all duration-300 ${
  //                 activeTab === tab.key ? "bg-orange-800 text-white shadow-lg transform scale-105" : "bg-orange-600 text-white hover:bg-orange-700"
  //               }`}

  const tabs = [
    { key: "tenders", label: "Tenders" },
    { key: "events", label: "Events" },
    { key: "recruitment", label: "Recruitment" },
    { key: "notification", label: "Notification" },
  ];

  return (
    <div className="py-10  bg-white">
      
      <div className="h-16 w-full bg-myRed">Test Gradient</div>
      <div className="max-w-7xl mx-auto space-y-8">
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
                    <div className="w-0 h-0  border-l-20 border-r-20 border-t-20 border-l-transparent border-r-transparent border-t-orange-800 mx-auto"></div>
                  </div>
                )}
              </div>
            </SlideInFromBottom>
          ))}
        </div>
        {/* Tab Content */}
        <div className="w-full mt-8">
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
