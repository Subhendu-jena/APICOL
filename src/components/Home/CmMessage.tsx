import React from "react";
import bg from "../../assets/images/360_F_198051606_qB9GmDGg79tCtoiHkuTtYAQlqpN6feyL.jpg";
import cm from "../../assets/images/shrimohanchaaranmajhi.png";

const CmMessage: React.FC = () => {
  return (
    <>
    <div className="h-1 bg-orange-500"></div>
      <div className="bg-white bg-opacity-90 w-full h-full px-6 py-10">
        <div
          className="bg-cover bg-center bg-no-repeat h-auto"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Message From Hon'ble Chief Minister of Odisha
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-7   min-w-7xl mx-auto">
              <div className="flex justify-center col-span-2">
                <img src={cm} alt="Chief Minister" className="w-60 h-auto " />
              </div>
              <div className="col-span-4 flex flex-col justify-center">
                <p className="text-gray-700 text-lg font-medium leading-relaxed mb-6">
                  Over the years, APICOL has played a crucial role in the
                  evolution of Odia cinema, offering a range of services and
                  initiatives aimed at enhancing the quality and reach of
                  regional films. To further its mission, OFDC is now embarking
                  on the design and development of a bilingual web portal that
                  will serve as a dynamic platform for managing and
                  disseminating all its content and services.
                </p>
                <h1 className="text-xl font-bold text-gray-800">
                  SHRI MOHAN CHARAN MAJHI
                </h1>
                <h3 className="text-gray-600">
                  Hon'ble Chief Minister of Odisha
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div className="h-1 bg-orange-500"></div>

    </>
  );
};

export default CmMessage;
