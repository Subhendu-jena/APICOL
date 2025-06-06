import React from "react";
import ImageGallery from "./ImageGallery";
import VideoGallery from "./VideoGallery";

const Gallery: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Photo Gallery Section */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Photo Gallery</h2>
              <button className="text-sm font-medium text-orange-600 hover:underline">
                View All
              </button>
            </div>
            <ImageGallery />
          </div>

          {/* Video Gallery Section */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Video Gallery</h2>
              <button className="text-sm font-medium text-orange-600 hover:underline">
                View All
              </button>
            </div>
            <VideoGallery />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
