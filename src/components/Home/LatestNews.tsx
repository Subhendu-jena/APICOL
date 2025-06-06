import React from 'react';

const LatestNews: React.FC = () => {
  return (
    <div className="w-full bg-orange-600 flex items-center overflow-hidden">
      {/* Fixed box for "Latest News" */}
      <div className="bg-black text-white text-center px-4 py-2 w-40 flex-shrink-0 text-sm z-5 font-semibold">
        Latest News
      </div>

      {/* Scrolling text */}
      <div className="whitespace-nowrap animate-marquee text-white text-[14px] font-bold ml-4">
        Welcome to The Agricultural Promotion and Investment Corporation of Odisha Limited (APICOL). Established on 01-03-1996, APICOL aims to promote agro-based industries and support agricultural enterprises in Odisha. <span className="underline ml-1 cursor-pointer hover:text-yellow-300">Click here for more info</span>
      </div>
    </div>
  );
};

export default LatestNews;
