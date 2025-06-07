// import React from "react";
// import bg from "../../assets/images/DeWatermark.ai_1748116843482 (1) (1).svg";
// import welcomeImg from "../../assets/images/welcome-apicol-819x1024.png";

// const Welcome: React.FC = () => {
//   return (
//     <div
//       className="bg-cover bg-center relative bg-black bg-opacity-50 text-white h-screen flex items-center justify-center"
//       style={{ backgroundImage: `url(${bg})` }}
//     >
//       <div className="absolute inset-0 bg-transparent ">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10 h-full items-center max-w-7xl mx-auto">
//           <div>
//             <h1 className="text-2xl font-bold mb-2">Welcome to</h1>
//             <h2 className="text-3xl font-bold text-orange-500 mb-4">
//               The Agricultural Promotion and Investment Corporation of Odisha
//               Limited (APICOL)
//             </h2>
//             <p className="text-sm text-white text-justify font-bold leading-relaxed">
//              It was established on 01-03-1996 as envisaged in State Agriculture Policy 1996. It started functioning since 01-06-1996 with the sole objective of promoting agro-based industries/food processing industries including commercial agriculture/horticulture/animal husbandry/fisheries, in broad terms to promote investment in Agriculture and allied sectors. The Agricultural Promotion and Investment Corporation of Odisha Limited(APICOL), a Government of Odisha undertaking, coming up as a promotional organisation for providing assistance to agricultural enterprises in the state of Odisha. Apicol would promote enterprises in agriculture within the state with suitable guidance for project formulation, counseling, enterprise development and assistance in project implementation. The Agricultural Promotion & Investment Corporation of Odisha Limited (APICOL), a wholly owned corporation of Govt. of Odisha. Incorporated on 01.03.1996 (CIN: U01409OR1996SGC004357), it started functioning since 01 June 1996 under the Department of Agriculture and Farmers’ Empowerment. The primary objective of the corporation is to promote Commercial Agri Enterprises in the state in the following sectors:
//             </p>
//           </div>
//           <div className="flex justify-center ">
//             <img
//               src={welcomeImg}
//               alt="Welcome"
//               className="w-full max-w-lg object-contain shadow-lg rounded-lg"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Welcome;

import welcomeImg from "../../assets/images/welcome-apicol-819x1024.png";
import bg1 from "../../assets/images/bg1.jpg";
import SlideInFromLeft from "../animation/SlideInFromLeft";
import SlideInFromRight from "../animation/SlideInFromRight";

export default function Welcome() {
  return (
    <section
      className="py-16  bg-gray-50 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <div className="max-w-7xl items-center justify-center  mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <SlideInFromLeft className=" animate-slide-in-left p-5   ">
              <h6 className="text-orange-700 font-semibold mb-2 text-sm uppercase tracking-wide">
                Welcome to
              </h6>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 leading-tight">
                The Agricultural Promotion and Investment Corporation of Odisha
                Limited (APICOL)
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                <p>
                  It was established on <strong>01-03-1996</strong> as envisaged
                  in State Agriculture Policy 1996. It started functioning since{" "}
                  <strong>01-06-1996</strong> with the sole objective of
                  promoting agro-based industries/food processing industries
                  including commercial agriculture/horticulture/animal
                  husbandry/fisheries.
                </p>
                <p>
                  APICOL, a Government of Odisha undertaking, serves as a
                  promotional organisation for providing assistance to
                  agricultural enterprises in the state of Odisha. We promote
                  enterprises in agriculture within the state with suitable
                  guidance for project formulation, counseling, enterprise
                  development and assistance in project implementation.
                </p>
                <div className="pt-4">
                  <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors duration-300 font-semibold">
                    Learn More About Us
                  </button>
                </div>
              </div>
          </SlideInFromLeft>

          <SlideInFromRight className="w-full p-5  animate-slide-in-right">
            {/* IMAGE */}
            <div className="relative group">
              <img
                src={welcomeImg}
                alt="Welcome to APICOL"
                className="rounded-lg shadow-xl w-full   object-fit  h-[30rem] transform group-hover:scale-105 transition-transform duration-500"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent rounded-lg"></div> */}
            </div>
          </SlideInFromRight>
        </div>
      </div>
    </section>
  );
}
