// import React from "react";
// const rawVideos = [
//   "https://www.youtube.com/embed/kpld32X_Q2o",
//   "https://youtu.be/kpld32X_Q2o?si=NMr1w2mSyXb195Ow",
//   "https://youtu.be/HTKzQ8spZ9c?si=bnh8dnCXAbVfsaRm",
//   "https://youtu.be/M8l4oUuPGpE?si=pTUoeco3fcdtEoc4",
//   "https://youtu.be/zzQdYfcU1mM?si=MWnF4NALvX-V_dIr",
//   "https://youtu.be/MW6cO2KQh6s?si=Ccl9g-KXTrRALEQz",
//   "https://youtu.be/gx0kQ1Ymfa0?si=zGERvZ27oYI5ni_0",
//   "https://youtu.be/gx0kQ1Ymfa0?si=wF3qjCheR64A8b_1",
// ];

// // Extract video ID and convert to embed URL
// const getEmbedUrl = (url: string) => {
//   const match = url.match(/(?:youtu\.be\/|embed\/|v=)([a-zA-Z0-9_-]{11})/);
//   return match ? `https://www.youtube.com/embed/${match[1]}` : null;
// };

// const embeddedVideos = rawVideos.map(getEmbedUrl).filter(Boolean);
// const VideoGallery: React.FC = () => {
//   return (
//     <div className="max-w-6xl mx-auto ">
//       {Array.from({ length: Math.ceil(embeddedVideos.length / 4) }, (_, rowIndex) => (
//         <div key={rowIndex} className="flex group h-60">
//           {embeddedVideos.slice(rowIndex * 4, rowIndex * 4 + 4).map((videoUrl, idx) => (
//             <div
//               key={idx}
//               className="flex group-hover:flex-[0.5] hover:flex-[2] transition-all duration-500 overflow-hidden"
//             >
//               <iframe
//                 src={videoUrl ?? ''}
//                 title={`video-${rowIndex * 4 + idx}`}
//                 className="w-full h-full p-[1px]"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               />
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default VideoGallery;



import React from 'react';

const VideoGallery: React.FC = () => {
  const socialEmbeds = {
    YouTube: {
      embedUrl: "https://www.youtube.com/embed/8M3R15Ku6c8?si=NyHJgmaXkJ8I3j6b", // Replace with actual ID
      fallbackUrl: "https://youtu.be/8M3R15Ku6c8?si=NyHJgmaXkJ8I3j6b", // optional
    },
  };

  const renderYouTubeFeed = () => (
    <iframe
      src={socialEmbeds.YouTube.embedUrl}
      width="100%"
      height="100%"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="rounded-lg"
      title="YouTube Video"
    />
  );

  return (
    <div className="border rounded-lg bg-white shadow-inner overflow-hidden">
      <div className="bg-gradient-to-r from-red-50 to-red-100 px-4 py-3 border-b">
        <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
          ▶️ Latest on YouTube
        </h3>
      </div>
      <div className="h-96">{renderYouTubeFeed()}</div>
    </div>
  );
};

export default VideoGallery;
