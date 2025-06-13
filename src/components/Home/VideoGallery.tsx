import React from "react";

// const videos = [
//   "https://www.youtube.com/embed/kpld32X_Q2o",
//   "https://youtu.be/kpld32X_Q2o?si=NMr1w2mSyXb195Ow",
//   "https://youtu.be/HTKzQ8spZ9c?si=bnh8dnCXAbVfsaRm",
//   "https://youtu.be/M8l4oUuPGpE?si=pTUoeco3fcdtEoc4",
//   "https://youtu.be/zzQdYfcU1mM?si=MWnF4NALvX-V_dIr",
//   "https://youtu.be/MW6cO2KQh6s?si=Ccl9g-KXTrRALEQz",
//   "https://youtu.be/gx0kQ1Ymfa0?si=zGERvZ27oYI5ni_0",
//   "https://youtu.be/gx0kQ1Ymfa0",
// ];


const rawVideos = [
  "https://www.youtube.com/embed/kpld32X_Q2o",
  "https://youtu.be/kpld32X_Q2o?si=NMr1w2mSyXb195Ow",
  "https://youtu.be/HTKzQ8spZ9c?si=bnh8dnCXAbVfsaRm",
  "https://youtu.be/M8l4oUuPGpE?si=pTUoeco3fcdtEoc4",
  "https://youtu.be/zzQdYfcU1mM?si=MWnF4NALvX-V_dIr",
  "https://youtu.be/MW6cO2KQh6s?si=Ccl9g-KXTrRALEQz",
  "https://youtu.be/gx0kQ1Ymfa0?si=zGERvZ27oYI5ni_0",
  "https://youtu.be/gx0kQ1Ymfa0?si=wF3qjCheR64A8b_1",
];

// Extract video ID and convert to embed URL
const getEmbedUrl = (url: string) => {
  const match = url.match(/(?:youtu\.be\/|embed\/|v=)([a-zA-Z0-9_-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
};

const embeddedVideos = rawVideos.map(getEmbedUrl).filter(Boolean);
const VideoGallery: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto ">
      {Array.from({ length: Math.ceil(embeddedVideos.length / 4) }, (_, rowIndex) => (
        <div key={rowIndex} className="flex group h-60">
          {embeddedVideos.slice(rowIndex * 4, rowIndex * 4 + 4).map((videoUrl, idx) => (
            <div
              key={idx}
              className="flex group-hover:flex-[0.5] hover:flex-[2] transition-all duration-500 overflow-hidden"
            >
              <iframe
                src={videoUrl ?? ''}
                title={`video-${rowIndex * 4 + idx}`}
                className="w-full h-full p-[1px]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default VideoGallery;
