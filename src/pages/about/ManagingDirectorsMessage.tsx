import React from "react";
import prem from "../../assets/chiefs/Sh. Nikhil Pawan Kalyan,Managing Director-APICOL.jpeg";
const ManagingDirectorsMessage: React.FC = () => {
  return (
    <>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Managing Director's Message
          </h2>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
            <div className="col-span-1">
              <img
                src={prem}
                alt="Managing Director"
                className="w-50 h-50 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">
                  Sri Nikhil Pawan Kalyan , IAS
                </p>
                <p className="text-gray-600"> Managing Director, APICOL</p>
              </div>
            </div>
            <div className="col-span-4">
              <blockquote className="text-md text-gray-700 italic leading-relaxed mb-4">
               " APICOL was established in 1996 as a wholly owned corporation of
                Govt. of Odisha with intent to promote commercial agriculture
                and agri-business in the state for upliftment of agricultural
                economy. Ever since, APICOL has been promoting and nurturing
                Agribusiness units through implementation of various schemes and
                activities."
              </blockquote>
              <blockquote className="text-md text-gray-700  leading-relaxed mb-4">
                In the last 25 years APICOL has supported 1,972 Commercial Agri
                Enteprises (CAEs) and 4,587 Agro Service Centres (ASCs) with
                aggregate subsidies amounting to Rs.308 crore. Besides, it has
                augmented creation of 2.29 lakh shallow tube well/dug well/bore
                well/ lift irrigation points irrigating about 5.725 lakh
                Hectares of agricultural land with release of subsidies
                amounting to Rs.650 core. In addition to capital support by way
                of subsidies, APICOL has been providing exposure, training,
                handholding to Agri-entrepreneurs in the state. Today the state
                has come far ahead in production of milk, egg, meat, fish,
                seafood, cashew and value addition through primary and secondary
                food processing. APICOL has played a significant role in this
                path of progress.
              </blockquote>
              <blockquote className="text-md text-gray-700  leading-relaxed mb-4">
                Our state govt. have strong focus on developing agriculture
                sector and has been taking various measures for all round
                development. The corporation is now implementing Mukhyamantri
                Krushi Udyog Yojana (MKUY), Agriculture Entrepreneurship
                Promotion Scheme (AEPS), Prime Minister Formalization of Micro
                Food Processing Enterprises (PMFME) and Agri Export Policy (AEP)
                in the state. APICOL is gearing up with coordinated efforts for
                holistic development of the Agribusiness ecosystem in the state.
                Through this official website, APICOL intends to strengthen its
                outreach with more focused, efficient and time bound services to
                entrepreneurs.
              </blockquote>
              <blockquote className="text-md text-gray-700  leading-relaxed mb-4">
                I extend my gratitude to APICOL and NIC officials who helped
                delivering the useful website to connect and serve the Agrarian
                Community and wish it great success.
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagingDirectorsMessage;
