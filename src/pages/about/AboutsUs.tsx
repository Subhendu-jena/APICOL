import {
  Award,
  Building2,
  DogIcon,
  Eye,
  FishIcon,
  Target,
  TreeDeciduousIcon,
  TreePalmIcon,
  Users,
  WarehouseIcon,
} from "lucide-react";
import React from "react";
import agri from "../../assets/images/aboutUs/agri.png";
import agriculture from "../../assets/images/aboutUs/agriculture1.avif";
import horticulture from "../../assets/images/aboutUs/Horticulture1.avif";
import fishery from "../../assets/images/aboutUs/fishery1.avif";
import interDepartmental from "../../assets/images/aboutUs/InterDepartmental1.avif";
import ahandvs from "../../assets/images/aboutUs/AHandVS.avif";
import SlideInFromTop from "../../components/animation/SlideInFromTop";
import SlideInFromLeft from "../../components/animation/SlideInFromLeft";
import SlideInFromRight from "../../components/animation/SlideInFromRight";
const AboutsUs: React.FC = () => {
  const data = [
    {
      dept: "Agriculture",
      imageUrl: agriculture,
      icon: <TreePalmIcon className="w-10 h-10" />,
      sectors: "28",
    },
    {
      dept: "Horticulture",
      imageUrl: horticulture,
      icon: <TreeDeciduousIcon className="w-10 h-10" />,
      sectors: "34",
    },
    {
      dept: "AH&VS",
      imageUrl: ahandvs,
      icon: <DogIcon className="w-10 h-10" />,
      sectors: "17",
    },
    {
      dept: "Fishery",
      imageUrl: fishery,
      icon: <FishIcon className="w-10 h-10" />,
      sectors: "16",
    },
    {
      dept: "Inter Departmental",
      imageUrl: interDepartmental,
      icon: <WarehouseIcon className="w-10 h-10" />,
      sectors: "22",
    },
  ];
  return (
    <>
      <div className="space-y-8">
        <div>
          <SlideInFromTop>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About APICOL
            </h2>
          </SlideInFromTop>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              The Agricultural Promotion & Investment Corporation of Odisha
              Limited (APICOL), a wholly owned corporation of Govt. of Odisha.
              Incorporated on 01.03.1996 (CIN: U01409OR1996SGC004357), it
              started functioning since 01 June 1996 under the Department of
              Agriculture and Farmers’ Empowerment. The primary objective of the
              corporation is to promote Commercial Agri Enterprises in the state
              in the Agriculture, Horticulture, Animal Resources Development,
              Agri Exports, Food Processing and Fisheries sectors.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="col-span-3">
            <SlideInFromLeft>
              {" "}
              <img src={agri} alt="" className=" w-full" />
            </SlideInFromLeft>
          </div>

          <div className="space-y-8 col-span-2 space-x-2">
            {" "}
            <SlideInFromRight className="w-full overflow-hidden">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 ">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Eye className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Our Vision
                  </h3>
                </div>
                <p className="text-gray-700">
                  Bringing in a shift from subsistence to commercial
                  Agriculture.Providing an integration among technology, economy
                  and society for a faster development of broad based
                  agriculture.Building up a robust base for enhanced production,
                  value addition and market linkage.
                </p>
              </div>
            </SlideInFromRight>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-700">
                To fulfill the VISION and contribute to all round economic and
                social development of the State of Odisha with a motto of
                promise to help and help to promise.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {" "}
          <div className="bg-gradient-to-br from-red-50 to-red-50 rounded-2xl p-8 ">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-100 rounded-lg">
                <Eye className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Our Activities
              </h3>
            </div>
            <p className="text-gray-700">
              The corporation is implementing the Mukhyamantri Krushi Udyoga
              Yojana (MKUY) and Agriculture Entrepreneurship Promotion Scheme
              (AEPS) of Govt. of Odisha. Besides, it is acting as the State
              Nodal Agency for Prime Minister Formalization of Micro Food
              Processing Enterprises (PMFME) and Agriculture Export Policy
              (AEP).
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Our Deliveries
              </h3>
            </div>
            <p className="text-gray-700">
              So far, the corporation has supported 1,972 Commercial Agri
              Enterprises (CAEs) and 4,587 Agro Service Centres (ASCs) in the
              state with disbursement of subsidies aggregating to around Rs.308
              crore. Further, Under Jalanidhi scheme, disbursed subsidies
              amounting to Rs.650.30 crore for 2,28,982 nos. of shallow tube
              well/ dug well/ bore well/ lift irrigation projects irrigating
              5.725 lakh hectares of agricultural land.
            </p>
          </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden shadow-md h-80 cursor-pointer bg-black"
            >
              {/* Image */}
              <img
                src={item.imageUrl}
                alt={item.dept}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />

              {/* Overlay with fade effect */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500 flex flex-col items-center justify-center text-white">
                {/* Icon */}
                <div className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>

                {/* Department Name */}
                <div className="font-semibold hidden group-hover:block z-30">

                <h3 className="text-lg ">
                  {item.dept}
                </h3>
                <h3 className="text-md text-center">
                  {item.sectors}
                </h3>
                </div>

              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Key Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">50+ Years</h4>
              <p className="text-gray-600">
                of Excellence in Petrochemical Industry
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Multiple Projects
              </h4>
              <p className="text-gray-600">
                Successfully implemented across Northeast India
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Community Impact
              </h4>
              <p className="text-gray-600">
                Empowering local communities and economy
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutsUs;
