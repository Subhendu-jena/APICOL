import React, { useState } from "react";
import Tender from "../Tender/Tender";
import Events from "../events/Events";
import Recruitment from "../recruitment/Recruitment";
import Notification from "../notification/Notification";


const Advertise: React.FC = () => {
  const [activeTab, setActiveTab] = useState("tenders");

   const tabClasses = (tab: string) =>
    `px-10 py-4 rounded text-white font-semibold transition-all duration-200 ${
      activeTab === tab
        ? `shadow-md scale-120 ${gradientBackgroundHover} hover:scale-100`
        : "opacity-80 hover:opacity-100"
    }`;

  const gradientBackground =
    "bg-gradient-to-r from-orange-600 to-yellow-400";
    const gradientBackgroundHover =
    "hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-300";
const tabs = ["tenders", "events", "recruitment", "notification"];
  return (
    <div className="p-6 flex flex-col justify-center items-center">
      {/* Tabs */}
      <div className="flex space-x-10 mb-6 max-w-7xl">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`${tabClasses(tab)} ${gradientBackground}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
        {/* <button className={`${tabClasses("tenders")} ${gradientBackground}`}
          onClick={() => setActiveTab("tenders")}>
          Tenders
        </button>
        <button className={tabClasses("events")} onClick={() => setActiveTab("events")}>
          Events
        </button>
        <button className={tabClasses("recruitment")} onClick={() => setActiveTab("recruitment")}>
          Recruitment
        </button>
        <button className={tabClasses("notification")} onClick={() => setActiveTab("notification")}>
          Notification
        </button> */}
      </div>

      {/* Tab Content */}
      <div className="w-full max-w-7xl">
        {activeTab === "tenders" && <Tender />}
        {activeTab === "events" && <Events />}
        {activeTab === "recruitment" && <Recruitment />}
        {activeTab === "notification" && <Notification />}
      </div>
    </div>
  );
};

export default Advertise;
