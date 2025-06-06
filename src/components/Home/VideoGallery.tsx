import React from "react";

const videos = [
  "https://www.youtube.com/embed/kpld32X_Q2o",
  "https://www.youtube.com/embed/kpld32X_Q2o",
  "https://www.youtube.com/embed/kpld32X_Q2o",
  "https://www.youtube.com/embed/kpld32X_Q2o",
  "https://www.youtube.com/embed/kpld32X_Q2o",
  "https://www.youtube.com/embed/kpld32X_Q2o",
  "https://www.youtube.com/embed/kpld32X_Q2o",
  "https://www.youtube.com/embed/kpld32X_Q2o",
];

const VideoGallery: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto ">
      {Array.from({ length: Math.ceil(videos.length / 4) }, (_, rowIndex) => (
        <div key={rowIndex} className="flex group h-60">
          {videos.slice(rowIndex * 4, rowIndex * 4 + 4).map((videoUrl, idx) => (
            <div
              key={idx}
              className="flex group-hover:flex-[0.5] hover:flex-[2] transition-all duration-500 overflow-hidden"
            >
              <iframe
                src={videoUrl}
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
