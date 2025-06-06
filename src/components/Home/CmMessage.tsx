// import React from "react";
// import bg from "../../assets/images/360_F_198051606_qB9GmDGg79tCtoiHkuTtYAQlqpN6feyL.jpg";
// import cm from "../../assets/images/shrimohanchaaranmajhi.png";

import ScrollAnimate from "../animation/scrollAnimate";

// const CmMessage: React.FC = () => {
//   return (
//     <>
//     <div className="h-1 bg-orange-500"></div>
//       <div className="bg-white bg-opacity-90 w-full h-full px-6 py-10">
//         <div
//           className="bg-cover bg-center bg-no-repeat h-auto"
//           style={{ backgroundImage: `url(${bg})` }}
//         >
//           <div className="max-w-6xl mx-auto">
//             <h2 className="text-3xl font-bold text-center mb-10">
//               Message From Hon'ble Chief Minister of Odisha
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-7   min-w-7xl mx-auto">
//               <div className="flex justify-center col-span-2">
//                 <img src={cm} alt="Chief Minister" className="w-60 h-auto " />
//               </div>
//               <div className="col-span-4 flex flex-col justify-center">
//                 <p className="text-gray-700 text-lg font-medium leading-relaxed mb-6">
//                   Over the years, APICOL has played a crucial role in the
//                   evolution of Odia cinema, offering a range of services and
//                   initiatives aimed at enhancing the quality and reach of
//                   regional films. To further its mission, OFDC is now embarking
//                   on the design and development of a bilingual web portal that
//                   will serve as a dynamic platform for managing and
//                   disseminating all its content and services.
//                 </p>
//                 <h1 className="text-xl font-bold text-gray-800">
//                   SHRI MOHAN CHARAN MAJHI
//                 </h1>
//                 <h3 className="text-gray-600">
//                   Hon'ble Chief Minister of Odisha
//                 </h3>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     <div className="h-1 bg-orange-500"></div>

//     </>
//   );
// };

// export default CmMessage;

import cm from "../../assets/all/cm.jpeg";
import bgCM from "../../assets/all/bgf.png"
export default function MessageSection() {
  return (
    < >
      <div className="h-1 bg-orange-500"></div>
      <section
       className="bg-cover bg-center bg-black py-8"  style={{ backgroundImage: `url(${bgCM})` }}
      >
        <div className="container bg-transparent mx-auto px-4">
          <ScrollAnimate className="text-3xl md:text-4xl font-bold text-center mb-6 animate-fade-in">
            Message From Hon'ble Chief Minister of Odisha
          </ScrollAnimate>

          <div className="mx-auto max-w-6xl px-2">
            <ScrollAnimate className="p-8 md:p-8 animate-slide-in-left">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/3">
                  <div className="relative group">
                    <img
                      src={cm}
                      alt="Shri Mohan Charan Majhi"
                      className="rounded-full shadow-lg w-full aspect-square object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="w-full md:w-2/3">
                  <div className="mb-6">
                    <i className="fas fa-quote-left text-3xl text-orange-600 mb-4"></i>
                  </div>
                  <p className="text-gray-700 mb-8 text-lg leading-relaxed italic">
                    "Agriculture is the backbone of Odisha's economy. Through
                    APICOL, we are committed to empowering our farmers with
                    modern technology, financial support, and sustainable
                    practices. Our vision is to make Odisha a leading state in
                    agricultural innovation and food security, ensuring
                    prosperity for our farming communities."
                  </p>
                  <div className="border-l-4 border-orange-600 pl-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-1">
                      SHRI MOHAN CHARAN MAJHI
                    </h2>
                    <h3 className="text-lg text-orange-600 font-semibold">
                      Hon'ble Chief Minister of Odisha
                    </h3>
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>
      <div className="h-1 bg-orange-500"></div>
    </>
  );
}
