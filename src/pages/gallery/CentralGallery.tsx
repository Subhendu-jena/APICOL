import React, {  useState } from "react";
import Agriculture from "./Agriculture";
import Horticulture from "./Horticulture";
import AhANDVs from "./AhANDVs";
import Fishery from "./Fishery";
import InterDepartmental from "./InterDepartmental";

const CentralGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState("agriculture");
  // const [searchParams] = useSearchParams();
  // const tabParam = searchParams.get("tab");
  // console.log(tabParam, "tabParam");
  // useEffect(() => {
  //   if (tabParam) {
  //     setActiveTab(tabParam);
  //   }
  // }, [tabParam]);
  const gradientBackground = "bg-gradient-to-r from-[#000000] to-[#F47216]";
  const gradientBackgroundHover =
    "bg-gradient-to-r from-[#000000] to-[#00A650]";
  const tabClasses = (tab: string) =>
    `w-full py-4 px-15 text-center flex items-center justify-center rounded-2xl transition-all duration-300 ${
      activeTab === tab
        ? `${gradientBackgroundHover} text-white shadow-lg transform scale-105`
        : `${gradientBackground}  text-white shadow-lg transform scale-105 `
    }`;
  const tabs = [
    { key: "agriculture", label: "Agriculture" },
    { key: "horticulture", label: "Horticulture" },
    { key: "ahvs", label: "AH & VS" },
    { key: "fishery", label: "Fishery" },
    { key: "inter", label: "Inter Sector" },
  ];

  return (
    <div className="">
      <div className="">
        {/* Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {tabs.map(({ key, label }) => (
              <div className="justify-center w-full mr-10">
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
          ))}
        </div>
        {/* Tab Content */}
        <div className="w-full">
          {activeTab === "agriculture" && (
            <>
              <Agriculture />
            </>
          )}
          {activeTab === "horticulture" && (
            <>
              <Horticulture />
            </>
          )}
          {activeTab === "ahvs" && (
            <>
              <AhANDVs />
            </>
          )}
          {activeTab === "fishery" && (
            <>
              <Fishery />
            </>
          )}
          {activeTab === "inter" && (
            <>
              <InterDepartmental />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CentralGallery;
