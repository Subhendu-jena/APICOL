import React from "react";
import { FileDown } from "lucide-react";

const ReportCard: React.FC<{
  title: string;
  bgImage: string;
  description: string;
  link: string;
}> = ({ title, bgImage, description, link }) => {
  return (
    <div className="group relative w-[300px] h-[200px] bg-white border border-orange-200 rounded-md shadow-sm overflow-hidden">
      {/* Background image */}
      <a
        href={link}
        target="_blank"
        className="text-sm font-medium text-gray-700 hover:underline flex items-center gap-1"
      >
        <img
          src={bgImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        {/* Top-right decoration */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-orange-300 rounded-bl-full z-10" />

        {/* Content that slides up */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6  bg-opacity-90 transform translate-y-[60%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600 mt-4">{description}</p>
          <div className="mt-4 flex items-center justify-between">
            <a
              href={link}
              target="_blank"
              download={true}
              className="text-sm font-medium text-gray-700 hover:underline flex items-center gap-1"
            >
              Download <span>→</span>
            </a>
            <FileDown className="w-8 h-8 text-orange-400" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default ReportCard;
