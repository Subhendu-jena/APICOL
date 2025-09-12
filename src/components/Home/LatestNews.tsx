import React, { useEffect } from 'react';
import { useTextSize } from '../../variables/textSizeContext';
// import { useSelector } from 'react-redux';
// import type { RootState } from '../../store/store/store';
import { latestNews } from '../../config/strapiController';

const LatestNews: React.FC = () => {
  const { textSize } = useTextSize();
  //  const { latestNews }:any = useSelector(
  //   (state: RootState) => state.api
  // );
 const fetchData = async () => {
  const data = await latestNews();
  console.log(data);
};

useEffect(() => {
  fetchData();
})
  // console.log(latestNews );
  return (
    <div className="w-full bg-orange-600 flex items-center overflow-hidden" style={{ fontSize: `${textSize}px` }}>
      {/* Fixed box for "Latest News" */}
      <div className="bg-black text-white text-center px-4 py-2 w-40 flex-shrink-0 text-sm z-5 font-semibold">
        Latest News
      </div>

      {/* Scrolling text */}
      <div className="whitespace-nowrap animate-marquee text-white text-[14px] font-bold ml-4">
         <span className="underline ml-1 cursor-pointer hover:text-yellow-300">Click here for more info</span>
      </div>
    </div>
  );
};

export default LatestNews;
