import React from "react";
import { Link } from "react-router-dom";

interface HoverCardProps {
  image: string;
  title: string;
  description?: string;
  link?: string;
}

const HoverCard: React.FC<HoverCardProps> = ({
  image,
  title,
  description,
  link = "#",
}) => {
  return (
    <Link to={link} target="_blank">
      <div className="relative overflow-hidden rounded-xl shadow-lg group h-80 w-full">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition duration-500 group-hover:blur-sm"
        />

        {/* Text Overlay */}
        <div className="absolute bottom-0 left-0 w-full bg-white/80 backdrop-blur-md transition-all duration-500 group-hover:h-1/2 h-14 px-4 py-3 overflow-hidden">
          <div className="transition-transform duration-500 group-hover:-translate-y-1">
            <h3 className="text-md text-center font-semibold text-gray-900">
              {title}
            </h3>
            {description && (
              <p className="text-sm text-gray-700 text-clamp-3 hidden group-hover:block ">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HoverCard;
