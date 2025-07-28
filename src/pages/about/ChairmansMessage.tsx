import React from "react";
import prem from "../../assets/chiefs/Sh. Shubham Saxena, Director, Agriculture and Food Production, Odisha.png";
const ChairmansMessage: React.FC = () => {
  return (
    <>
      <div className="space-y-8 p-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Director's Message
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
                  Sri Shubham Saxena , IAS
                </p>
                <p className="text-gray-600"> Director, </p>
                <p className="text-gray-600">Agriculture and Food Production </p>
              </div>
            </div>
            <div className="col-span-4">
              <blockquote className="text-md text-gray-700 italic leading-relaxed mb-4 text-justify">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus finibus, mauris vitae vehicula dignissim, nunc nisl
                tempus sem, et cursus risus metus eget lorem. Vivamus ex felis,
                gravida vitae mi id, placerat ultricies quam. Duis euismod,
                tortor non viverra vehicula, mi magna iaculis urna, ut bibendum
                ante massa in nibh. In vitae suscipit leo. Sed quis nibh vel
                eros blandit convallis vitae pharetra neque. Ut commodo orci
                quis purus blandit facilisis. Aliquam erat volutpat. Vivamus
                eget felis ac nisi imperdiet iaculis. Vivamus in tortor
                vulputate, blandit magna a, sagittis dui."
              </blockquote>
              <blockquote className="text-md text-gray-700  leading-relaxed mb-4 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus finibus, mauris vitae vehicula dignissim, nunc nisl
                tempus sem, et cursus risus metus eget lorem. Vivamus ex felis,
                gravida vitae mi id, placerat ultricies quam. Duis euismod,
                tortor non viverra vehicula, mi magna iaculis urna, ut bibendum
                ante massa in nibh. In vitae suscipit leo. Sed quis nibh vel
                eros blandit convallis vitae pharetra neque. Ut commodo orci
                quis purus blandit facilisis. Aliquam erat volutpat. Vivamus
                eget felis ac nisi imperdiet iaculis. Vivamus in tortor
                vulputate, blandit magna a, sagittis dui.
              </blockquote>
              <blockquote className="text-md text-gray-700  leading-relaxed mb-4 text-justify">
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
              <blockquote className="text-md text-gray-700  leading-relaxed mb-4 text-justify">
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

export default ChairmansMessage;
