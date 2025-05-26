import React from "react";
import bg from "../../assets/images/DeWatermark.ai_1748116843482 (1) (1).svg";
import welcomeImg from "../../assets/images/welcome-apicol-819x1024.png";

const Welcome: React.FC = () => {
  return (
    <div
      className="bg-cover bg-center relative bg-black bg-opacity-50 text-white h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-transparent ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10 h-full items-center max-w-7xl mx-auto">
          <div>
            <h1 className="text-2xl font-bold mb-2">Welcome to</h1>
            <h2 className="text-3xl font-bold text-orange-500 mb-4">
              The Agricultural Promotion and Investment Corporation of Odisha
              Limited (APICOL)
            </h2>
            <p className="text-sm text-white text-justify font-bold leading-relaxed">
             It was established on 01-03-1996 as envisaged in State Agriculture Policy 1996. It started functioning since 01-06-1996 with the sole objective of promoting agro-based industries/food processing industries including commercial agriculture/horticulture/animal husbandry/fisheries, in broad terms to promote investment in Agriculture and allied sectors. The Agricultural Promotion and Investment Corporation of Odisha Limited(APICOL), a Government of Odisha undertaking, coming up as a promotional organisation for providing assistance to agricultural enterprises in the state of Odisha. Apicol would promote enterprises in agriculture within the state with suitable guidance for project formulation, counseling, enterprise development and assistance in project implementation. The Agricultural Promotion & Investment Corporation of Odisha Limited (APICOL), a wholly owned corporation of Govt. of Odisha. Incorporated on 01.03.1996 (CIN: U01409OR1996SGC004357), it started functioning since 01 June 1996 under the Department of Agriculture and Farmers’ Empowerment. The primary objective of the corporation is to promote Commercial Agri Enterprises in the state in the following sectors:
            </p>
          </div>
          <div className="flex justify-center ">
            <img
              src={welcomeImg}
              alt="Welcome"
              className="w-full max-w-lg object-contain shadow-lg rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
