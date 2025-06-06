import React from "react";
import a from "../../assets/images/gallery/WhatsApp Image 2021-06-10 at 1.07.10 PM (1).jpg";
import b from "../../assets/images/gallery/WhatsApp Image 2021-06-10 at 1.07.12 PM (2).jpeg";
import c from "../../assets/images/gallery/WhatsApp Image 2021-06-10 at 1.16.58 PM (2).jpeg";
import d from "../../assets/images/gallery/image-1630743150890.jpg";

const images = [a, b, c, d, c, d,a, b];

const ImageGallery: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto ">
      {Array.from({ length: Math.ceil(images.length / 4) }, (_, rowIndex) => (
      <div key={rowIndex} className="flex group  h-60">
        {images.slice(rowIndex * 4, rowIndex * 4 + 4).map((img, idx) => (
          <div
            key={idx}
            className="flex-1 group-hover:flex-[0.5] hover:flex-[2] transition-all duration-1200 overflow-hidden"
          >
            <img
              src={img}
              alt={`gallery-${idx}`}
              className="w-full h-full object-cover p-[1px]"
            />
          </div>
        ))}
      </div>
        ))}
    </div>
  );
};

export default ImageGallery;

